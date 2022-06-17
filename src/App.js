import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
import { Nav, NavItem, NavLink } from 'reactstrap';
import About from './components/About';
import References from './components/References';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="App">
      <nav>
        <Nav fill tabs>
          <NavItem><NavLink active href="#">Home</NavLink></NavItem>
          <NavItem><NavLink href="#Projects">Projects</NavLink></NavItem>
          <NavItem><NavLink href="#">Skills</NavLink></NavItem>
          <NavItem><NavLink href="#About">About</NavLink></NavItem>
          <NavItem><NavLink href="#References">Refrences</NavLink></NavItem>
          <NavItem><NavLink href="#ContactMe">Contact me </NavLink></NavItem>
        </Nav>
      </nav>
      <div>
        <Projects/>
        <About/>
        <References/>
        <ContactMe/>
      </div>
    </div>
  );
}

export default App;
