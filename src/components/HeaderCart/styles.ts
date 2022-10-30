import { styled } from "../../styles";

// Make real container for wrapper component and help to adjust span item.

export const CartContainer = styled('div', {
    'display': 'flex',
    'alignItems': 'center',
    'justifyContent': 'center',
    'position' :'relative',
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