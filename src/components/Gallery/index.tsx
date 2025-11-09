import Section from '../Section'
import zelda from '../../assets/images/zelda.png'
import { ListItens, Itens } from './styles'

const Gallery = () => (
  <Section title="Galeria" background="black">
    <ListItens>
      <Itens>
        <img src={zelda} alt="imagem do link" />
      </Itens>
      <Itens>
        <img src={zelda} alt="imagem do link" />
      </Itens>
      <Itens>
        <img src={zelda} alt="imagem do link" />
      </Itens>
      <Itens>
        <img src={zelda} alt="imagem do link" />
      </Itens>
    </ListItens>
  </Section>
)

export default Gallery
