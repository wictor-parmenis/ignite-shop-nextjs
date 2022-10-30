import { styled } from "../../styles";

export const CartContainer = styled('div', {
    height: '80px',
    width: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '$gray900',
    'position' :'relative',
})

export const CartButton = styled('div', {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    height: '60px',
    width: '60px',
    backgroundColor: '$gray800',
    borderRadius: '8px',
    cursor: 'pointer',

})



export const QuantityCart = styled('span', {
    'position': 'absolute',
    'backgroundColor': '$green500',
    'borderRadius': '50%',
    'top': '0',
    'right': '0',
    height: '25px',
    width: '25px',
    border: '4px solid $gray900',
    display: 'flex',
    alignItems: 'center',
    justifyContent :'center',
    color: '$gray100',
    fontWeight: 'bold'
})