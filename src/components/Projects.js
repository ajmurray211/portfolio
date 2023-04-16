import React from 'react';
import { UncontrolledCarousel, Button, ButtonGroup } from "reactstrap";

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
            <ButtonGroup>
                <Button href="https://ajmurray211.github.io/Project-2/" target='_blank'>Woods2waters</Button>
                <Button href="https://the-javawockeez.github.io/Ventilation/" target='_blank'>Ventilation</Button>
                {/* <Button> Right </Button> */}
            </ButtonGroup>
        </div>
    );
}

export default Projects;