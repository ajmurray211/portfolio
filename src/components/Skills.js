import { Button, UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";

const Skills = () => {
    return (
        <div id="Skills">
            <h2>Skills</h2>
            <section className="container">
                <div>
                    <Button id="PopoverFocus" type="button">
                        <img src="./images/4691292_react native_react_icon (1).png" alt="React" />
                    </Button>
                    <UncontrolledPopover target="PopoverFocus" trigger='focus'>
                        <PopoverHeader> React </PopoverHeader>
                        <PopoverBody> Built this app using react. Also utilized react in Woods2Waters and Ventiation which can be found on my resume. </PopoverBody>
                    </UncontrolledPopover>
                </div>
                <div>
                    <Button id="PopoverFocus" type="button">
                        <img src="./images/8546849_js_icon.png" alt="JS" />
                    </Button>
                    <UncontrolledPopover target="PopoverFocus" trigger='focus'>
                        <PopoverHeader> JavaScript </PopoverHeader>
                        <PopoverBody>  </PopoverBody>
                    </UncontrolledPopover>
                </div>
                <div>
                    <Button id="PopoverFocus" type="button">
                        <img src="./images/282806_jquery_logo_icon.png" alt="jQuery" />
                    </Button>
                    <UncontrolledPopover target="PopoverFocus" trigger='focus'>
                        <PopoverHeader> jQuery </PopoverHeader>
                        <PopoverBody>  </PopoverBody>
                    </UncontrolledPopover>
                </div>
                <div>
                    <Button id="PopoverFocus" type="button" >
                        <img src="./images/104494_html5_html_icon.png" alt="HTML5" />
                    </Button>
                    <UncontrolledPopover target="PopoverFocus" trigger='focus'>
                        <PopoverHeader> HTML5 </PopoverHeader>
                        <PopoverBody>  </PopoverBody>
                    </UncontrolledPopover>
                </div>
                <div>
                    <Button id="PopoverFocus" type="button">
                        <img src="./images/7422531_css3_css_file_development_icon.png" alt="CSS" />
                    </Button>
                    <UncontrolledPopover target="PopoverFocus" trigger='focus'>
                        <PopoverHeader> CSS </PopoverHeader>
                        <PopoverBody>  </PopoverBody>
                    </UncontrolledPopover>
                </div>
            </section>
        </div>
    );
}

export default Skills;