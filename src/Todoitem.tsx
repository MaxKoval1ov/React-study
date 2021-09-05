import React from "react";


export default function TodoItem(props:any) {
  const completedStyles = {
    fontStyle: "italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
  return (
    <div className = "todo-item">
      <input
      type = "checkbox"
      checked = {props.item.complited}
      onChange = {() => props.handleChange(props.item.id)} 
      />
      <p style = {props.item.completed ? completedStyles: undefined}>{props.item.text}</p>
    </div>
  )
}