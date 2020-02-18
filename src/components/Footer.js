import React from 'react';

const Footer = () => {
    return (
        <footer id="contact">
            <div className="contact">
                <section className="contact_section">
                    <a href="https://wa.me/34676540418" target="blank"><i className="fab fa-whatsapp"></i></a>
                    <p className="contact_section-text">Puedes escribirme a través de <a href="https://wa.me/34676540418" target="blank">Whatsapp</a></p>
                </section>
                <section className="contact_section">
                    <a href="https://www.linkedin.com/in/itziarortegahernandez/" target="blank"><i className="fab fa-linkedin-in"></i></a>
                    <p className="contact_section-text">Visita mi perfil de <a href="https://www.linkedin.com/in/itziarortegahernandez/" target="blank">LinkedIn</a></p>
                </section>
                <section className="contact_section">
                    <a href="https://twitter.com/itziar_ortega" target="blank"><i className="fab fa-twitter"></i></a>
                    <p className="contact_section-text">Sigueme en Twitter: <a href="https://twitter.com/itziar_ortega" target="blank">@itziar_ortega</a></p>
                </section>
                <section className="contact_section">
                    <a href="https://github.com/itziaroh" target="blank"><i className="fab fa-github-alt"></i></a>
                    <p className="contact_section-text">Revisa mi <a href="https://github.com/itziaroh" target="blank">GitHub</a> para ver mis proyectos</p>
                </section>
            </div>
            <p className="copyright">Copyright Itziar Ortega © 2020</p>
        </footer >
    )
}

export default Footer;