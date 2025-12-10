import styled from 'styled-components'
import { colors } from '../../styles'

type InportGroupProps = {
  maxWidth?: string
}

type MarginProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive?: boolean
}

export const Row = styled.div<MarginProps>`
  display: flex;
  column-gap: 24px;
  margin-top: ${props => props.marginTop || '0'};
  align-items: flex-end;
`
export const InputGroup = styled.div<InportGroupProps>`
  flex: auto;
  max-width: ${props => props.maxWidth || 'auto'};

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input,
  select {
    width: 100%;
    height: 32px;
    padding: 0px 8px;
    background-color: ${colors.white};
    border: 1px solid ${colors.white};

    &.error {
      border: 2px solid ${colors.red};
    }
  }
`
export const TabButton = styled.button<TabButtonProps>`
  margin-right: 16px;
  padding: 0px 8px;
  height: 32px;
  color: ${colors.white};
  background-color: ${props => (props.isActive ? colors.green : colors.black)};
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;

  img {
    margin-right: 8px;
  }
`
