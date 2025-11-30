import styled from 'styled-components'
import { cores } from '../../styles'

export const Row = styled.div`
  display: flex;
  column-gap: 24px;
`
export const InputGroup = styled.div`
  flex: auto;

  label {
    font-size: 14px;
    margin-bottom: 8px;
    display: block;
  }
  input {
    width: 100%;
    height: 32px;
    padding: 0px 8px;
    background-color: ${cores.branco};
    border: 1px solid ${cores.branco};
  }
`
