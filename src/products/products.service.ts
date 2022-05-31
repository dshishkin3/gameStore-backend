import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateProductDto } from "./dto/create-product.dto";
import { GetAllProductsDto } from "./dto/getAll-products.dto";
import { Product, ProductDocument } from "./schemas/schema.product";

export interface IAllProducts {
  products: Product[];
  count: number;
}

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>
  ) {}

  async getAllProducts(page: number, size: number): Promise<IAllProducts> {
    if (!page) {
      page = 1;
    }

    if (!size) {
      size = 8;
    }

    const skip = (page - 1) * size;

    const products = await this.productModel.find().limit(size).skip(skip);
    const allProducts = await this.productModel.find();

    return {
      products,
      count: allProducts.length,
    };
  }

  async getProductById(id: string): Promise<Product> {
    return this.productModel.findById(id);
  }

  async getProductByCategories(name: string): Promise<IAllProducts> {
    const products = await this.productModel.find({ category: name });
    return {
      products,
      count: products.length,
    };
  }

  async getProductsHits(page: number, size: number): Promise<IAllProducts> {
    if (!page) {
      page = 1;
    }

    if (!size) {
      size = 8;
    }

    const skip = (page - 1) * size;

    const products = await this.productModel
      .find({ hit: true })
      .limit(size)
      .skip(skip);
    const allProducts = await this.productModel.find({ hit: true });

    return {
      products,
      count: allProducts.length,
    };
  }

  async getProductsPromotions(
    page: number,
    size: number
  ): Promise<IAllProducts> {
    if (!page) {
      page = 1;
    }

    if (!size) {
      size = 8;
    }

    const skip = (page - 1) * size;

    const products = await this.productModel
      .find({ promotion: true })
      .limit(size)
      .skip(skip);
    const allProducts = await this.productModel.find({ promotion: true });
    return {
      products,
      count: allProducts.length,
    };
  }

  async searchProduct(
    name: string,
    page: number,
    size: number
  ): Promise<IAllProducts> {
    const regex = new RegExp(name, "i");

    if (!page) {
      page = 1;
    }

    if (!size) {
      size = 8;
    }

    const skip = (page - 1) * size;

    const products = await this.productModel
      .find({ title: regex })
      .limit(size)
      .skip(skip);

    const allProducts = await this.productModel.find({ title: regex });

    return {
      products,
      count: allProducts.length,
    };
  }

  async createProduct(productDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel({
      ...productDto,
      hit: productDto.hit ? productDto.hit : false,
      promotion: productDto.promotion ? productDto.promotion : false,
    });

    return newProduct.save();
  }

  async updateProduct(
    id: string,
    productDto: CreateProductDto
  ): Promise<Product> {
    return this.productModel.findByIdAndUpdate(id, {
      $set: productDto,
    });
  }

  async deleteProduct(id: string): Promise<Product> {
    return this.productModel.findByIdAndDelete(id);
  }
}
