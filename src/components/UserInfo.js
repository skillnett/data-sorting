import { Box } from '@material-ui/core';
import React from 'react';

export const UserInfo = ({ appuserId, firstName, lastName }) => (
    <Box display='flex' flexDirection='column' marginBottom={1}>
        <span>User ID: {appuserId}</span>
        <span>Name: {`${firstName} ${lastName}`}</span>
    </Box>
);
