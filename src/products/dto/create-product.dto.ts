import { ApiProperty } from "@nestjs/swagger";
import {
  IsArray,
  IsBoolean,
  IsEmail,
  IsNumber,
  IsString,
  Length,
} from "class-validator";

export class CreateProductDto {
  @ApiProperty({
    example: "Wi-Fi роутер D-Link DIR-300",
    description: "Наименование продукта",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly title: string;

  @ApiProperty({
    example: "4x100 Мбит/с, 4 (802.11n), Wi-Fi 250 Мбит/с",
    description: "Описание",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly desc: string;

  @ApiProperty({
    example:
      "Создание беспроводной сети Беспроводной маршрутизатор DIR-300/NRU Wireless 150 (до 150 Мбит/с) позволяет создать беспроводную сеть для дома. Подключив беспроводной маршрутизатор к выделенной линии или широкополосному модему, пользователи могут совместно использовать высокоскоростное соединение с Интернет для поиска информации в Web, проверки электронной почты и общения on-line с друзьями и семьей.",
    description: "Характеристики",
  })
  @IsString({ message: "Должно быть строкой" })
  readonly characteristic: string;

  @ApiProperty({ example: "Wi-Fi роутеры", description: "Категория" })
  @IsString({ message: "Должно быть строкой" })
  readonly category: string;

  @ApiProperty({ example: 2499, description: "Цена" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly price: number;

  @ApiProperty({
    example: ["url1", "url2", "url3", "url4"],
    description: "Изображения товара",
  })
  @IsArray({ message: "Должно быть массивом" })
  readonly urlImages: [];

  @ApiProperty({ example: true, description: "Хит" })
  @IsBoolean({ message: "Должно быть boolean" })
  readonly hit: boolean;

  @ApiProperty({ example: false, description: "Акция" })
  @IsBoolean({ message: "Должно быть boolean" })
  readonly promotion: boolean;

  @ApiProperty({ example: 3499, description: "Старая цена" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly oldPrice?: number;
}
