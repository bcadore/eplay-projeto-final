import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'
import Game from '../../models/Game'

const promocoes: Game[] = [
  {
    id: 1,
    title: 'Nome do Jogo',
    category: 'Categoria',
    system: 'Sistema',
    description: 'Descrição do Jogo',
    infos: ['-10%', 'R$250,00'],
    image: resident
  },
  {
    id: 2,
    title: 'Nome do Jogo',
    category: 'Ação',
    system: 'Windows',
    description: 'Descrição do Jogo',
    infos: ['-10%', 'R$250,00'],
    image: resident
  },
  {
    id: 3,
    title: 'Nome do Jogo',
    category: 'Ação',
    system: 'Windows',
    description: 'Descrição do Jogo',
    infos: ['-10%', 'R$250,00'],
    image: resident
  },
  {
    id: 4,
    title: 'Nome do Jogo',
    category: 'Ação',
    system: 'Windows',
    description: 'Teste Teste Teste Teste Teste',
    infos: ['-10%', 'R$250,00'],
    image: resident
  }
]

const emBreve: Game[] = [
  {
    id: 5,
    title: 'Nome do Jogo',
    category: 'Categoria',
    system: 'Sistema',
    description: 'Descrição do Jogo',
    infos: ['12/09'],
    image: diablo
  },
  {
    id: 6,
    title: 'Nome do Jogo',
    category: 'Categoria',
    system: 'Sistema',
    description: 'Descrição do Jogo',
    infos: ['12/09'],
    image: starWars
  },
  {
    id: 7,
    title: 'Nome do Jogo',
    category: 'Categoria',
    system: 'Sistema',
    description: 'Descrição do Jogo',
    infos: ['12/09'],
    image: resident
  },
  {
    id: 8,
    title: 'Nome do Jogo',
    category: 'Categoria',
    system: 'Sistema',
    description: 'Descrição do Jogo',
    infos: ['12/09'],
    image: zelda
  }
]

const Home = () => (
  <>
    <Banner />
    <ProductsList title="Promoções" background="gray" games={promocoes} />
    <ProductsList title="Em breve" background="black" games={emBreve} />
  </>
)

export default Home
