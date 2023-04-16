import React from 'react';

const About = () => {
    return (
        <div>
            <h2>About Me</h2>
            <section id="About" className="container">
                <img src={process.env.PUBLIC_URL + '/images/IMG_6930.jpg'} alt="Picture of AJ"></img>
                <div>Software Developer with a background in resolving complex challenges and projects that require a 
                    tight tolerance of outcomes. Leveraging strong communication and analytical skills to develop creative 
                    solutions to services and web applications improving the overall user experience. Passionate about developing 
                    others within a productive team environment to produce quality outcomes pertaining to faster product development 
                    on behalf of the company and client.
                    You can view my resume <a href="https://docs.google.com/document/d/1fYs2pq9_hi3-VdeZicFHxGCLLAa9W6lWEU4r5dNf218/?usp=sharing" target="_blank">here</a>.
                </div>
            </section>
        </div>
    );
}

export default About;