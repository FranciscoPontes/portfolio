import React, {useState, useEffect} from 'react';
import Project from  '../../Components/Project/Project';
import classes from './Projects.module.css';
import axios from '../../axiosSetup';

const Projects = () => {
    const [stateProjects, setStateProjects] = useState();

    useEffect(() => {
            const isMounted = true;
            axios.get('/Projetos.json')
                        .then(response => {
                            if (isMounted) {
                                setStateProjects(response.data);
                            }
                        })
                        .catch(error => {
                            console.log(error);
                        })
                    }, [])
    
    const likeClickHandler = appName => {
        console.log(appName);
        localStorage.setItem(appName, "Clicked");
        // increment like counter for correct app
        const updatedProject = {
                ...stateProjects,
                [appName]: {
                    ...stateProjects[appName],
                    likes: stateProjects[appName].likes + 1 
                }
        }; 
        axios.put('/Projetos.json',updatedProject)
            .then(response => {
                setStateProjects(updatedProject);
            })
            .catch(error => {
                console.log(error);
            })
    }

    let projects = <h2><b>Loading..</b></h2>;
    if (stateProjects) {  
        projects = Object.keys(stateProjects).map(project => (
            <Project 
                key={project} 
                project={project}
                title={stateProjects[project].title} 
                description={stateProjects[project].description} 
                link={stateProjects[project].link} 
                click={() => likeClickHandler(project)} 
                likeCount={stateProjects[project].likes}
            />
        ));
    }

    return (
        <div>
            <div className={classes.Title}>
                <h2>My Projects</h2>
            </div>
            <div className={classes.Projects}>
                {projects}
            </div>
        </div>
    );
};

export default Projects;