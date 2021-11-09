import React from 'react'
import { connect } from 'react-redux'
import { deleteTodo } from '../actions'

const List = (props) => {
    return (
        <div className="container">
   <ul>
       {props.todo.map((todo,index)=>(
           <li key={index}>
            {todo.message} <button onClick={()=>props.dispatch(deleteTodo(todo.message))}>Delete</button>
           </li>
       ))}
   </ul>
   </div>
    )
}
const mapStateToProps = (state) => ({
    todo: state.todo.data,
})

export default connect(mapStateToProps) (List);
