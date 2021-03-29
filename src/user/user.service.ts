import { Injectable, Logger } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

  async findAll(): Promise<User[]>{
    return await this.userRepository.find()
  }

  async create(body: User) {
    const heroBody = User.fromUserInput(body)
    return await this.userRepository.save(heroBody)
  }

  async update(body: User) {
    const heroBody = User.fromUserInput(body)
    return await this.userRepository.save(heroBody)
  }

  async delete(body: User) {
    const heroBody = User.fromUserInput(body)
    return await this.userRepository.delete(heroBody)
  }

}
