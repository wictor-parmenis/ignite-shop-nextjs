import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useState } from 'react';
import Stripe from 'stripe';
import { stripe } from '../../config/stripe';
import { ProductContainer , ImageContainer, ProductDetails} from '../../styles/pages/product';

interface IProduct {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
}

const Product: React.FC<IProduct> = ({product}) => {
  const [creatingCheckoutSession, setCreatingCheckoutSession] = useState(false)

  async function handlePutInTheBag() {
    
    try {    
      setCreatingCheckoutSession(true)  
      const {data: checkoutUrl} = await axios.post('/api/checkout', {
        priceId: product.defaultPriceId
      })

      window.location.href = checkoutUrl.checkoutUrl
      
    } catch (error) {      
      alert('Erro ao redirecionar para página de compra.')
      setCreatingCheckoutSession(false)

    } 
  }

  return (
    <>
    <Head>
      <title>{product.name} - Ignite Shop</title>
    </Head>
      <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt='' />
      </ImageContainer>

      <ProductDetails>
        <p>{product.name}</p>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button onClick={handlePutInTheBag} disabled={creatingCheckoutSession}>
          Colocar na sacola
        </button>
      </ProductDetails>
    </ProductContainer>
  </>
)
}

export default Product;

export const getStaticPaths:GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          id: 'prod_MdL1cl3sTVtuTp'
        }
      }
    ],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({params}) => {
  const productId = params.id
  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  })

  const price = product.default_price as Stripe.Price

  return {
    props: {
     product: { id: product.id,
      imageUrl: product.images[0],
      name: product.name,
      description: product.description,
      defaultPriceId: price.id,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100)
    }},
    revalidate: 60 * 60 * 1 // 1 hour
  }
}