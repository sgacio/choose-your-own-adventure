import React, { Component } from 'react'
import PokemonCards from './components/PokemonCards'
import Headers from './components/Header'
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <>
        <Headers />
        <PokemonCards />
        <Footer />
      </>
    )
  }
}

export default App
