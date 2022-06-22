import { UncontrolledCarousel } from "reactstrap";

const Projects = () => {
    const url1 = process.env.PUBLIC_URL + '/images/woods2waters.png'
    const url2 = process.env.PUBLIC_URL + '/images/Screen Shot 2022-06-17 at 9.49.53 PM.png'
    return (
        <div id='Projects'>
            <h2>Projects</h2>
            <UncontrolledCarousel 
                items={[
                    {
                        altText: 'Slide 1',
                        key: 1,
                        src: url1
                    },
                    {
                        altText: 'Slide 2',
                        key: 2,
                        src: url2
                    }
                ]}
            />
        </div>
    );
}

export default Projects;