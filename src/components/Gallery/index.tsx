import Section from '../Section'
import { ListItens, Itens, Action, Modal, ModalContent } from './styles'

import zelda from '../../assets/images/zelda.png'
import starWars from '../../assets/images/star_wars.png'
import spiderMan from '../../assets/images/banner-homem-aranha.png'
import play from '../../assets/images/play.png'
import zoom from '../../assets/images/zoom.png'
import fechar from '../../assets/images/fechar.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: zelda
  },
  {
    type: 'image',
    url: starWars
  },
  {
    type: 'image',
    url: spiderMan
  },
  {
    type: 'video',
    url: 'http://www.youtube.com/embed/uHGSqcAHlQ'
  }
]

type Props = {
  defaultCover: string
  name: string
}

const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <ListItens>
          {mock.map((media, index) => (
            <Itens key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de ${name} `}
              />
              <Action>
                <img
                  src={getMediaIcon(media)}
                  alt="Clique para maximizar a mídia."
                />
              </Action>
            </Itens>
          ))}
        </ListItens>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="Ícone de fechar" />
          </header>
          <img src={spiderMan} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
