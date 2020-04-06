import React from 'react';

const Skills = () => {
    return (
        <div className="skills_wrapper" >
            <section className="skills_tech">
                <h2 className="skills_tech-title">SKILLS</h2>
                <div className="skills_tech-container">
                    <ul className="skills_text">
                        <li>► JavaScript (ES6)</li>
                        <li>► React Hooks</li>
                        <li>► HTML5</li>
                        <li>► SASS</li>
                        <li>► Grid</li>
                        <li>► Responsive Design</li>
                        <li>► Consumo API Rest</li>
                        <li>► Gulp</li>
                        <li>► Trello</li>
                        <li>► Terminal</li>
                        <li>► Resolución de problemas</li>
                    </ul>
                    <ul className="skills_text">
                        <li>► React.js</li>
                        <li>► CSS3</li>
                        <li>► Flexbox</li>
                        <li>► Bootstrap</li>
                        <li>► Firebase</li>
                        <li>► Git</li>
                        <li>► NPM</li>
                        <li>► Agile & Scrum</li>
                        <li>► Github</li>
                        <li>► Trabajo en equipo</li>
                        <li>► Organizada</li>
                    </ul>
                </div>
            </section>
            <section className="skills_education">
                <h2 className="skills_education-title">FORMACIÓN</h2>
                <section className="education_adalab">
                    <h4 className="education_title">Complete React Developer</h4>
                    <p className="education_date">@Zero to Mastery Academy, 2020 (Cursando)</p>
                    <ul className="education_description">
                        <li>- React Basics & Hooks</li>
                        <li>- React Router</li>
                        <li>- Redux, Redux Saga & Redux asíncrono</li>
                        <li>- Context API</li>
                        <li>- React Suspense & React Lazy</li>
                        <li>- Firebase</li>
                        <li>- Stripe API</li>
                        <li>- GraphQL & Apollo</li>
                        <li>- React Performance & React Design Patterns</li>
                        <li>- Testing con Jest, Enzyme & Snapshot</li>
                        <li>- Persistance & Session Storage</li>
                    </ul>
                </section>
                <section className="education_adalab">
                    <h4 className="education_title">Front-End Developer</h4>
                    <p className="education_date">@Adalab, 2019-2020</p>
                    <ul className="education_description">
                        <li>- Maquetación con HTML5, CSS3, Flexbox, CSS Grid, diseño responsive, SASS, animaciones y maquetación por componentes.</li>
                        <li>- Conocimientos de Vanilla JavaScript (ES6) y servicios web de terceros (APIs).</li>
                        <li>- Creación de SPAs sencillas con React.</li>
                        <li>- Control de versiones con Git.</li>
                        <li>- Manejo de herramientas como Trello, Slack, Github, Terminal, Gulp, VS Code.</li>
                        <li>- Experiencia en el desarrollo de proyectos usando Agile y SCRUM.</li>
                    </ul>
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