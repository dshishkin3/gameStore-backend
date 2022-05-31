import {
  HttpException,
  HttpStatus,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Model } from "mongoose";
import * as bcrypt from "bcryptjs";
import { CreateUserDto } from "./dto/create-user.dto";
import { User, UserDocument } from "./schemas/schema.user";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private jwtService: JwtService
  ) {}

  async login(dto: CreateUserDto) {
    const user = await this.validateUser(dto);
    return this.generateToken(user);
  }

  async registration(dto: CreateUserDto) {
    const hashPassword = await bcrypt.hash(dto.password, 5);
    const user = await this.userModel.create({
      ...dto,
      password: hashPassword,
    });

    return this.generateToken(user);
  }

  private async generateToken(user: User) {
    const payload = { email: user.email };
    return {
      token: this.jwtService.sign(payload),
    };
  }

  private async validateUser(dto: CreateUserDto) {
    const user: any = await this.userModel.find({ email: dto.email });

    const passwordEquals = await bcrypt.compare(dto.password, user[0].password);
    if (user[0] && passwordEquals) {
      return user[0];
    }

    throw new UnauthorizedException({
      message: "Некорректный e-mail или пароль",
    });
  }
}
