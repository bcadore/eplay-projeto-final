import Product from '../Product'
import { Container, List } from './styles'

export type Props = {
  title: string
  background: 'gray' | 'black'
}

const ProductsList = ({ background, title }: Props) => (
  <Container background={background}>
    <div className="container">
      <h2>{title}</h2>
      <List>
        <Product
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="tese"
          image="https://placehold.co/225x250"
          infos={['-10%', 'R$ 150,00']}
        />
        <Product
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="tese"
          image="https://placehold.co/225x250"
          infos={['-10%', 'R$ 150,00']}
        />
        <Product
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="tese"
          image="https://placehold.co/225x250"
          infos={['-10%', 'R$ 150,00']}
        />
        <Product
          title="Nome do jogo"
          category="Ação"
          system="Windows"
          description="tese"
          image="https://placehold.co/225x250"
          infos={['-10%', 'R$ 150,00']}
        />
      </List>
    </div>
  </Container>
)

export default ProductsList
