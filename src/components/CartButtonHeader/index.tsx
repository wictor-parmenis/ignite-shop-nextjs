import * as Dialog from "@radix-ui/react-dialog";
import { Handbag } from 'phosphor-react';
import React from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import SideBarCart from "../SideBarCart";
import { CartButton, CartContainer, QuantityCart } from './styles';


const CartButtonHeader: React.FC = () => {
  const colorCart = '#e1e1e6'
  const {cartCount} = useShoppingCart()

  return (
    <Dialog.Root>
        <Dialog.Trigger asChild>
            <CartContainer>
                <CartButton>
                    <Handbag size={32} color={colorCart} />
                </CartButton>
                <QuantityCart>{cartCount}</QuantityCart>
            </CartContainer>
        </Dialog.Trigger>

        <Dialog.Portal>
            <SideBarCart />
        </Dialog.Portal>
   </Dialog.Root>
  )
}

export default CartButtonHeader;