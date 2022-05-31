import { forwardRef, Module } from "@nestjs/common";
import { JwtModule, JwtService } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { JwtAuthGuard } from "src/auth/jwt-auth.guard";
import {
  Category,
  CategorySchema,
} from "src/categories/schemas/schema.categories";
import { Product, ProductSchema } from "src/products/schemas/schema.product";
import { CategoriesController } from "./categories.controller";
import { CategoriesService } from "./categories.service";

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([
      { name: Category.name, schema: CategorySchema },
    ]),
    JwtModule,
  ],
})
export class CategoriesModule {}
