import { AppDataSource } from "../config/connection";
import { Product } from "../entities/Product.entity";

export class ProductService {
  private repo = AppDataSource.getRepository(Product);

  async getAll() {
    return this.repo.find();
  }

  async getById(id: number) {
    return this.repo.findOneBy({ id });
  }
}
