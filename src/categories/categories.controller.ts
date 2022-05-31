import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { CreateCategoryDto } from "src/products/dto/create-category.dto";
import { GetAllProductsDto } from "src/products/dto/getAll-products.dto";
import { Category } from "src/categories/schemas/schema.categories";
import { CategoriesService } from "./categories.service";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";

@ApiTags("categories")
@Controller("categories")
export class CategoriesController {
  constructor(private categoryService: CategoriesService) {}

  @ApiOperation({ summary: "Получение всех категорий" })
  @ApiResponse({ status: 200, type: [Category] })
  @Get()
  getAll(@Query() { page, size }) {
    return this.categoryService.getAllProducts(page, size);
  }

  @ApiOperation({ summary: "Получение категории" })
  @ApiResponse({ status: 200, type: Category })
  @Get("/:name")
  getCategory(@Param("name") name) {
    return this.categoryService.getCategory(name);
  }

  @ApiOperation({ summary: "Добавление категории" })
  @ApiResponse({ status: 200, type: [Category] })
  @UseGuards(JwtAuthGuard)
  @Post()
  add(@Body() dto: CreateCategoryDto) {
    return this.categoryService.addCategory(dto);
  }

  @ApiOperation({ summary: "Обновление категории" })
  @ApiResponse({ status: 200, type: [Category] })
  @UseGuards(JwtAuthGuard)
  @Put("/:id")
  update(@Param("id") id, @Body() dto: CreateCategoryDto) {
    return this.categoryService.updateCategory(id, dto);
  }

  @ApiOperation({ summary: "Удаление категории" })
  @ApiResponse({ status: 200, type: [Category] })
  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  delete(@Param("id") id) {
    return this.categoryService.deleteCategory(id);
  }
}
