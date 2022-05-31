import { forwardRef, Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "src/auth/auth.module";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";
import { Product, ProductSchema } from "./schemas/schema.product";

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    forwardRef(() => AuthModule),
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    JwtModule,
  ],
})
export class ProductsModule {}
