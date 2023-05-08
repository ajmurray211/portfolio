import React from 'react';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const ContactMe = () => {
    const url = process.env.PUBLIC_URL
    return (
        <section id='contactMe'>
            <h2>Contact Me</h2>
            <div id="ContactMe" className="container">
                <a href="https://github.com/ajmurray211" target="_blank"><GitHubIcon fontSize='large' /> </a>
                <a href="mailto:aj.murr4y@gmail.com" target="_blank"><EmailIcon fontSize='large' /></a>
                <a href="https://www.linkedin.com/in/alexander-murray-se/" target="_blank"><LinkedInIcon fontSize='large' /> </a>
            </div >
        </section>
    );
}

export default ContactMe;