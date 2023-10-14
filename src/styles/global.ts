import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:  0;
    box-sizing: border-box;
    outline: none;
  }

  :focus{
    outline:0 ;
    border-radius: 3px ;
  }


  body{
    background: ${(props) => props.theme['gray-100']};
    color: ${(props) => props.theme['gray-700']} ;
    -webkit-font-smoothing: antialiased;
  }

  body ,input , textarea, button {
    font-family: 'Roboto',sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  button{
    cursor: pointer;
  }
  a{
    text-decoration: none ;
  }
  /*remove arrow input number*/
  /* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}

::-webkit-scrollbar {
    width: 0.4rem;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.colors['base-button']}
  }
  ::-webkit-scrollbar-thumb {
    border-radius: 2rem;
    background: ${({ theme }) => theme.colors['brand-purple']}
  }
`
