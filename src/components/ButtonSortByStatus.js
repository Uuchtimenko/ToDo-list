import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

export default function ButtonSortByStatus () {
    return (
        <ButtonGroup variant="contained" aria-label="contained button group">
            <Button>All</Button>
            <Button>Complete</Button>
            <Button>InProcess</Button>
        </ButtonGroup>
    )
}
