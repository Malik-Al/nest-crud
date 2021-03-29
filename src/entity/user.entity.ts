import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { plainToClass } from 'class-transformer';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: number;

  @Column()
  genus: string;

  public static fromUserInput(input: User): User {
    return plainToClass(User, input);
  }
}
