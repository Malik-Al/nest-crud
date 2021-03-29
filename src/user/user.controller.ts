import { Controller, Get, Post, Param, Put, Delete, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from '../entity/user.entity';

@Controller()
export class UserController {
  constructor(private readonly usersService: UserService) {}


  @Get('/result')
  findAll() {
    return this.usersService.findAll();
  }

  @Post('/create')
  async create(@Body() body: User) {
    return this.usersService.create(body);
  }


  @Put('/update')
  async updateEmployee(@Body() body:User){
    return this.usersService.update(body);
  }


  @Delete('/delete/:id')
  async remove(@Param('id') id) {
    return this.usersService.delete(id);
  }

}
