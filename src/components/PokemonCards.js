import React, { Component } from 'react'
import Axios from 'axios'

class PokemonCards extends Component {
  state = {
    cards: [],
    cName: ''
  }

  componentDidMount() {
    Axios.get('https://api.pokemontcg.io/v1/cards?name=squirtle').then(resp => {
      this.setState({
        cards: resp.data.cards
      })
    })
  }

  searchApi = () => {
    Axios.get(
      `https://api.pokemontcg.io/v1/cards?name=${this.state.cName}`
    ).then(resp => {
      this.setState({
        cards: resp.data.cards
      })
      console.log(resp.data.cards)
    })
  }

  putTheNameInTheBox = event => {
    this.setState({ cName: event.target.value })
  }

  render() {
    return (
      <div className="its-that-that">
        <input
          className="the-thing"
          type="search"
          placeholder="Pokemon Card Name"
          onChange={this.putTheNameInTheBox}
        ></input>
        <button onClick={this.searchApi}>SEARCH</button>
        {this.state.cards.length > 0 && (
          <ul className="container">
            {this.state.cards.map(card => {
              return (
                <li key={card.id}>
                  <section className="dad">
                    <p>{card.name}</p>
                    <p>{card.nationalPokedexNumber}</p>
                    <p>{card.types}</p>
                    <p>{card.rarity}</p>
                  </section>
                  <div className="the-kid">
                    <img src={card.imageUrl} style={{ height: '15rem' }} />
                  </div>
                </li>
              )
            })}
          </ul>
        )}
        {this.state.cards.length === 0 && (
          <h1>No Cards Found, maybe look at your spelling</h1>
        )}
      </div>
    )
  }
}

export default PokemonCards
