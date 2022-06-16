import React from 'react';
import { DeleteButton, Paragraph } from 'src/components/styled';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { CartItemPrice, StyledCartItem } from 'src/components/ui/cart-item/styles';
import { useDispatch } from 'react-redux';
import { deleteItemFromCart } from 'src/redux/cart/reducer';

function CartItem({ title, price, id }) {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(deleteItemFromCart(id));
  };
  return (
    <StyledCartItem>
      <Paragraph>{title}</Paragraph>
      <CartItemPrice>
        <span>{price} грн.</span>
        <DeleteButton onClick={handleClick}>
          <AiOutlineCloseCircle color='white' size={15} />
        </DeleteButton>
      </CartItemPrice>
    </StyledCartItem>
  );
}

export default CartItem;
