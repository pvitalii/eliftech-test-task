import { useQuery } from 'react-query';
import {
  HistoryOrderCard,
  HistoryOrderGrid,
  HistoryOrderInfoBox,
  HistoryResultBox,
  HistoryResultCard,
  HistoryResultContainer,
  HistoryTotalPrice
} from './history-result.styled';
import { QUERY_KEYS } from '../../../../common/consts/query-keys.const';
import { Order } from '../../../../modules/order/order.interface';

export function HistoryResultSection() {
  const { data: foundOrders } = useQuery<Order[]>(QUERY_KEYS.ORDER);

  return (
    <HistoryResultContainer>
      {foundOrders?.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No found orders yet</p>
      ) : null}
      <HistoryResultBox>
        {foundOrders?.map((order) => {
          return (
            <HistoryResultCard key={order.id}>
              <HistoryOrderGrid>
                {order.orderItems.map((orderItem) => {
                  return (
                    <HistoryOrderCard key={orderItem.id}>
                      <div style={{ flex: 1 }}>
                        <img
                          src={process.env.REACT_APP_SERVER_URL + `/${orderItem.product.image}`}
                          alt="product"
                        />
                      </div>
                      <HistoryOrderInfoBox>
                        <p>{orderItem.product.name}</p>
                        <p>Price: {orderItem.product.price * orderItem.count}$</p>
                        <p>Count: {orderItem.count}</p>
                      </HistoryOrderInfoBox>
                    </HistoryOrderCard>
                  );
                })}
              </HistoryOrderGrid>
              <HistoryTotalPrice>Total price: {order.totalPrice}$</HistoryTotalPrice>
            </HistoryResultCard>
          );
        })}
      </HistoryResultBox>
    </HistoryResultContainer>
  );
}
