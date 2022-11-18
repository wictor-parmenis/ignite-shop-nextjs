import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HeaderApp } from './styles';
import Logo from '../../../public/images/logo.svg'
import { useRouter } from 'next/router';
import CartButtonHeader from '../CartButtonHeader';

const Header: React.FC = () => {
  const { pathname } = useRouter();
  const showCartButton = pathname !== "/success";

  return (

    <HeaderApp className={!showCartButton && 'hidden-cart'}>
        <Link href='/'>
          <Image src={Logo} width={160} height={160} alt=''/>
        </Link>
        {showCartButton && <CartButtonHeader/>} 
    </HeaderApp>
    
  )
}

export default Header;