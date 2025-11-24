import styled from 'styled-components'
import { Link } from 'react-router-dom'

import { breakpoints, cores } from '../../styles'

import { Props } from '.'

export const ButtonContainer = styled.button<Props>`
  border: 2px solid
    ${props => (props.variant === 'primary' ? cores.verde : cores.branco)};
  color: ${cores.branco};
  background-color: ${props =>
    props.variant === 'primary' ? cores.verde : 'transparent'};
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 0.5rem;
`

export const ButtonLink = styled(Link)`
  border: 2px solid ${cores.branco};
  color: ${cores.branco};
  background-color: transparent;
  font-size: 1rem;
  font-weight: bold;
  padding: 8px 16px;
  text-decoration: none;
  border-radius: 0.5rem;

  @media (max-width: ${breakpoints.mobile}) {
    font-size: 1rem;
    padding: 0.3rem 0.6rem;
  }
`
