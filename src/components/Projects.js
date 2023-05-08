import { useEffect, useState } from "react";

import { Button, ButtonGroup, Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";

const Projects = () => {
    const [projects, setProjects] = useState([
        {
            title: 'Cutall concrete',
            url: process.env.PUBLIC_URL + '/images/cutallsnippet.png',
            technologies: ['React', 'MongoDB', 'Heroku', 'GitHub', 'Node.js'],
            description: "This innovative interface digitizes all of a company's operations, creating a streamlined and efficient workflow. The website created for Cut-All provides a comprehensive all-in-one solution for companies of all sizes, spanning from invoicing and part serialization to inventory management, ledger tracking, timesheets, and trucks/tool tracking."
        },
        {
            title: 'Stus Brew',
            technologies: ['React', 'GitHub', 'Node.js'],
            url: process.env.PUBLIC_URL + '/images/stussnippet.png',
            description: 'Currently in development, this e-commerce website combines clothing and coffee sales for a small coffee shop. Additionally, patrons can sign up for a newsletter to receive regular updates about the shop. Keep an eye out for this exciting new website!'
        },
        {
            title: 'Woods2Waters',
            url: process.env.PUBLIC_URL + '/images/woods2waters.png',
            technologies: ['React', 'MongoDB', 'Heroku', 'GitHub', 'SQL', 'Node.js'],
            description: "Developed a React web-based application called Woods2Waters, v1 allows users to look up recipes either by animals or by dish. In current production is v2 which allows users to look up land or water based animals and display relevant information."
        },
        {
            title: 'Chaos Kingdom',
            technologies: ['Python', 'Pygame', 'React', 'Github', 'Node.js'],
            url: process.env.PUBLIC_URL + '/images/Chaos_kingdom_title.png',
            description: "Chaos Kingdom is an exciting turn-based game with an immersive battlemap designed to engage players in a thrilling conquest experience. The game offers a downloadable zip file accessible via the provided link, providing gamers with seamless access to the game's files. With its captivating gameplay and exciting features, Chaos Kingdom promises an exhilarating gaming experience for all levels of players."
        },
        {
            title: 'Ventiation',
            technologies: ['React', 'Django', 'Heroku', 'GitHub', 'SQL', 'Node.js'],
            url: process.env.PUBLIC_URL + '/images/ventilation.png',
            description: 'Ventilation is a web application that provides users with a platform to share their stories, express their grief or make statements, and allows other users to comment on and/or favorite these posts. My primary responsibility for this project was the development of the API, which involved creating a RESTful API using Django and Django Rest Framework. I also collaborated with my team members who focused on the front-end layout, operations, and styling. Additionally, I managed the branching and version control for the entire team, providing guidance and ensuring that all team members were following the best practices for code management. '
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