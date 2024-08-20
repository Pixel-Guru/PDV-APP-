import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMenu } from '../features/menuSlice';
import { addItem } from '../features/orderSlice';
import { List } from 'antd';

const MenuList = () => {
  const dispatch = useDispatch();
  const menu = useSelector(state => state.menu.items);

  useEffect(() => {
    dispatch(fetchMenu());
  }, [dispatch]);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <List
      itemLayout="horizontal"
      dataSource={menu}
      renderItem={item => (
        <List.Item>
          <List.Item.Meta
            title={item.name}
            description={`Preço: R$ ${item.price}`}
          />
          <button onClick={() => handleAddItem(item)}>Adicionar ao Pedido</button>
        </List.Item>
      )}
    />
  );
};

export default MenuList;
