import { useState } from "react";
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";

const References = () => {
    const [references, setReferences] = useState([
        {
            name: 'Devan Grose',
            remark: "Devan is a highly skilled senior front-end developer whom I have had the pleasure of knowing for nearly a decade. Throughout this time, he has served not only as a close friend, but also as a valuable mentor who has helped prepare me for the demands of working in the software development industry. Devan has been instrumental in honing my skills in areas such as data structures and algorithms, and has also provided me with guidance on working with multiple branches in Git Hub, as well as how to function effectively as part of a collaborative development team.",
            contact: <a href="https://www.linkedin.com/in/devangrose/" target="_blank"><LinkedInIcon fontSize='large' /> </a>
        },
        {
            name: 'Rilyn Gherardini',
            remark: "Rilyn is an individual based in Washington state who works as a concrete cutter. I have known Rilyn for the past 10 years. If you need to contact Rilyn, the best way is to reach out through a phone call or text message.",
            contact: '425-275-3598'
        }
    ])

    const mappedReferences = references.map((entry) => {
        return (
            <Card outline className="reference">
                <CardBody>
                    <CardTitle tag="h5">
                        {entry.name}
                    </CardTitle>
                    <CardText>
                        {entry.remark}
                    </CardText>
                    {entry.contact}
                </CardBody>
            </Card>
        )
    })

    return (
        <div id="References">
            <h2>References</h2>
            <div id="referenceContainer">
                {mappedReferences}
            </div>
        </div>
    );
}

export default References; 