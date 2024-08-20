import React from 'react';
import { useSelector } from 'react-redux';

const OrderSummary = () => {
  const order = useSelector(state => state.order.items);

  return (
    <div>
      <h3>Resumo do Pedido</h3>
      <ul>
        {order.map(item => (
          <li key={item.id}>{item.name} - R$ {item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default OrderSummary;
