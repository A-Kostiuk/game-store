import React from 'react';
import { Image, OrderItemStyled, PriceText, PriceWrapper } from 'src/components/ui/order-item/styles';
import Title from 'src/components/ui/title/title';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { DeleteButton } from 'src/components/styled';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from 'src/redux/cart/reducer';

function OrderItem({ image, title, price, id }) {

  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };

  return (
    <OrderItemStyled>
      <Image src={`./img${image}`} width={200} height={170} alt={title} />
      <Title level={2}>{title}</Title>
      <div>
        <PriceWrapper>
          <PriceText>
            {`${price} грн.`}
          </PriceText>
          <DeleteButton onClick={handleClick}>
            <AiOutlineCloseCircle color='white' size={30} />
          </DeleteButton>
        </PriceWrapper>
      </div>
    </OrderItemStyled>
  );
}

export default OrderItem;
