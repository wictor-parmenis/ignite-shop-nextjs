import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { ContainerApp, HeaderApp } from "../styles/pages/app"
import Logo from '../../public/images/logo.svg'
import Image from "next/image"
import HeaderCart from "../components/HeaderCart"

globalStyles()

function App({ Component, pageProps }:AppProps) {

  return (
    <ContainerApp>
      <HeaderApp>
        <Image src={Logo} width={160} height={160} />
        <HeaderCart />
      </HeaderApp>
      <Component {...pageProps} />
    </ContainerApp>
  )
}

export default App
