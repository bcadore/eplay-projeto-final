import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://api-ebac.vercel.app/api/eplay/acao').then((res) =>
      res.json().then((res) => setGamesAcao(res))
    )

    fetch('https://api-ebac.vercel.app/api/eplay/esportes').then((res) =>
      res.json().then((res) => setGamesEsportes(res))
    )

    fetch('https://api-ebac.vercel.app/api/eplay/simulacao').then((res) =>
      res.json().then((res) => setGamesSimulacao(res))
    )

    fetch('https://api-ebac.vercel.app/api/eplay/luta').then((res) =>
      res.json().then((res) => setGamesLuta(res))
    )

    fetch('https://api-ebac.vercel.app/api/eplay/rpg').then((res) =>
      res.json().then((res) => setGamesRpg(res))
    )
  }, [])

  return (
    <>
      <ProductsList title="Ação" background="black" games={gamesAcao} />
      <ProductsList title="Esportes" background="gray" games={gamesEsportes} />
      <ProductsList
        title="Simulação"
        background="black"
        games={gamesSimulacao}
      />
      <ProductsList title="Luta" background="gray" games={gamesLuta} />
      <ProductsList title="RPG" background="black" games={gamesRpg} />
    </>
  )
}

export default Categories
