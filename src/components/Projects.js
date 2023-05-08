import { useEffect, useState } from "react";

import { Button, ButtonGroup, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: 'Cutall concrete',
            url: process.env.PUBLIC_URL + '/images/cutallsnippet.png',
            technologies: ['React', 'MongoDB', 'Heroku', 'GitHub', 'SQL','Node.js'],
            description: "This innovative interface digitizes all of a company's operations, creating a streamlined and efficient workflow. The website created for Cut-All provides a comprehensive all-in-one solution for companies of all sizes, spanning from invoicing and part serialization to inventory management, ledger tracking, timesheets, and trucks/tool tracking."
        },
        {
            title: 'Stus Brew',
            technologies: ['React','GitHub', 'Node.js'],
            url: process.env.PUBLIC_URL + '/images/stussnippet.png',
            description: 'Currently in development, this e-commerce website combines clothing and coffee sales for a small coffee shop. Additionally, patrons can sign up for a newsletter to receive regular updates about the shop. Keep an eye out for this exciting new website!'
        },
        {
            title: 'Woods2Waters',
            url: process.env.PUBLIC_URL + '/images/woods2waters.png',
            technologies: ['React', 'MongoDB', 'Heroku', 'GitHub', 'SQL','Node.js'],
            description: 'Developed a React web-based application called Woods2Waters, v1 allows users to look up recipes either by animals or by dish. In current production is v2 which allows users to look up land or water based animals and display relevant information. Technologies used: React, MongoDB, Heroku, GitHub'
        },
        {
            title: 'Chaos Kingdom',
            technologies: ['React', 'MongoDB', 'Heroku', 'GitHub', 'SQL','Node.js'],
            url: process.env.PUBLIC_URL + '/images/Chaos_kingdom_title.png',
            description: 'A turn based conquest game, with a battlemap for enemy encounters. Downloadable zip file available at the link provided. Technologies used: Python, Pygame, React, Github'
        },
        {
            title: 'Ventiation',
            technologies: ['React', 'MongoDB', 'Heroku', 'GitHub', 'SQL','Node.js'],
            url: process.env.PUBLIC_URL + '/images/ventilation.png',
            description: ''
        },
    ])

    useEffect(() => {
        window.addEventListener('scroll', fadeInOnScroll);
        return () => {
            window.removeEventListener('scroll', fadeInOnScroll);
        };
    }, []);


    function fadeInOnScroll() {
        const elements = document.querySelectorAll('.projectCardFadeIn');
        elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    }

    const mappedCards = projects.map((project, i) => {
        const { title, url, description, technologies } = project;
        const isOdd = i % 2 !== 0;

        return (
            <div className="projectCardContainer projectCardFadeIn" key={i}>
                <section className="projectInfo">
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                    <span>Technologies used:</span>
                    <ul className="tech-list">
                        {technologies.map((tech) => (
                            <li key={tech}>{tech}</li>
                        ))}
                    </ul>
                </section>
                <img className="projectImg" alt={title} src={url} style={{ order: isOdd ? 2 : 1 }} />
            </div>
        );
    });


    return (
        <div id='Projects'>
            <h2>Projects</h2>
            <div id='projectDisplayContainer'>
                {mappedCards}
            </div>
        </div>
    );
}

export default Projects;