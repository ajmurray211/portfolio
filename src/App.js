import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projects from './components/Projects';
// import woods2waters from 'https://imgur.com/a/DcGPG03'
import { Nav, NavItem, NavLink } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <nav>
        <Nav fill tabs>
          <NavItem><NavLink active href="#">Home</NavLink></NavItem>
          <NavItem><NavLink href="#">Projects</NavLink></NavItem>
          <NavItem><NavLink href="#">Skills</NavLink></NavItem>
          <NavItem><NavLink href="#">Refrences</NavLink></NavItem>
          <NavItem><NavLink href="#">Contact me </NavLink></NavItem>
        </Nav>
      </nav>
      <div>
        <Projects/>
      </div>
    </div>
  );
}

export default App;
