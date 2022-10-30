import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Stripe from 'stripe';
import { stripe } from '../../config/stripe';
import { DescriptionSuccess, ImageContainer,  SuccessContainer, TitleSuccess } from '../../styles/pages/success';

interface ISuccessProduct {
  name: string 
  image: string
}
interface ISuccess {
  customerName: string 
  product: ISuccessProduct
}

const Sucess: React.FC<ISuccess> = ({customerName, product}) => {
  return  (
    <>
     <Head>
      <title>Sucesso - Ignite Shop</title>
      <meta name='robots' content='noindex' />
    </Head>
    <SuccessContainer>
      <TitleSuccess>Compra Efetuada!</TitleSuccess>
      <ImageContainer>
        <Image src={product.image} alt={product.name} width={120} height={120} />
      </ImageContainer>
      <DescriptionSuccess>
        Uhull! {customerName}, sua {product.name} já está a caminho da sua casa.
      </DescriptionSuccess>
      <Link href='/'>
        Voltar ao catálogo
      </Link>
    </SuccessContainer>
    </>
    
  )
}

export const getServerSideProps:GetServerSideProps = async ({query}) => {

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  const {session_id} = query;

  const session = await stripe.checkout.sessions.retrieve(String(session_id), {
    expand: ['line_items', 'line_items.data.price.product']
  });
  const customerName = session.customer_details.name
  const product = session.line_items.data[0].price.product as Stripe.Product
  

  return {
    props: {
      customerName,
      product: {
        name: product.name,
        image: product.images[0]
      }
    }
  }
}

export default Sucess;