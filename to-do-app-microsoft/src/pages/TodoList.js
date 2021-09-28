import React from 'react';
import  Todo from './Todo';

function TodoList({todoList, onDeleteTodo, onCheckBtnTodo}){
    console.log('hahaha', todoList);
    return (
        <>
        {
            todoList.map((todo) => (
                <Todo key={todo.id} todo={todo} onDeleteTodo = {onDeleteTodo} onCheckBtnTodo = {onCheckBtnTodo}/>
            ))
        }
        </>
    );  
}

export default TodoList;