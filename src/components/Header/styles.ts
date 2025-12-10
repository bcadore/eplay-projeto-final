import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

export const Links = styled.ul`
  display: flex;
  margin-left: 2.5rem;

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
    margin-left: 0;
  }
`

export const HeaderBar = styled.header`
  background-color: ${colors.gray};
  padding: 1.5rem;
  border-radius: 1rem;
  margin-bottom: 2rem;

  div {
    display: flex;
    align-items: center;
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    font-weight: bold;
  }
`

export const HeaderRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    @media (max-width: ${breakpoints.tablet}) {
      flex: 1;
      justify-content: space-between;
      ${Links} {
        display: none;
      }
    }
  }
`

export const NavMobile = styled.nav`
  display: none;

  &.is-open {
    display: block;
  }
`

export const LinkItem = styled.li`
  margin-right: 1rem;

  @media (max-width: ${breakpoints.tablet}) {
    margin-right: 0;

    a {
      display: block;
      padding: 1rem 0;
      text-align: center;
    }
  }
`
export const CartButton = styled.a`
  display: flex;

  img {
    margin-left: 0.5rem;
  }

  @media (max-width: ${breakpoints.tablet}) {
    span {
      display: none;
    }
  }
`
export const HamburguerMenu = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;
  margin-right: 1rem;

  span {
    height: 3px;
    width: 25px;
    background: ${colors.white};
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    display: flex;
  }
`
