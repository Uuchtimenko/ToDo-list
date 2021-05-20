import  React from 'react';
import { TextField } from '@material-ui/core';

const style = {
    width:440
}

const InputToDo = () => {
    
        return(
                <TextField 
                    id="outlined-basic" 
                    label="Write your to do?" 
                    variant="outlined"
                    style={style}
            />            
        )
}

export default InputToDo;