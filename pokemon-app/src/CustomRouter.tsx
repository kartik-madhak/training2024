import React, { useState, type ReactElement } from 'react'
import { Home } from './pages/Home'

const CustomRouter = (): ReactElement => {
  const [route, setRoute] = useState<string>('home')

  return (
    <>{
        route === 'home'
          ? <Home setRoute={setRoute}/>
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
