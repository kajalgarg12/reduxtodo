import React from 'react';
import List from '../list/List';
import { connect } from 'react-redux';
import {addTodo} from "../actions"

const AddTodo = (props) => {
    return (
        <>
        <div className="container1">
        <form onSubmit={(event)=>{
            event.preventDefault()
            let input = event.target.userInput.value;
         props.dispatch(addTodo(input));
          event.target.userInput.value = "";
        }}>
            <h1>TODOLIST APP WITH REDUX</h1>
         ADD YOUR NAME <input type = "text" name="userInput"/><br/>
            
            <button>ADD </button>
        </form>
        </div>
        <List/>
        </>
    )
}

export default connect()( AddTodo);
