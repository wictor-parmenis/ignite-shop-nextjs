import { AppProps } from "next/app"
import { globalStyles } from "../styles/global"
import { ContainerApp, HeaderApp } from "../styles/pages/app"
import Logo from '../../public/images/logo.svg'

globalStyles()

function App({ Component, pageProps }:AppProps) {

  return (
    <ContainerApp>
      <HeaderApp>
        <img src={Logo.src} alt="" />
      </HeaderApp>
      <Component {...pageProps} />
    </ContainerApp>
  )
}

export default App
