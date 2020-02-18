import React from 'react';
import data from '../projects-data/projects';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <section className="projects" >
            <h2 className="projects_title">MIS PROYECTOS</h2>
            <ul className="projects_list">
                {data.projects.map((project, index) => {
                    return (
                        <li key={index} className="projects_list-item">
                            <ProjectCard project={project} />
                        </li>
                    )
                })}
            </ul>
            <div id="skills"></div>
        </section>
    )
}

export default Projects;