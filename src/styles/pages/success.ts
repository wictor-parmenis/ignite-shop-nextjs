import {styled} from '..'

export const SuccessContainer = styled('main', {
    display:  'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    margin: 'auto',
    'height': 656,

    a: {
        display: 'block',
        marginTop: '5rem',
        fontSize: '$lg',
        color: '$green500',
        textDecoration: 'none',
        fontWeight: 'bold',
    
        '&:hover': {
          color: '$green300',
        }
      }
})

export const ImageContainer = styled('div', {
    width: '100%',
    maxWidth: 140,
    height: 140,
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: '50%',
    boxShadow: '0px 0px 60px rgba(0,0,0,0.8)',
    marginTop: '4rem',
  
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',
  
  
    img: {
      objectFit: 'cover',
    }
})

export const ListImagesContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '3rem',
  width: '100%',

  'div + div': {
    marginLeft: 'calc(-120px / 2)'
  }
})


export const TitleSuccess = styled('h1', {
    color: '$gray100',
    fontSize: '$2xl'
})

export const DescriptionSuccess = styled('p', {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginTop: '2rem',
    lineHeight: 1.4,
})


