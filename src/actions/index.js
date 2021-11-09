const ADD_TODO = "ADD_TODO"
 export const addTodo = (message) => ({
    type: ADD_TODO,
    message: message,
 });

const DELETE_TODO = "DELETE_TODO"
 export const deleteTodo = (message) => ({
    type: DELETE_TODO,
    message,
    id:Math.random(),
});
