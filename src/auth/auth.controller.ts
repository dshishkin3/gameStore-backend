import { Body, Controller, Post, UseGuards } from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { AuthService } from "./auth.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { JwtAuthGuard } from "./jwt-auth.guard";
import { User } from "./schemas/schema.user";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @ApiOperation({ summary: "Авторизация" })
  @ApiResponse({ status: 200, type: User })
  @Post("/login")
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  // @ApiOperation({ summary: "Регистрация" })
  // @ApiResponse({ status: 200, type: User })
  // @Post("/registration")
  // registration(@Body() userDto: CreateUserDto) {
  //   return this.authService.registration(userDto);
  // }
}
