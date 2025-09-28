import styled from 'styled-components'
import { cores } from '../../styles'

export const Container = styled.footer`
  background-color: ${cores.cinza};
  padding: 32px 0;
  margin-top: 80px;
  font-size: 14px;
`

export const SectionTitle = styled.h4`
  color: ${cores.branco};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 16px;
`
export const LinksList = styled.ul`
  display: flex;
  margin-top: 16px;
`

export const LinkItem = styled.a`
  color: ${cores.branco};
  text-decoration: none;
  font-size: 14px;
  margin-right: 8px;
`

export const FooterSection = styled.div`
  margin-bottom: 64px;
`

export const Copyright = styled.p`
  font-size: 14px;
  margin-top: 16px;
`
