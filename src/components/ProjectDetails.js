import React from 'react';
import { Grid, Paper } from '@material-ui/core';
import { rootStyles } from '../styles/rootStyles';

export const ProjectDetails = ({ children }) => {
    const { paper } = rootStyles();

    return (
        <Grid item xs={12} sm={6}>
            <Paper className={paper}>{children}</Paper>
        </Grid>
    );
};
