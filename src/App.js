import React, { useState } from 'react';
import { DataManager } from './managers/DataManager';
import { Grid } from '@material-ui/core';
import { rootStyles } from './styles/rootStyles';
import { ProjectCard } from './components/ProjectCard';

const App = () => {
    const dataManager = new DataManager();
    const data = dataManager.getSortableProjectsData();

    const [projectsData, setProjectsData] = useState(data);

    const classes = rootStyles();

    return (
        <div className={classes.root}>
            {projectsData?.map(item => (
                <Grid container spacing={3} key={item.id}>
                    <ProjectCard
                        {...{
                            setProjectsData,
                            projectsData,
                            classes,
                            item,
                        }}
                    />
                </Grid>
            ))}
        </div>
    );
};

export default App;
