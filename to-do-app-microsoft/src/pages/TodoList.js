import React from 'react';
import  Todo from './Todo';

function TodoList({todoList, onDeleteTodo, onCheckBtnTodo, onEditTodo, getEditTodo, todoEditingId}){
    console.log('hahaha', todoList);
    return (
        <>
        {
            todoList.map((todo, index) => (
                <Todo 
                    index={index} 
                    todo={todo}
                    onDeleteTodo = {onDeleteTodo}
                    onCheckBtnTodo = {onCheckBtnTodo}
                    onEditTodo={onEditTodo}
                    getEditTodo={getEditTodo}
                    todoEditingId = {todoEditingId}
                />
            ))
        }
        </>
    );  
}

export default TodoList;