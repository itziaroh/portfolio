import React from 'react';

const Skills = () => {
    return (
        <div className="skills_wrapper" >
            <section className="skills_tech">
                <h2 className="skills_tech-title">SKILLS</h2>
                <div className="skills_tech-container">
                    <p className="skills_text">► JavaScript (ES6)<br></br>
                        ► HTML5<br></br>
                        ► SASS<br></br>
                        ► Grid<br></br>
                        ► Responsive Design<br></br>
                        ► Gulp<br></br>
                        ► Trello<br></br>
                        ► Terminal<br></br>
                        ► Resolución de problemas<br></br>
                    </p>
                    <p className="skills_text">
                        ► React.js<br></br>
                        ► CSS3<br></br>
                        ► Flexbox<br></br>
                        ► Bootstrap<br></br>
                        ► Git<br></br>
                        ► Agile & Scrum<br></br>
                        ► Github<br></br>
                        ► Trabajo en equipo<br></br>
                        ► Organizada<br></br>
                    </p>
                </div>
            </section>
            <section className="skills_education">
                <h2 className="skills_education-title">FORMACIÓN</h2>
                <section className="education_adalab">
                    <h4 className="education_title">Front-End Developer</h4>
                    <p className="education_date">@Adalab, 2019-2020</p>
                    <p className="education_description"> - Maquetación con HTML5, CSS3, Flexbox, CSS Grid, diseño responsive, SASS, animaciones y maquetación por componentes.<br></br>
                        - Conocimientos de Vanilla JavaScript (ES6) y servicios web de terceros (APIs).<br></br>
                        - Creación de SPAs sencillas con React.<br></br>
                        - Control de versiones con Git.<br></br>
                        - Manejo de herramientas como Trello, Slack, Github, Terminal, Gulp, VS Code.<br></br>
                        - Experiencia en el desarrollo de proyectos usando Agile y SCRUM.
                    </p>
                </section>
                <section className="education_urjc">
                    <h4 className="education_title">Grado en Administración y Dirección de Empresas</h4>
                    <p className="education_date">@URJC, 2014-2019</p>
                </section>
            </section>
        </div>
    )
}

export default Skills;