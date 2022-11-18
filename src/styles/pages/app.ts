import { styled } from "..";

export const ContainerApp = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minHeight: '100vh',

    
})

export const HeaderApp = styled('header', {
    padding: '2rem 0',
    width: '100%',
    height: '70px',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    button: {
        marginLeft: 'auto'
    }
})