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
   return (
   <div>
   <SearchBar />
   </div>)
 }
}

export default App
