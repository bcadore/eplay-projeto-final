import styled from 'styled-components'
import { breakpoints, cores } from '../../styles'
import { TagContainer } from '../Tag/styles'
import { Link } from 'react-router-dom'

export const Card = styled(Link)`
  display: block;
  position: relative;
  padding: 0.5rem;
  background-color: ${cores.cinza};
  color: ${cores.branco};
  border-radius: 0.5rem;
  text-decoration: none;
  height: 100%;

  img {
    display: block;
    width: 100%;
    object-fit: fill;
    max-height: 14rem;
    height: 100%;

    @media (max-width: ${breakpoints.tablet}) {
      max-height: 13rem;
    }
  }

  ${TagContainer} {
    margin-right: 0.25rem;
  }
`

export const Titulo = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  display: block;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`

export const Descricao = styled.p`
  font-size: 0.75rem;
  line-height: 1.25rem;
  display: block;
  margin-top: 0.5rem;
  text-align: justify;
`

export const Infos = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`
