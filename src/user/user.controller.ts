import { Body, Controller, Get, Param, Post, Header } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getHelloWorld() {
    return this.userService.getHelloWorld();
  }
  @Get('/employee/:id')
  @Header('Content-Type', 'application/json')
  getById(@Param('id') id: string) {
    return this.userService.getById(id);
  }
  @Get('/async/user')
  async getAsyncById(): Promise<{
    id: string;
    data: { id: number; name: string };
  }> {
    return this.userService.getById('1');
  }
  @Post()
  createUser(@Body() userDto: UserDto) {
    return userDto;
  }
}
