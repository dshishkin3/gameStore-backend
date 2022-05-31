import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @ApiProperty({
    example: "Офис и сеть",
    description: "Наименование категории",
  })
  @Prop({ required: true })
  title: string;

  @ApiProperty({
    example: "url",
    description: "Ссылка на изображение категории",
  })
  @Prop({ required: true })
  urlImg: string;

  @ApiProperty({
    example: [
      { id: 1, title: "wi-fi роутеры", urlImg: "url" },
      { id: 2, title: "мыши", urlImg: "url" },
    ],
    description: "Подкатегории",
  })
  @Prop({ required: true })
  subcategories: [];
}

export const CategorySchema = SchemaFactory.createForClass(Category);
