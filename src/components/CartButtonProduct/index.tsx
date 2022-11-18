import { Handbag } from 'phosphor-react';
import React from 'react';
import { CartButton } from './styles';


const CartButtonProduct: React.FC = () => {
    const colorCart = '#e1e1e6'

    return (
          <CartButton>
            <Handbag size={32} color={colorCart} />
          </CartButton>
      )
}

export default CartButtonProduct;