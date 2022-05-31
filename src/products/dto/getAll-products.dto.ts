import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNumber, IsString, Length } from "class-validator";

export class GetAllProductsDto {
  @ApiProperty({ example: 1, description: "Номер страницы" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly page: number;

  @ApiProperty({ example: 8, description: "Кол-во товаров на 1 странице" })
  @IsNumber({}, { message: "Должно быть числом" })
  readonly size: number;
}
