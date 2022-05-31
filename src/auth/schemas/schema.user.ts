import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type UserDocument = User & Document;

@Schema()
export class User {
  @ApiProperty({ example: "user@mail.ru", description: "Почтовый адрес" })
  @Prop({ required: true })
  email: string;

  @ApiProperty({ example: "123456789", description: "Пароль" })
  @Prop({ required: true })
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
