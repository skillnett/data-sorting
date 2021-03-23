import { Box } from '@material-ui/core';
import React from 'react';

export const DeviceInfo = ({ deviceId, serialNumber }) => (
    <Box display='flex' flexDirection='column' marginBottom={1}>
        <span>Device ID: {deviceId}</span>
        <span>Serial Number: {serialNumber}</span>
    </Box>
);
