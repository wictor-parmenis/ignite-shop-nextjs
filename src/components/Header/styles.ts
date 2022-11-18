import { styled } from "../../styles";


export const HeaderApp = styled('header', {
    padding: '2rem 0',
    width: '100%',
    height: '70px',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    button: {
        marginLeft: 'auto'
    },

    '&.hidden-cart': {
        justifyContent: 'center',
    }
})


