import { useQuery } from 'react-query';
import { ProductService } from '../product.service';
import { QUERY_KEYS } from '../../../common/consts/query-keys.const';
import { Product } from '../product.interface';

const productService = new ProductService();

export const useGetAllProducts = (query?: Partial<Product>) =>
  useQuery([QUERY_KEYS.PRODUCT, query], () => productService.findAll(query));
