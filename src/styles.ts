import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#EEE',
  black: '#111',
  gray: '#333',
  lightGray: '#c0c0c0',
  green: '#10AC84',
  red: '#FF3860'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '991px',
  mobile: '767px'
}

export const EstiloGlobal = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Roboto", sans-serif;
        list-style: none;
    }

    body {
        background-color: ${colors.black};
        color: ${colors.white};
        padding-top: 2rem;
    }

    .container {
      max-width: 1024px;
      width: 80%;
      margin: 0 auto;

      @media (max-width: ${breakpoints.tablet}){
        max-width: 85%;
      }
      @media (max-width: ${breakpoints.mobile}){
        max-width: 90%;
      }
    }
`
