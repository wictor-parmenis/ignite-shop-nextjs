import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { ContainerApp, HeaderApp } from "../styles/pages/app"
import Logo from '../../public/images/logo.svg'
import Image from "next/image"

globalStyles()

function App({ Component, pageProps }:AppProps) {

  return (
    <ContainerApp>
      <HeaderApp>
        <Image src={Logo} width={160} height={160} />
      </HeaderApp>
      <Component {...pageProps} />
    </ContainerApp>
  )
}

export default App
