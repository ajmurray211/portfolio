import { UncontrolledCarousel } from "reactstrap";

const Projects = () => {
    return (
        <UncontrolledCarousel id='Projects' 
            items={[
                {
                    altText: 'Slide 1',
                    key: 1,
                    src: './images/woods2waters.png'
                },
                {
                    altText: 'Slide 2',
                    key: 2,
                    src: 'https://picsum.photos/id/456/1200/600'
                }
            ]}
        />
    );
}

export default Projects;