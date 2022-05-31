import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateCategoryDto } from "src/products/dto/create-category.dto";
import { GetAllProductsDto } from "src/products/dto/getAll-products.dto";
import { IAllProducts } from "src/products/products.service";
import {
  Category,
  CategoryDocument,
} from "src/categories/schemas/schema.categories";

export interface IAllCategories {
  categories: Category[];
  count: number;
}

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private CategoryModel: Model<CategoryDocument>
  ) {}

  async getAllProducts(page: number, size: number): Promise<IAllCategories> {
    if (!size) {
      size = 8;
    }

    const skip = (page - 1) * size;

    const categories = await this.CategoryModel.find().limit(size).skip(skip);
    const allCategories = await this.CategoryModel.find();

    return {
      categories,
      count: allCategories.length,
    };
  }

  async getCategory(name: string) {
    const category = await this.CategoryModel.find({ title: name });
    return category;
  }

  async addCategory(dto: CreateCategoryDto): Promise<Category> {
    const newProduct = new this.CategoryModel({
      ...dto,
    });

    return newProduct.save();
  }

  async updateCategory(
    id: string,
    categoryDto: CreateCategoryDto
  ): Promise<Category> {
    return this.CategoryModel.findByIdAndUpdate(id, {
      $set: categoryDto,
    });
  }

  async deleteCategory(id: string): Promise<Category> {
    return this.CategoryModel.findByIdAndDelete(id);
  }
}
