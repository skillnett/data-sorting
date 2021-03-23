import { Box } from '@material-ui/core';
import React from 'react';

export const WithEmptyDataValidation = ({ data, children, emptyMessage }) => {
    if (data.length) {
        return children;
    }

    return <Box>{emptyMessage}</Box>;
};
