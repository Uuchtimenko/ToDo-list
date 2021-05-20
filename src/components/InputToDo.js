import  React from 'react';
import { TextField } from '@material-ui/core';

const style = {
    width:440
}

export default function InputToDo () {

        return(
            <TextField 
            id="outlined-basic" 
            label="Write your to do?" 
            variant="outlined"
            style={style}
            />
        )
}