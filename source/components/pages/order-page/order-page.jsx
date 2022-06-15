import React from 'react';
import { Paragraph, Section } from 'src/components/styled';
import Title from 'src/components/ui/title/title';
import { EmptyText, Orders, OrdersList, TotalPrice } from 'src/components/pages/order-page/styles';
import { useSelector } from 'react-redux';
import { calcTotalPrice } from 'src/components/utils';
import OrderItem from 'src/components/ui/order-item/order-item';

function OrderPage() {
  const items = useSelector((state) => state.cart.itemsInCart);
  const good = (count) => {
    switch (count) {
      case 1:
        return 'товар';
      case 2:
      case 3:
      case 4:
      case 5:
        return 'товара';
      default:
        return 'товарів';
    }
  };
  return (
    <Section>
      <Title level={1} visuallyHidden>Cart</Title>
      {items.length > 0 ?
        <Orders>
          <OrdersList>
            {items.map((game) => <OrderItem key={game.id} {...game} />)}
          </OrdersList>
          <TotalPrice>{`${items.length} ${good(items.length)} на ${calcTotalPrice(items)} грн.`}</TotalPrice>
        </Orders>
        : <EmptyText>Кошик порожній.</EmptyText>}
    </Section>
  );
}

export default OrderPage;
