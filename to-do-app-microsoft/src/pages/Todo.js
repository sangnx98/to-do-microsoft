import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import Grid from "@mui/material/Grid";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Demo = styled("div")(({ theme }) => ({
backgroundColor: theme.palette.background.paper
}))

function Todo({todo, onDeleteTodo, onCheckBtnTodo}){
    const [dense, setDense] = React.useState(false);
    const [secondary, setSecondary] = React.useState(false);

    return(
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={12}>
          <Demo>
            <List dense={dense}>
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
                  <ListItemText
                    primary={todo.name}
                    secondary={secondary ? "Secondary text" : null}
                  />
                </ListItem>
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
    );
}

export default Todo;