import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductsModule } from "./products/products.module";
import { CategoriesModule } from "./categories/categories.module";
import { AuthModule } from "./auth/auth.module";
import { JwtService } from "@nestjs/jwt";
import { AuthService } from "./auth/auth.service";
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    MongooseModule.forRoot(process.env.URL_DB),
    ProductsModule,
    CategoriesModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
