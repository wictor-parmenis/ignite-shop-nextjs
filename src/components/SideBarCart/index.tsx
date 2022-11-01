import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ContainerSideBarCart, CardCartProduct, CloseButton, ContainerCardCartProducts, FooterCart, TitleSideBarCart, ImageContainer, DescriptionsFooter, ButtonContainerFooter, DescriptionsCardCart, MainCardCart } from './styles';


const SideBarCart: React.FC = () => {
  return <ContainerSideBarCart>
        <CloseButton />
        <TitleSideBarCart>Sacola de compras</TitleSideBarCart>
        <MainCardCart>
            <ContainerCardCartProducts>
                <CardCartProduct>
                    <ImageContainer>
                        <Image src={''} alt={''} width={120} height={120} />
                    </ImageContainer>
                    <DescriptionsCardCart>
                        <p>Camiseta</p>
                        <span>R$ 79,90</span>
                        <p className='remove-item'>Remover</p>
                    </DescriptionsCardCart>
                </CardCartProduct>
            </ContainerCardCartProducts>
            <FooterCart>
                <DescriptionsFooter>
                    <div>
                        <p>Quantidade</p>
                        <p>3 itens</p>
                    </div>
                    <div>
                        <strong><p>Valor total</p></strong>
                        <strong><p>R$ 270,00</p></strong>
                    </div>
                </DescriptionsFooter>
                <ButtonContainerFooter>
                    <button>Finalizar compra</button>
                </ButtonContainerFooter>
            </FooterCart>
        </MainCardCart>
  </ContainerSideBarCart>
}

export default SideBarCart;