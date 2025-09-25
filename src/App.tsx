import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Header from './components/Header'
import { EstiloGlobal } from './styles'
import Home from './pages/Home'

const rotas = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  }
])

function App() {
  return (
    <>
      <EstiloGlobal />
      <div className="container">
        <Header />
      </div>
      <RouterProvider router={rotas} />
    </>
  )
}

export default App
