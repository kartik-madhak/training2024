import { createBrowserRouter } from 'react-router-dom'
import { Home } from './pages/Home.tsx'
import { ErrorPage } from './pages/ErrorPage.tsx'
import PokeCard from './components/PokeCard.tsx'

export const router = createBrowserRouter([
  {
    path: 'pokemons',
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: ':id',
        element: <PokeCard />
      }
    ]
  },
  {
    path: '*',
    element: <ErrorPage/>
  }
])
