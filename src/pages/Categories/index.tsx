import { useEffect, useState } from 'react'

import ProductsList from '../../components/ProductsList'
import { Game } from '../Home'

import {
  useGetActionGamesQuery,
  useGetFeaturedGameQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'
import resident from '../../assets/images/resident.png'
import diablo from '../../assets/images/diablo.png'
import starWars from '../../assets/images/star_wars.png'
import zelda from '../../assets/images/zelda.png'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportsGames) {
    return (
      <>
        <ProductsList title="Ação" background="black" games={actionGames} />
        <ProductsList title="Esportes" background="gray" games={sportsGames} />
        <ProductsList
          title="Simulação"
          background="black"
          games={simulationGames}
        />
        <ProductsList title="Luta" background="gray" games={fightGames} />
        <ProductsList title="RPG" background="black" games={rpgGames} />
      </>
    )
  }

  return <h4>Carregando..</h4>
}

export default Categories
