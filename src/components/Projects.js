import { UncontrolledCarousel } from "reactstrap";

const Projects = () => {
    return (
        <div id='Projects'>
            <h2>Projects</h2>
            <UncontrolledCarousel 
                items={[
                    {
                        altText: 'Slide 1',
                        key: 1,
                        src: './images/woods2waters.png'
                    },
                    {
                        altText: 'Slide 2',
                        key: 2,
                        src: './images/Screen Shot 2022-06-17 at 9.49.53 PM.png'
                    }
                ]}
            />
        </div>
    );
}

export default Projects;