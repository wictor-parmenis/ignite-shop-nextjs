import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { ContainerApp, HeaderApp } from "../styles/pages/app"
import Header from "../components/Header"
import { CartProvider } from 'use-shopping-cart'

globalStyles()

function App({ Component, pageProps }:AppProps) {

  return (
    <ContainerApp>
       <CartProvider
        shouldPersist
        mode="payment"
        cartMode="client-only"
        stripe={process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY}
        successUrl={`${process.env.NEXT_PUBLIC_NEXT_URL}/success`}
        cancelUrl={`${process.env.NEXT_PUBLIC_NEXT_URL}`}
        currency="BRL"
        allowedCountries={['BR']}
        billingAddressCollection={true}
        language="pt-BR"
      >
        <Header />
        <Component {...pageProps} />
      </CartProvider>
    </ContainerApp>
  )
}

export default App
