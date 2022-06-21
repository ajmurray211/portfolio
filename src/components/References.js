import { CardGroup, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";

const References = () => {
    return (
        <div>
            <h2>References</h2>
            <section id="References">
                <CardGroup>
                    <Card>
                        <CardImg alt="Card image cap" src="https://picsum.photos/318/180" top width="100%" />
                        <CardBody>
                            <CardTitle tag="h5"> Reference #1</CardTitle>
                            <CardText>
                                Discription of referance
                            </CardText>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardImg alt="Card image cap" src="https://picsum.photos/318/180" />
                        <CardBody>
                            <CardTitle tag="h5">Reference #2</CardTitle>
                            <CardText>
                                Ref 2 discription
                            </CardText>
                        </CardBody>
                    </Card>
                </CardGroup>
            </section>
        </div>
    );
}

export default References;