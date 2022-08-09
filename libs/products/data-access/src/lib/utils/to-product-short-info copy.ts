import { ProductByPrice } from '../models/product-by-price.type';

export const toProductShortInfo = ({
  id,
  name,
  sku,
  price: {
    price,
    retailer: { name: retailer },
  },
}: ProductByPrice) => ({
  id,
  name,
  sku,
  price,
  retailer,
});
