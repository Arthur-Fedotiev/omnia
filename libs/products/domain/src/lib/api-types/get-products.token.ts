import { Observable } from 'rxjs';
import { Category, Price, Product, Retailer } from '../..';

export interface ProductsApi {
  getProducts(): Observable<ReadonlyArray<Product>>;
  getOneProduct(id: string): Observable<Product>;
  getCategories(): Observable<ReadonlyArray<Category>>;
  createProduct(product: Product): Observable<Product>;
  getRetailers(): Observable<ReadonlyArray<Retailer>>;
  deleteProduct(productId: string): Observable<void>;
  updateProductPrice(product: Product, price: Price): Observable<Product>;
  getCompetitorsForCategory(
    category: Category
  ): Observable<ReadonlyArray<Retailer>>;
}
