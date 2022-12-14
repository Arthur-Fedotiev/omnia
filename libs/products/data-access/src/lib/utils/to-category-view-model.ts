import { Category } from '@omnia/products/domain';
import { CategoryEnum } from '../constants/category.enum';
import { CategoryViewModel } from '../models/CategoryViewModel';

export const toCategoryViewModel = ({
  id,
  Name,
}: Category): CategoryViewModel =>
  new CategoryViewModel(id as string, Name as CategoryEnum);
