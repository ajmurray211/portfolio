import React from 'react';
import { Button, UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";

const Skills = () => {
    const url = process.env.PUBLIC_URL
    return (
        <div id="Skills">
            <h2>Skills</h2>
            <section className="container">
                <div>
                    <Button id="react" type="button">
                        <img src={process.env.PUBLIC_URL + "/images/4691292_react native_react_icon (1).png"} alt="React" />
                    </Button>
                    <UncontrolledPopover target="react" trigger='focus' placement="bottom">
                        <PopoverHeader> React </PopoverHeader>
                        <PopoverBody>
                            Built this app using react. Also utilized react in Woods2Waters
                            and Ventiation which can be found on my resume.
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
                <div>
                    <Button id="js" type="button">
                        <img src={url +"/images/8546849_js_icon.png"} alt="JS" />
                    </Button>
                    <UncontrolledPopover target="js" trigger='focus' placement="bottom">
                        <PopoverHeader> JavaScript </PopoverHeader>
                        <PopoverBody>
                            I have completed numerous coding challenges on codewars to practice using JS to
                            progress my algorithm production skills.
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
                <div>
                    <Button id="jquery" type="button">
                        <img src={url +"/images/282806_jquery_logo_icon.png"} alt="jQuery" />
                    </Button>
                    <UncontrolledPopover target="jquery" trigger='focus' placement="bottom">
                        <PopoverHeader> jQuery </PopoverHeader>
                        <PopoverBody>
                            I utilized jQuery in my first draft of my portfolio. Upon request I can supply examples
                            or you may access my examples through my GitHub under Project1-Portfolio-.
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
                <div>
                    <Button id="html5" type="button" >
                        <img src={url + "/images/104494_html5_html_icon.png"} alt="HTML5" />
                    </Button>
                    <UncontrolledPopover target="html5" trigger='focus' placement="bottom">
                        <PopoverHeader> HTML5 </PopoverHeader>
                        <PopoverBody>
                            Using many different tags such as section, nav, headder and footer to structure my
                            code in a way that other developers can easily understand.
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
                <div>
                    <Button id="css" type="button">
                        <img src={url + "/images/7422531_css3_css_file_development_icon.png"} alt="CSS" />
                    </Button>
                    <UncontrolledPopover target="css" trigger='focus' placement="bottom">
                        <PopoverHeader> CSS </PopoverHeader>
                        <PopoverBody>
                            I have used CSS in every project. Mainly using flex box to achive my positioning goals.
                            I have taken a linked in skills test and gotten in the top 30%.
                        </PopoverBody>
                    </UncontrolledPopover>
                </div>
            </section>
        </div>
    );
}

export default Skills;