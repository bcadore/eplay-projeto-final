import ProductsList from '../../components/ProductsList'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportsGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportsGames) {
    return (
      <>
        <ProductsList
          title="Ação"
          background="black"
          games={actionGames}
          id="action"
        />
        <ProductsList
          title="Esportes"
          background="gray"
          games={sportsGames}
          id="sports"
        />
        <ProductsList
          title="Luta"
          background="black"
          games={fightGames}
          id="fight"
        />
        <ProductsList title="RPG" background="gray" games={rpgGames} id="rpg" />
        <ProductsList
          title="Simulação"
          background="black"
          games={simulationGames}
          id="simulation"
        />
      </>
    )
  }

  return <h4>Carregando..</h4>
}

export default Categories
