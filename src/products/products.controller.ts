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
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import { CreateProductDto } from "./dto/create-product.dto";
import { GetAllProductsDto } from "./dto/getAll-products.dto";
import { ProductsService } from "./products.service";
import { Product } from "./schemas/schema.product";

export interface PaginationOptionsInterface {
  limit: number;
  page: number;
}

@ApiTags("products")
@Controller("products")
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: "Получение всех продуктов" })
  @ApiResponse({ status: 200, type: [Product] })
  @Get()
  getAll(@Query() { page, size }) {
    return this.productsService.getAllProducts(page, size);
  }

  @ApiOperation({ summary: "Получение продукта" })
  @ApiResponse({ status: 200, type: Product })
  @Get("/product/:id")
  getProduct(@Param("id") id) {
    return this.productsService.getProductById(id);
  }

  @ApiOperation({ summary: "Получение продуктов по категории" })
  @ApiResponse({ status: 200, type: [Product] })
  @Get("/category/:name")
  getProductsCategory(@Param("name") name) {
    return this.productsService.getProductByCategories(name);
  }

  @ApiOperation({ summary: "Получение продуктов 'хиты'" })
  @ApiResponse({ status: 200, type: [Product] })
  @Get("/hits")
  getProductsHits(@Query() { page, size }) {
    return this.productsService.getProductsHits(page, size);
  }

  @ApiOperation({ summary: "Получение продуктов 'акции'" })
  @ApiResponse({ status: 200, type: [Product] })
  @Get("/promotions")
  getProductsPromotions(@Query() { page, size }) {
    return this.productsService.getProductsPromotions(page, size);
  }

  @ApiOperation({ summary: "Поиск товара" })
  @ApiResponse({ status: 200, type: [Product] })
  @Get("/search/:name")
  search(@Param("name") name, @Query() { page, size }) {
    return this.productsService.searchProduct(name, page, size);
  }

  @ApiOperation({ summary: "Создание продукта" })
  @ApiResponse({ status: 200, type: Product })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() productDto: CreateProductDto) {
    return this.productsService.createProduct(productDto);
  }

  @ApiOperation({ summary: "Обновление продукта" })
  @ApiResponse({ status: 200, type: Product })
  @UseGuards(JwtAuthGuard)
  @Put("/:id")
  update(@Param("id") id, @Body() productDto: CreateProductDto) {
    return this.productsService.updateProduct(id, productDto);
  }

  @ApiOperation({ summary: "Удаление продукта" })
  @ApiResponse({ status: 200, type: Product })
  @UseGuards(JwtAuthGuard)
  @Delete("/:id")
  delete(@Param("id") id) {
    return this.productsService.deleteProduct(id);
  }
}
