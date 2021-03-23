import projectData from '../data/project.json';
import deviceData from '../data/device.json';
import userData from '../data/user.json';

export class DataManager {
    getInitialProjects = () => {
        const projects = projectData.map((project, index) => ({
            ...project,
            index,
            devices: [],
            users: [],
        }));

        return projects;
    };

    iterateData = (projects, data, key) => {
        data.forEach(item => {
            const matchedProject = projects.find(
                ({ id }) => id === item.projectId
            );

            projects[matchedProject.index][key].push(item);
        });
    };

    getSortableProjectsData = () => {
        const projects = this.getInitialProjects();

        this.iterateData(projects, deviceData, 'devices');
        this.iterateData(projects, userData, 'users');

        return projects;
    };
}
