import Tag from '../Tag'
import { Card, Titulo, Descricao } from './styles'

const Product = () => (
  <Card>
    <img src="https://placehold.co/222x250" alt="" />
    <Titulo>Nome do jogo</Titulo>
    <Tag>Categoria</Tag>
    <Tag>Windows</Tag>
    <Descricao>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
      molestias odit quibusdam hic ea! Laboriosam omnis nulla expedita
      recusandae atque reiciendis similique molestiae possimus quidem quis,
      veritatis eum facere vitae?
    </Descricao>
  </Card>
)

export default Product
