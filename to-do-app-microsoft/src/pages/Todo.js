import React, {useState, useEffect} from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Input } from "@mui/material";

const Demo = styled("div")(({ theme }) => ({
backgroundColor: theme.palette.background.paper
}))

function Todo({todo, onDeleteTodo, onCheckBtnTodo, onEditTodo, getEditTodo, todoEditingId, index}){

  const [newTextInput, setNewTextInput] = useState('');
  const isEditing = (todoEditingId.todoEditingId === todo.id);
  useEffect(()=>{
    if(todo.name){
      setNewTextInput(todo.name)
    }
  },[todo.name])

  const EditTodo = () => {
    onEditTodo({...todo,name : newTextInput},index)
    getEditTodo('')
  }

  const onNewInputChange = (e) =>{
    setNewTextInput(e.target.value)
  }
  
    return(
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Demo>
            <List>
                <ListItem 
                    secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick ={()=> onDeleteTodo(todo.id)}/>
                    </IconButton>
                  }
                >
                    <IconButton>
                      <CheckCircleIcon onClick = {()=> onCheckBtnTodo(todo.id)}/>
                    </IconButton>
                  {
                      !isEditing ?
                        <label onClick={() => getEditTodo(todo.id)}>{todo.name}</label>
                        :
                      <Input
                        value={newTextInput}
                        onChange={onNewInputChange}
                        onBlur={EditTodo}
                        onKeyPress={(e) => {
                          if (e.key === 'Enter') {
                              EditTodo()
                          }
                          console.log('Sau Edit', newTextInput)
                      }}
                      />
                  }
                </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
    );
}

export default Todo;