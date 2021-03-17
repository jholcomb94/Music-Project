import './App.css';
import './CSS/page-styles.css';
import RouterComponent from './RouterComponent'
import {Navbar,Nav} from 'react-bootstrap'
function App() {
  return (
    <div >
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top">

          <Navbar.Brand href="#home">Music </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">

              <Nav className="mr-auto">

              <Nav.Link href="/">Home</Nav.Link>

              <Nav.Link href="/editDB">Edit DB</Nav.Link>

              </Nav>
          </Navbar.Collapse>

      </Navbar>
      <RouterComponent></RouterComponent>
    </div>
  );
}

export default App;
