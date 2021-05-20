import React from 'react';
import { Button } from '@material-ui/core';

const style = {
    height: 56,
    width: 10
}

export default function ButtonAdd () {
    return (
        <Button style={style} variant="outlined">add</Button>
    )
}