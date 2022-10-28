import { GetServerSideProps } from 'next';
import Link from 'next/link';
import React from 'react';
import { DescriptionSuccess, ImageContainer,  SuccessContainer, TitleSuccess } from '../../styles/pages/success';

// import { Container } from './styles';

const Sucess: React.FC = () => {
  return  <SuccessContainer>
    <TitleSuccess>Compra Efetuada!</TitleSuccess>
    <ImageContainer>
      <img src="" alt="" />
    </ImageContainer>
    <DescriptionSuccess>
      Uhull! Wictor Gomes, seua camiseta já está a caminho da sua casa.
    </DescriptionSuccess>
    <Link href='/'>
      Voltar ao catálogo
    </Link>
  </SuccessContainer>
}

export const getServerSideProps:GetServerSideProps = async ({query}) => {

  const {session_id} = query;
  

  return {
    props: {}
  }
}

export default Sucess;