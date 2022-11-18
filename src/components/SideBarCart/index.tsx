import axios from 'axios';
import Image from 'next/image';
import { X } from 'phosphor-react';
import React from 'react';
import { toast } from 'react-toastify';
import { useShoppingCart } from 'use-shopping-cart';
import { 
        ContainerSideBarCart,
        CardCartProduct,
        ContainerCardCartProducts,
        FooterCart,
        TitleSideBarCart,
        ImageContainer,
        DescriptionsFooter,
        ButtonContainerFooter,
        DescriptionsCardCart,
        MainCardCart,
        CartClose
    }
 from './styles';

interface ILineItem {
    price: string,
    quantity: number
}

const SideBarCart: React.FC = () => {
    const {cartDetails, cartCount, formattedTotalPrice, removeItem, clearCart} = useShoppingCart()


    const listProducts = Object.values(cartDetails)    

    async function handleFinishShopping() {

        if  (listProducts.length === 0) {
            toast.error('Adicione ao menos um item no carrinho para prosseguir com sua compra.')
            return;
        }

        const lineItemsStripe = listProducts.map((item) => ({price: item.price_id, quantity: item.quantity}))
        
        try {
            const {data: checkoutUrl} = await axios.post('/api/checkout', {
                line_items: lineItemsStripe
              })
              clearCart()
              window.location.href = checkoutUrl.checkoutUrl
        } catch (error) {
            console.log('CHECKOUT ERROR ->', error);
            toast.error('Ocorreu um erro ao redirecionar para a página de compras')
        }
    }
    

  return <ContainerSideBarCart>
        <CartClose>
            <X size={30} color={'#c4c4cc'} />
        </CartClose>
        <TitleSideBarCart>Sacola de compras</TitleSideBarCart>
        <MainCardCart>
            <ContainerCardCartProducts>
                {
                    listProducts.map((product) => (
                        <CardCartProduct key={product.id}>
                            <ImageContainer>
                                <span className="quantity">{product.quantity}</span>
                                <Image src={product.image} alt={''} width={120} height={120} />
                            </ImageContainer>
                            <DescriptionsCardCart>
                                <p>{product.name}</p>
                                <span>{product.formattedPrice}</span>
                                <p className='remove-item' onClick={() => removeItem(product.id)}>Remover</p>
                            </DescriptionsCardCart>
                        </CardCartProduct>
                    ))
                }
               
            </ContainerCardCartProducts>
            <FooterCart>
                <DescriptionsFooter>
                    <div>
                        <p>Quantidade</p>
                        <p>{ cartCount } itens</p>
                    </div>
                    <div>
                        <strong><p>Valor total</p></strong>
                        <strong><p>{formattedTotalPrice}</p></strong>
                    </div>
                </DescriptionsFooter>
                <ButtonContainerFooter>
                    <button onClick={handleFinishShopping}>Finalizar compra</button>
                </ButtonContainerFooter>
            </FooterCart>
        </MainCardCart>
  </ContainerSideBarCart>
}

export default SideBarCart;