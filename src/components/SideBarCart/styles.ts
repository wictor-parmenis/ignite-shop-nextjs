import { styled } from "../../styles";

export const ContainerSideBarCart = styled('div', {
    flex: '1',
    justifyContent: 'center',
    maxWidth: '35%',
    height: '100%',
    backgroundColor: '$gray800',
    position: 'absolute',
    padding: '3rem 2rem 2rem 2rem',
    top: '0',
    right: '0',
    'z-index': -1,

})

export const TitleSideBarCart = styled('h2', {
    color: '$gray100',
    fontSize: '$xl',
    marginBottom: '2rem'
})

export const CloseButton = styled('span', {
    color: '$gray300',
    fontSize: '$xl',
    position: 'absolute',
    top: '10',
    right: '10'
})

export const ContainerCardCartProducts = styled('div', {
    display: 'flex',
    gap: '1rem'
})

export const CardCartProduct = styled('div', {
    h3: {

    },

    span: {

    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 130,
    height: 145,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    marginTop: '4rem',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  
  
    img: {
      objectFit: 'cover',
    }
})
export const DescriptionsCardCart = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    
    'remove-item': {
        marginTop: '1rem',
        fontWeight: 'bold',
        color: '$green500'
    }
})

export const FooterCart = styled('footer', {
    
   
})



export const DescriptionsFooter = styled('div', {
    display: 'flex',
    flexDirection: 'column'
})

export const RowFooter = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'

})

export const ButtonContainerFooter = styled('div', {
    marginTop: '2rem',
    button: {
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 0,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',
    
        '&:disabled': {
          opacity: '0.6',
          cursor: 'not-allowed'
        },
    
        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        }
      },
})