import  React from 'react';
import { TextField } from '@material-ui/core';

export default function InputToDo () {

        return(
            <TextField 
            id="outlined-basic" 
            label="Write your to do?" 
            variant="outlined"
            />
        )
}