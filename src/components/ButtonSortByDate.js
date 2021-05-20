import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

const indent = {
    margin: 10
}

export default function ButtonSortByDate () {
    return (
        <ButtonGroup variant="contained" aria-label="contained button group" style = {indent}>
            <Button>Old first</Button>
            <Button>New first</Button>
        </ButtonGroup>
    )
}
