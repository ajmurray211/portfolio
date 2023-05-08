import React from 'react';
import { Button, UncontrolledPopover, PopoverBody, PopoverHeader } from "reactstrap";
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from "reactstrap";
import Marquee from "react-fast-marquee";

const Skills = () => {
  const url = process.env.PUBLIC_URL
  const data = [
    {
      name: 'react',
      description: "Developed a variety of web applications using React, including the app highlighted in my portfolio. Skilled in using React to build dynamic, responsive user interfaces that enhance the user experience.",
      icon: url + "/images/4691292_react native_react_icon (1).png"
    },
    {
      name: 'js',
      description: "Extensively practiced and refined my algorithm production skills through completing numerous coding challenges on platforms such as Codewars. Confident in my ability to write efficient, readable code using JavaScript.",
      icon: url + "/images/8546849_js_icon.png"
    },
    {
      name: 'jquery',
      description: " Utilized jQuery in the first draft of my portfolio, employing its powerful functionality to build a responsive and dynamic user interface. Available to provide examples of my jQuery projects upon request or through my GitHub page.",
      icon: url + "/images/282806_jquery_logo_icon.png"
    },
    {
      name: 'html5',
      description: "Skilled in utilizing a variety of HTML5 tags, such as section, nav, header, and footer, to structure my code in a clear and concise manner. Experienced in creating well-organized and easily maintainable HTML code.",
      icon: url + "/images/104494_html5_html_icon.png"
    },
    {
      name: 'css',
      description: "Expert in using CSS to style and position web page elements, utilizing flexible layout options such as flexbox to achieve my design goals. Possess advanced CSS skills and have scored in the top 30% on a LinkedIn CSS skills test.",
      icon: url + "/images/7422531_css3_css_file_development_icon.png"
    },
    {
      name: 'python',
      description: "Proficient in using Python for various purposes, including building a turn-based conquest game called Chaos Kingdom. Experienced in utilizing Python in conjunction with Django's model-view-controller layout to build powerful, dynamic web applications.",
      icon: url + "/images/python_icon.png"
    },
    {
      name: 'SQL',
      description: "Skilled in writing and optimizing SQL queries to efficiently extract data from relational databases. Have experience working with databases in a variety of settings, from small personal projects to large-scale enterprise applications.",
      icon: url + "/images/sql_icon.png"
    },
    {
      name: 'github',
      description: "Experienced in using Git and GitHub for version control and collaboration on projects. Familiar with GitHub's extensive feature set, including hosting websites and deploying web applications.",
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