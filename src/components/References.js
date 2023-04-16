import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import React from 'react';
import { UncontrolledAccordion,AccordionItem, AccordionBody, AccordionHeader} from "reactstrap";

const References = () => {
    return (
        <div>
            <h2>References</h2>
            <UncontrolledAccordion
                defaultOpen={[
                    '1',
                    '2'
                ]}
                stayOpen
            >
                <AccordionItem>
                    <AccordionHeader targetId="1"> Devan Grose </AccordionHeader>
                    <AccordionBody accordionId="1">
                        Devan is a senior front end developer and is not only a friend but a 
                        mentor I have had the pleasure of knowing for roughly 8 years. 
                        Devan has been helping me prepare for what working as a developer will bring. 
                        Learning data structures/ algorithms, working with multiple different branches 
                        in git hub and how to properly work as part of a developer team.  
                        <a href="https://www.linkedin.com/in/devangrose/">LinkedIn</a>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                    <AccordionHeader targetId="2"> Rilyn Gherardini </AccordionHeader>
                    <AccordionBody accordionId="2">
                        Rilyn is a concrete cutter in Washington state that has known me for 10 years. 
                        The best way to reach Rilyn is by phone his number is 425-275-3598.
                    </AccordionBody>
                </AccordionItem>
            </UncontrolledAccordion>
        </div>
    );
}

export default References;