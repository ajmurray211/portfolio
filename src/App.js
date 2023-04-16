import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, NavItem, NavLink } from 'reactstrap';
import Projects from './components/Projects';
import About from './components/About';
import References from './components/References';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <nav id='Nav'>
        <Nav fill tabs>
          <NavItem><NavLink active href="#">Home</NavLink></NavItem>
          <NavItem><NavLink href="#About">About</NavLink></NavItem>
          <NavItem><NavLink href="#Skills">Skills</NavLink></NavItem>
          <NavItem><NavLink href="#Projects">Projects</NavLink></NavItem>
          <NavItem><NavLink href="#References">References</NavLink></NavItem>
          <NavItem><NavLink href="#ContactMe">Contact me </NavLink></NavItem>
        </Nav>
      </nav>
      <div>
        <About />
        <Skills />
        <Projects />
        <References />
        <ContactMe />
      </div>
      <footer>
        <a id='Top' href='#Nav'>Return to top</a>
      </footer>
    </div>
  );
}

export default App;
