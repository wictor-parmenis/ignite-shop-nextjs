import { HomeContainer, Product } from '../styles/pages/home'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import  Stripe  from 'stripe'
import { stripe } from '../config/stripe'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import CartButtonProduct from './product/_components/CartButtonProduct'

interface IProduct {
  id: string
  imageUrl: string
  name: string
  price: number
}

interface IHome {
  products: IProduct[]
}

export default function Home({products}:IHome) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });
  return (
    <>
    <Head>
      <title>Home - Ignite Shop</title>
    </Head>
    
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {
      products.map((product) => (
        <Link key={product.id} href={`/product/${product.id}`} prefetch={false}>
        <Product  className='keen-slider__slide'>
          <Image src={product.imageUrl} width={520} height={480}/>
          <footer>
            <strong>{product.name}</strong>
            <CartButtonProduct />
          </footer>
        </Product>
        </Link>
        ))
      }
    </HomeContainer>
   </>

  )
}


export const getStaticProps:GetStaticProps = async () => {
  const {data} = await stripe.products.list({
    expand: ['data.default_price']
  })
  const products = data.map((product) => {
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      imageUrl: product.images[0],
      name: product.name,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(price.unit_amount / 100)
    }
  })
  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 hours
  }
}