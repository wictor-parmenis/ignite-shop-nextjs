import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import React from 'react';
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
  }
}

const Product: React.FC<IProduct> = ({product}) => {
  return (
    <ProductContainer>
    <ImageContainer>
      <Image src={product.imageUrl} width={520} height={480} alt='' />
    </ImageContainer>

    <ProductDetails>
      <h1>{product.name}</h1>
      <span>{product.price}</span>

      <p>{product.description}</p>

      <button>
        Comprar agora
      </button>
    </ProductDetails>
  </ProductContainer>
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
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100)
    }},
    revalidate: 60 * 60 * 1 // 1 hour
  }
}