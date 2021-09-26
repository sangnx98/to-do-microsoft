import React from 'react';
import  Todo from './Todo';

function TodoList({todoList}){
    console.log('hahaha', todoList);
    return (
        <>
        {
            todoList.map((todo) => (
                <Todo key={todo.id} todo={todo}/>
            ))
        }
        </>
    );  
}

export default TodoList;