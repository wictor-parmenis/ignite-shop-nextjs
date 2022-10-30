import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import React from 'react';
import { CartContainer, QuantityCart, CartButton } from './styles';

const HeaderCart: React.FC = () => {
 const colorCart = '#e1e1e6'
  return (
    <CartContainer>
      <CartButton>
        <Handbag size={32} color={colorCart} />
      </CartButton>
      <QuantityCart>1</QuantityCart>
    </CartContainer>
  )
}

export default HeaderCart;