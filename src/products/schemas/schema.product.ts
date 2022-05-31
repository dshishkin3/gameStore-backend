import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @ApiProperty({
    example: "Wi-Fi роутер D-Link DIR-300",
    description: "Наименование продукта",
  })
  @Prop({ required: true })
  title: string;

  @ApiProperty({
    example: "4x100 Мбит/с, 4 (802.11n), Wi-Fi 250 Мбит/с",
    description: "Описание",
  })
  @Prop({ required: true })
  desc: string;

  @ApiProperty({
    example:
      "Создание беспроводной сети Беспроводной маршрутизатор DIR-300/NRU Wireless 150 (до 150 Мбит/с) позволяет создать беспроводную сеть для дома. Подключив беспроводной маршрутизатор к выделенной линии или широкополосному модему, пользователи могут совместно использовать высокоскоростное соединение с Интернет для поиска информации в Web, проверки электронной почты и общения on-line с друзьями и семьей.",
    description: "Характеристики",
  })
  @Prop({ required: true })
  characteristic: string;

  @ApiProperty({ example: "Wi-Fi роутеры", description: "Категория" })
  @Prop({ required: true })
  category: string;

  @ApiProperty({ example: 2499, description: "Цена" })
  @Prop({ required: true })
  price: number;

  @ApiProperty({ example: true, description: "Хит" })
  @Prop({ required: false })
  hit: boolean;

  @ApiProperty({ example: false, description: "Акция" })
  @Prop({ required: false })
  promotion: boolean;

  @ApiProperty({
    example: ["url1", "url2", "url3", "url4"],
    description: "Изображения товара",
  })
  @Prop({ required: true })
  urlImages: [];

  @ApiProperty({ example: 3499, description: "Старая цена" })
  @Prop({ required: false })
  oldPrice: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
