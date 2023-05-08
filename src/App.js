import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarToggler, Offcanvas, OffcanvasBody, OffcanvasHeader } from 'reactstrap';
import Projects from './components/Projects';
import About from './components/About';
import References from './components/References';
import ContactMe from './components/ContactMe';
import Skills from './components/Skills';
import { useState } from 'react';

function App() {
  const [collapsed, setCollapsed] = useState(false);

  const toggleNavbar = () => setCollapsed(!collapsed);
  return (
    <div className="App">
      <nav id='Nav'>
        <Navbar light>
          <NavbarBrand href="/" id='brandName' className="me-auto ">
            Alexander Murray
          </NavbarBrand>
          <NavbarToggler onClick={toggleNavbar} className="me-2" />
          <Offcanvas className='offcanvasNav' direction='start' isOpen={collapsed} toggle={toggleNavbar}>
            <OffcanvasHeader toggle={toggleNavbar}>
              Offcanvas
            </OffcanvasHeader>
            <OffcanvasBody>
              <NavItem ><NavLink active href="#">Home</NavLink></NavItem>
              <NavItem ><NavLink href="#Nav">About</NavLink></NavItem>
              <NavItem ><NavLink href="#Projects">Projects</NavLink></NavItem>
              <NavItem ><NavLink href="#References">References</NavLink></NavItem>
              <NavItem ><NavLink href="#Skills">Skills</NavLink></NavItem>
              <NavItem ><NavLink href="#ContactMe">Contact me </NavLink></NavItem>
            </OffcanvasBody>
          </Offcanvas>
        </Navbar>
        <About />
      </nav>
      <div>
        <Projects />
        <Skills />
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