import Image from 'next/image';
import { Handbag } from 'phosphor-react';
import React from 'react';
import { CartContainer, QuantityCart } from './styles';

const HeaderCart: React.FC = () => {
  return (
    <CartContainer>
      <QuantityCart>1</QuantityCart>
      <Handbag size={32} />
    </CartContainer>
  )
}

export default HeaderCart;