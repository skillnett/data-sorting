import React from 'react';
import { Box, Grid, IconButton, TextField } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { getFormattedDate } from '../utils/dateUtils';

export const ProjectHeader = ({
    onProjectTitleChange,
    deleteProjectHandler,
    expirationDate,
    beginDate,
    title,
    id,
}) => {
    const startDate = getFormattedDate(beginDate);
    const endDate = expirationDate
        ? getFormattedDate(expirationDate)
        : 'Current date';

    return (
        <Grid container alignItems='center' justify='space-between'>
            <TextField
                label='Project name'
                value={title}
                onChange={event => onProjectTitleChange(event, id)}
            />
            <Box>
                {startDate} - {endDate}
            </Box>
            <IconButton
                aria-label='delete'
                onClick={() => deleteProjectHandler(id)}
            >
                <DeleteIcon />
            </IconButton>
        </Grid>
    );
};
