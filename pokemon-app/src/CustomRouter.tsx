import { type ReactNode, type ReactElement, useState } from 'react'
import { Home } from './pages/Home'
import PokeCard from './components/PokeCard.tsx'

const CustomRouter = (): ReactNode => {
  const [route, setRoute] = useState<string>('home')

  return (
    <>{
      route === 'home'
        ? <Home setRoute={setRoute} />
        : route?.startsWith('pokemon/')
          ? <PokeCard id={+route.split('/')[1]}/>
          : <About />
    }</>
  )
}

const About = (): ReactElement => {
  return (
    <div>
      <h1>About</h1>
    </div>
  )
}

export default CustomRouter
