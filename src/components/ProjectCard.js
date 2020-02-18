import React from 'react';

const ProjectCard = props => {

    const { url, img, project, description, tech1, tech2, tech3, tech4 } = props.project
    return (
        <div className="project_card">
            <a href={url} target="blank">
                <img src={img} alt={project} className="project_card-img" />
                <div className="project_card-details">
                    <h4 className="project_card-details-name">{description}</h4>
                    <ul className="project_card-details-list">
                        <li className="detail_item">{tech1}</li>
                        <li className="detail_item">{tech2}</li>
                        <li className="detail_item">{tech3}</li>
                        <li className="detail_item">{tech4}</li>
                    </ul>
                </div>
            </a>
        </div >
    )
}

export default ProjectCard;