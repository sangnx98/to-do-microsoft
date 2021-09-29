import React, {useState} from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditIcon from '@mui/icons-material/Edit';
import { Input } from "@mui/material";

const Demo = styled("div")(({ theme }) => ({
backgroundColor: theme.palette.background.paper
}))

function Todo({todo, onDeleteTodo, onCheckBtnTodo, onEditTodo, getEditTodo, todoEditingId}){

  const [newTextInput, setNewTextInput] = useState(todo.newTextInput);
  const isEditing = (todoEditingId.todoEditingId === todo.id);
  const EditTodo = () => {
    onEditTodo({
        ...todo,
        newTextInput
    })
    getEditTodo('')
}
  
    return(
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Demo>
            <List>
                <ListItem 
                    style = {{ paddingLeft: "0px !important"}}
                    secondaryAction={
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon onClick ={()=> onDeleteTodo(todo.id)}/>
                    </IconButton>
                  }
                >
                    <IconButton>
                      <CheckCircleIcon onClick = {()=> onCheckBtnTodo(todo.id)}/>
                    </IconButton>
                    <IconButton>
                      <EditIcon onClick = {()=> onEditTodo(todo.id)}/>
                    </IconButton>
                  {
                      !isEditing ?
                        <label onDoubleClick={() => getEditTodo(todo.id)}>{todo.name}</label>
                        :
                      <Input
                        value={todo.name}
                        onChange={(e) => setNewTextInput(e.target.value)}
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