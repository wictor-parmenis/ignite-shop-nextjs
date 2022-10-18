import { HomeContainer, Product } from '../styles/pages/home'
import shirtOne from '../../public/images/shirts/1.png'
import Image from 'next/image'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48
    }
  });
  return (
   <HomeContainer ref={sliderRef} className='keen-slider'>
    <Product className='keen_slider__slide'>
      <Image src={shirtOne} width={520} height={480}/>
      <footer>
        <strong>Camiseta x</strong>
        <span>R$ 80,00</span>
      </footer>
    </Product>
    <Product className='keen_slider__slide'>
      <Image src={shirtOne} width={520} height={480}/>
      <footer>
        <strong>Camiseta x</strong>
        <span>R$ 80,00</span>
      </footer>
    </Product>
    <Product className='keen_slider__slide'>
      <Image src={shirtOne} width={520} height={480}/>
      <footer>
        <strong>Camiseta x</strong>
        <span>R$ 80,00</span>
      </footer>
    </Product>
    <Product className='keen_slider__slide'>
      <Image src={shirtOne} width={520} height={480}/>
      <footer>
        <strong>Camiseta x</strong>
        <span>R$ 80,00</span>
      </footer>
    </Product>
   </HomeContainer>
  )
}
