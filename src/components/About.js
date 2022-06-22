
const About = () => {
    return (
        <div>
            <h2>About Me</h2>
            <section id="About" className="container">
                <img src={process.env.PUBLIC_URL + '/images/IMG_6930.jpg'} alt="Picture of AJ"></img>
                <div>I am a Software Developer with a background in resolving complex
                    problems and technical projects that require a tight tolerance of
                    outcomes. Leveraging strong communication and analytical skills to solve
                    roadblocks ultimately leading to completions and development of knowledge
                    within the team. Passionate about developing others and creating
                    innovative solutions to complex challenges to every situation I encounter.
                    You can view my resume <a href="https://docs.google.com/document/d/1fYs2pq9_hi3-VdeZicFHxGCLLAa9W6lWEU4r5dNf218/edit?usp=sharing" target="_blank">here</a>.
                </div>
            </section>
        </div>
    );
}

export default About;