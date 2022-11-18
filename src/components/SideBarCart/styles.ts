import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

export const ContainerSideBarCart = styled(Dialog.Content, {
    flex: '1',
    justifyContent: 'center',
    width: '36rem',
    height: '100%',
    backgroundColor: '$gray800',
    position: 'fixed',
    padding: '2rem 2rem 2rem 0',
    top: '0',
    right: '0',

    '&.hidden': {
        display: 'none'
    }

})

export const TitleSideBarCart = styled('h2', {
    color: '$gray100',
    fontSize: '$xl',
    marginBottom: '2rem',
    marginTop: '4rem',
    paddingLeft: '2rem',
})

export const CartClose = styled(Dialog.Close, {
    background: "none",
    border: "none",
    color: "$gray500",
    position: "absolute",
    top: "1.75rem",
    right: "1.75rem",
  });


export const MainCardCart = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    height: '75vh',
    justifyContent: 'space-between',
    alignContent: 'space-between'
})

export const ContainerCardCartProducts = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    alignItems: 'flex-start',
})

export const CardCartProduct = styled('div', {
    display: 'flex',
    gap: '1rem',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    paddingLeft: '1rem',

    height: '8rem',

})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 100,
    height: 100,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    
    marginLeft: '1rem',

  
  
    img: {
      objectFit: 'cover',
    },

    span: {
        '&.quantity': {
            'position': 'absolute',
            'backgroundColor': '$green500',
            'borderRadius': '50%',
            'top': '0',
            'left': '0',
            height: '20px',
            width: '20px',
            border: '2px solid $gray900',
            display: 'flex',
            alignItems: 'center',
            justifyContent :'center',
            color: '$gray100',
            fontWeight: 'bold',
            fontSize: '$st',

            marginLeft: '1rem'
        }
    }
})
export const DescriptionsCardCart = styled('div', {
    display: 'flex',
    flexDirection: 'column',

    span: {
        marginTop: '1rem',
        fontWeight: 'bold',
        fontSize: '$lg'
    },

    p: {
        '&:first-child': {
            fontSize: '$xl',
          },
          '&.remove-item': {
              marginTop: '1.5rem',
              fontWeight: 'bold',
              color: '$green500',
              cursor: 'pointer'
          }
    },

    
})

export const FooterCart = styled('footer', {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
    paddingRight: '1rem'  ,
    paddingLeft: '2rem'
})



export const DescriptionsFooter = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',

    div: {
        display:'flex',
        justifyContent: 'space-between',

        '&:first-child': {

            p: {
                '&:first-child': {

                },
                '&:nth-child(2)': {
                    fontSize: '$lg'
                }
            }
            
        },

        '&:nth-child(2)': {
            p: {
                '&:first-child': {
                    fontSize: '$lg',
                    fontWeigth: 'bold',

                },
                '&:nth-child(2)': {
                    fontSize: '$xl',
                    fontWeigth: 'bold',
                }
            }
        }
        

        
    }
})

export const RowFooter = styled('div', {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'

})

export const ButtonContainerFooter = styled('div', {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',


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
        width: '90%',
        margin: 'auto',
    
        '&:disabled': {
          opacity: '0.6',
          cursor: 'not-allowed'
        },
    
        '&:not(:disabled):hover': {
          backgroundColor: '$green300',
        }
      },
})