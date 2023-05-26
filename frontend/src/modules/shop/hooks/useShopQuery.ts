import { useQuery } from 'react-query';
import { QUERY_KEYS } from '../../../common/consts/query-keys.const';
import { ShopService } from '../shop.service';

const shopService = new ShopService();

export const useGetAllShops = () => useQuery(QUERY_KEYS.SHOP, () => shopService.findAll());
