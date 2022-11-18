import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Stripe from 'stripe';
import { stripe } from '../../config/stripe';
import { DescriptionSuccess, ImageContainer,  ListImagesContainer,  SuccessContainer, TitleSuccess } from '../../styles/pages/success';

interface ISuccessProduct {
  name: string 
  image: string
}
interface ISuccess {
  customerName: string 
  listProductsPurchased: ISuccessProduct[]
}

const Sucess: React.FC<ISuccess> = ({customerName, listProductsPurchased}) => {
  const labelProductCustomer = listProductsPurchased.length > 0 ? 'as suas camisetas já estão a caminho' : 'a sua camiseta já está a caminho'
  return  (
    <>
     <Head>
      <title>Sucesso - Ignite Shop</title>
      <meta name='robots' content='noindex' />
    </Head>
    <SuccessContainer>
      <ListImagesContainer>
        {listProductsPurchased.map((product) => (
          <ImageContainer key={product.name}>
            <Image src={product.image} alt={product.name} width={120} height={120} />
          </ImageContainer>
        ))}
      </ListImagesContainer>
      <TitleSuccess>Compra Efetuada!</TitleSuccess>
      <DescriptionSuccess>
        Uhull! {customerName}, {labelProductCustomer} da sua casa.
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

  console.log(session.line_items);

  const listProductsPurchased = session.line_items.data.map((item) => {
    const product = item.price.product as Stripe.Product
    return {
      name: product.name,
      image: product.images[0]
    }

  })

  const customerName = session.customer_details.name  

  return {
    props: {
      customerName,
      listProductsPurchased
    }
  }
}

export default Sucess;