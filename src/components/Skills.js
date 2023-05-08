import React from 'react';
import { Button, UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const url = process.env.PUBLIC_URL
  const data = [
    {
      name: 'react',
      description: 'Built this app using react. Also utilized react in Woods2Waters and Ventiation which can be found on my resume.',
      icon: url + "/images/4691292_react native_react_icon (1).png"
    },
    {
      name: 'js',
      description: '  I have completed numerous coding challenges on codewars to practice using JS to progress my algorithm production skills.',
      icon: url + "/images/8546849_js_icon.png"
    },
    {
      name: 'jquery',
      description: 'I utilized jQuery in my first draft of my portfolio. Upon request I can supply example or you may access my examples through my GitHub under Project1-Portfolio-.',
      icon: url + "/images/282806_jquery_logo_icon.png"
    },
    {
      name: 'html5',
      description: 'Using many different tags such as section, nav, headder and footer to structure my code in a way that other developers can easily understand.',
      icon: url + "/images/104494_html5_html_icon.png"
    },
    {
      name: 'css',
      description: 'I have used CSS in every project. Mainly using flex box to achive my positioning goals. I have taken a linked in skills test and gotten in the top 30%.',
      icon: url + "/images/7422531_css3_css_file_development_icon.png"
    },
    {
      name: 'python',
      description: 'In order to learn python I created a turn based conquest game called Chaos Kingdom. I also use pyhton when I am working with django using the model view controller layout.',
      icon: url + "/images/python_icon.png"
    },
    {
      name: 'SQL',
      description: 'In order to learn python I created a turn based conquest game called Chaos Kingdom. I also use pyhton when I am working with django using the model view controller layout.',
      icon: url + "/images/sql_icon.png"
    },
    {
      name: 'github',
      description: 'I use github everytime i push code and host websites',
      icon: url + "/images/github_icon.png"
    },
  ]

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const mappedData = data.map((skill) => {
    return (
      <div className='skillContainer'>
        <Card
          body
          color="light"
          outline
          style={{
            width: '18rem'
          }}
        >
          <img src={skill.icon} alt={skill.name} className='skillIcon' />
          <CardBody>
            <CardTitle tag="h5">{capitalizeFirstLetter(skill.name)}</CardTitle>
            <CardText className='skillDescription'> {skill.description}</CardText>
          </CardBody>
        </Card>
      </div>
    )
  })

  return (
    <div id="Skills">
      <h2>Skills</h2>
      <Marquee direction='right' pauseOnHover className="iconContainer">
        {mappedData}
      </Marquee>
    </div>
  );
}

export default Skills;