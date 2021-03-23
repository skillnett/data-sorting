import React from 'react';
import { Box, Grid, Paper } from '@material-ui/core';
import { ProjectHeader } from './ProjectHeader';
import { ProjectDetails } from './ProjectDetails';
import { UserInfo } from './UserInfo';
import { WithEmptyDataValidation } from './WithEmptyDataValidation';
import { DeviceInfo } from './DeviceInfo';

export const ProjectCard = ({
    projectsData,
    setProjectsData,
    classes,
    item,
}) => {
    const { id, title, users, devices, beginDate, expirationDate } = item;

    const onProjectTitleChange = ({ target }, id) => {
        const editedProjectData = projectsData.map(project => ({
            ...project,
            title: project.id === id ? target.value : project.title,
        }));

        setProjectsData(editedProjectData);
    };

    const deleteProjectHandler = projectId => {
        const updatedProjects = projectsData.filter(
            ({ id }) => id !== projectId
        );

        setProjectsData(updatedProjects);
    };

    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <ProjectHeader
                    {...{
                        onProjectTitleChange,
                        deleteProjectHandler,
                        expirationDate,
                        beginDate,
                        title,
                        id,
                    }}
                />

                <Grid container spacing={3}>
                    <ProjectDetails>
                        <Box marginBottom={2}>Users</Box>

                        <WithEmptyDataValidation
                            data={users}
                            emptyMessage='No users on current project'
                        >
                            {users.map(user => (
                                <UserInfo {...user} key={user.appuserId} />
                            ))}
                        </WithEmptyDataValidation>
                    </ProjectDetails>
                    <ProjectDetails>
                        <Box marginBottom={2}>Devices</Box>

                        <WithEmptyDataValidation
                            data={devices}
                            emptyMessage='No devices on current project'
                        >
                            {devices.map(device => (
                                <DeviceInfo {...device} key={device.deviceId} />
                            ))}
                        </WithEmptyDataValidation>
                    </ProjectDetails>
                </Grid>
            </Paper>
        </Grid>
    );
};
