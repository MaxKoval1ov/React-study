import { any } from 'prop-types'
import React from 'react'
import ReactDOM from 'react-dom'
import TodoItem from './Todoitem'
import { toDoList } from './toDoList'

class App extends React.Component<any,any> {
  constructor(props:any)
  {
    super(props);
    this.state = {
      todos:toDoList
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id:any):any{
      this.setState ((prevState:any) => {
        const updated = prevState.todos.map ((todo:any) =>
        {
          if(todo.id == id)
          todo.complited = !todo.complited
          return todo
        })
        return {
          todos:updated,
        }
      })
  }
 render()
 {
   const toDoItems:any = this.state.todos.map((item:any) => {
     return <TodoItem key = {item.id} item = {item}
     handleChange = {this.handleChange}/>
   })
   return (
   <div className = "to-do-list">
   {toDoItems}
   </div>)
 }
}

export default App
