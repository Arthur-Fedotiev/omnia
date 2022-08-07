import { Product } from '@omnia/products/domain';
import { CategoryEnum } from '../constants/category.enum';
import { PriceViewModel } from './PriceViewModel';
import { CategoryViewModel } from './CategoryViewModel';

export class ProductViewModel {
  constructor(
    dto: Product,
    public readonly id: string = dto.Id,
    public readonly name: string = dto.Name,
    public readonly description: string = dto.Description,
    public readonly sku: string = dto.SKU,
    public readonly categories: ReadonlyArray<CategoryViewModel> = dto.Categories.map(
      ({ Id, Name }) =>
        new CategoryViewModel(Id as string, Name as CategoryEnum)
    ),
    public readonly prices: ReadonlyArray<PriceViewModel> = dto.Prices.map(
      (price) => new PriceViewModel(price)
    )
  ) {}
}
