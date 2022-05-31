import { ApiProperty } from "@nestjs/swagger";
import {
  isArray,
  IsArray,
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  Length,
} from "class-validator";

export class CreateCategoryDto {
  @ApiProperty({
    example: "Офис и сеть",
    description: "Наименование категории",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly title: string;

  @ApiProperty({
    example: "url",
    description: "Ссылка на изображение категории",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly urlImg: string;

  @ApiProperty({
    example: [
      { id: 1, title: "wi-fi роутеры", urlImg: "url" },
      { id: 2, title: "мыши", urlImg: "url" },
    ],
    description: "Подкатегории",
  })
  @IsArray({ message: "Должно быть array" })
  readonly subcategories: string;
}
