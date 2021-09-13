import { any } from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import SearchBar from './searchbar'
import { cardsList } from './cardsList'
class App extends React.Component<any,any> {
  constructor(props:any){
    super(props)
    this.state = {
      cards: cardsList
    }
  }
 render()
 {
   const derivedCards = this.state.cards.map((element:any) => {
    return <div key = {element.id}>
      <ul>
        <li className = "name">{element.name}</li>
        <li className = "secName">{element.secName}</li>
        <li className = "date">{element.date}</li>
      </ul>
      <img src= {require("./assets/" + element.image)} alt="smt" />
    </div>
   });
   return (
   <div className = "main-container">
     <div className = "cards-container">
      {derivedCards}
     </div>
   <SearchBar />
   </div>)
 }
}

export default App
