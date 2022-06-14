import React from 'react';
import { Paragraph } from 'src/components/styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CartItemPrice, CloseButton, StyledCartItem } from 'src/components/ui/cart-item/styles';

function CartItem({ title, price, id, onClick }) {
  return (
    <StyledCartItem>
      <Paragraph>{title}</Paragraph>
      <CartItemPrice>
        <span>{price} грн.</span>
        <CloseButton onClick={() => onClick(id)} >
          <AiOutlineCloseCircle color='white' size={15} title='Close button'/>
        </CloseButton>
      </CartItemPrice>
    </StyledCartItem>
  );
}

export default CartItem;
