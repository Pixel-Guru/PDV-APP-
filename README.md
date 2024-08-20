
# PDV Restaurante

PDV Restaurante é uma aplicação de ponto de venda (Point of Sale - POS) desenvolvida com React e Redux, projetada para gerenciar pedidos em um restaurante. A aplicação permite visualizar um menu, adicionar itens a um pedido e exibir o resumo do pedido.

## Sumário

- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Dependências](#dependências)
- [Configuração do Redux](#configuração-do-redux)
- [Componentes](#componentes)
  - [MenuList](#menulist)
  - [OrderSummary](#ordersummary)
- [Páginas](#páginas)
- [Como Rodar o Projeto](#como-rodar-o-projeto)

## Instalação

Para iniciar o projeto, siga os passos abaixo:

1. Clone o repositório ou faça o download do código-fonte.
   
   ```bash
   git clone https://github.com/seu-usuario/pdv-restaurante.git
   cd pdv-restaurante
   ```

2. Instale as dependências do projeto utilizando Yarn ou npm:

   ```bash
   yarn install
   ```

   ou

   ```bash
   npm install
   ```

## Estrutura do Projeto

A estrutura do projeto está organizada da seguinte forma:

```
/src
  /components       # Componentes reutilizáveis da interface
    Header.js       # Componente de cabeçalho
    Footer.js       # Componente de rodapé
    MenuList.js     # Lista de itens do menu
    OrderSummary.js # Resumo do pedido
  /features         # Arquivos Redux Slices
    menuSlice.js    # Lógica e estado do menu
    orderSlice.js   # Lógica e estado dos pedidos
  /pages            # Páginas da aplicação
    Home.js         # Página inicial
    Checkout.js     # Página de checkout
  App.js            # Componente principal da aplicação
  store.js          # Configuração do Redux Store
```

## Dependências

As principais dependências utilizadas neste projeto incluem:

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux Toolkit**: Ferramentas para simplificar a utilização do Redux.
- **React Redux**: Integração do Redux com o React.
- **Axios**: Biblioteca para fazer requisições HTTP.
- **Ant Design (antd)**: Framework de componentes de UI para React.

## Configuração do Redux

O Redux está configurado no arquivo `src/store.js`. Ele utiliza o `configureStore` do Redux Toolkit para combinar os slices `menuSlice` e `orderSlice`.

```javascript
import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menuSlice';
import orderReducer from './features/orderSlice';

export const store = configureStore({
  reducer: {
    menu: menuReducer,
    order: orderReducer,
  },
});
```

## Componentes

### MenuList

O componente `MenuList` exibe a lista de itens do menu e permite que os usuários adicionem itens ao pedido.

```javascript
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
```

### OrderSummary

O componente `OrderSummary` exibe o resumo dos itens adicionados ao pedido.

```javascript
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
```

## Páginas

Atualmente, o projeto possui duas páginas principais:

- **Home**: A página principal onde os itens do menu são exibidos e os pedidos são feitos.
- **Checkout**: Página de checkout (a ser desenvolvida) onde o usuário finaliza o pedido.

## Como Rodar o Projeto

Para rodar o projeto localmente, siga os passos abaixo:

1. Certifique-se de que as dependências estão instaladas conforme descrito na seção [Instalação](#instalação).

2. Inicie o servidor de desenvolvimento:

   ```bash
   yarn start
   ```

   ou

   ```bash
   npm start
   ```

3. Acesse o aplicativo no navegador através do endereço:

   ```
   http://localhost:3000
   ```

## Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e pull requests.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
