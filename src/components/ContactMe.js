import React from 'react';

const ContactMe = () => {
    const url = process.env.PUBLIC_URL
    return (
        <section>
            <h2>Contact Me</h2>
            <div id="ContactMe" className="container">
                <a href="https://github.com/ajmurray211" target="_blank"><img src={url + "/images/4747499_github_icon (1).png"} /> </a>
                <a href="mailto:aj.murr4y@gmail.com" target="_blank"><img src={url +"/images/134146_mail_email_icon.png"} /></a>
                <a href="https://www.linkedin.com/in/alexander-murray-se/" target="_blank"><img src={url + "/images/4747495_linked in_social media_networking_icon (1).png"} /> </a>
            </div >
        </section>
    );
}

export default ContactMe;