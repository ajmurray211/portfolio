import { useState } from "react";
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText, Button } from "reactstrap";

const References = () => {
    const [references, setReferences] = useState([
        {
            name: 'Devan Grose',
            remark: 'Devan is a senior front end developer and is not only a friend but a mentor I have had the pleasure of knowing for roughly 8 years. Devan has been helping me prepare for what working as a developer will bring. Learning data structures/ algorithms, working with multiple different branches in git hub and how to properly work as part of a developer team.'
        },
        {
            name: 'Rilyn Gherardini',
            remark: 'Rilyn is a concrete cutter in Washington state that has known me for 10 years. The best way to reach Rilyn is by phone his number is 425-275-3598.'
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