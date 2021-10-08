import React, {useCallback, useEffect, useState} from 'react';

import {v4} from 'uuid'

import Box from '@mui/material/Box';
import { InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

import TodoList from "./TodoList"

function MyDay({})
    {
    const [todoList, setTodoList] = useState([]);
    const [textInput, setTextInput] = useState("");
    const [todoEditingId, setTodoEdittingId] = useState('');

    useEffect(()=>{
        const storageTodoList = localStorage.getItem("MY_DAY");
        if(storageTodoList){
            setTodoList(JSON.parse(storageTodoList))
        }
    },[])
    
    useEffect(()=> {
        localStorage.setItem("MY_DAY", JSON.stringify(todoList))
    },[todoList])

    const onTextInputChange = useCallback((e) => {
        setTextInput(e.target.value);
    },[]);

    const onAddButtonClick = useCallback(() => {
        setTodoList([{id: v4(), name: textInput, isCompleted: false},
            ...todoList
        ]);
        setTextInput('');
    }, [textInput, todoList]);

    const onAddEnter = useCallback((e)=>{
        if(e.key === "Enter" && textInput){
            onAddButtonClick();
          }
    }, [textInput, todoList])

    const onDeleteTodo = (id) => {
        setTodoList (todoList.filter(todoList => todoList.id !== id))
    };

    const onCheckBtnTodo = useCallback((id) => {
        setTodoList (prevTodo => prevTodo.map(todo => todo.id === id ? {...todo, isCompleted: true}: todo
        ));
    },[todoList]);

    const getEditTodo = (id = '') =>{
        setTodoEdittingId({
            todoEditingId: id
        })
    }

    const onEditTodo = (todo, index) =>{
        todoList.splice(index, 1, todo);
        setTodoList(todoList);
        console.log('Da vao edit', todoList)
        console.log('Todo:', todo)
    }


    return(
            <Box
                sx={{
                    '& > :not(style)': { m: 0.5, width: '100%' },
                }}
                noValidate
                autoComplete="off"
            >
                <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-password">
                        Nhập việc cần làm ...
                    </InputLabel>
                    <Input
                        id="standard-adornment-password"
                        value={textInput}
                        onChange={onTextInputChange}
                        onKeyPress={onAddEnter}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    disabled={!textInput}
                                    appearance='primary'
                                    onClick={onAddButtonClick}
                                    >
                                    <AddIcon/>
                                </IconButton>
                            </InputAdornment>
                        }
                    />
                </FormControl>
                <TodoList 
                    todoList={todoList} 
                    onDeleteTodo={onDeleteTodo} 
                    onCheckBtnTodo ={onCheckBtnTodo} 
                    onEditTodo={onEditTodo} 
                    getEditTodo={getEditTodo}
                    todoEditingId={todoEditingId}
                />
            </Box>
    )
};

export default MyDay;
