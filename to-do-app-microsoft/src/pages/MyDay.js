import React, {useCallback, useState} from 'react';

import Box from '@mui/material/Box';
import {v4} from 'uuid';
import { InputLabel } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';

import TodoList from "./TodoList"

function MyDay(){
    const [todoList, setTodoList] = useState([]);
    const [textInput, setTextInput] = useState("");

    const onTextInputChange = useCallback((e) => {
        setTextInput(e.target.value);
    },[]);

    const onAddButtonClick = useCallback((e) => {
        setTodoList([{id: v4(), name: textInput, isCompleted: false},
            ...todoList
        ]);
        setTextInput('');
    }, [textInput, todoList]);


    return(
            <Box
                component="form"
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
                <TodoList todoList={todoList}/>
            </Box>
    )
};

export default MyDay;
