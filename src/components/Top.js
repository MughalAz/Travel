import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavScrollExample() {
  return (
    <>
    <div className='container'>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active ps-5" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ps-5" to="/guides">Guides</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ps-5" to="/flights">Flights</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link ps-5" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex">
        <button className="btn-1" type="submit">Contact Us</button>
      </form>
    </div>
  </div>
</nav>
    </div>
    {/* <div className='container'>
      <Navbar bg="light" expand="lg" className='fixed-top'>
        <Container fluid>
          <Navbar.Brand href="/"></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link href="/" className='home'>Home</Nav.Link>
              <Nav.Link href="/guides" className='home'>Guides</Nav.Link>
              <Nav.Link href="/flights" className='home'>Flights</Nav.Link>
              <Nav.Link href="/about" className='home'>About</Nav.Link>
            </Nav>
            <Form className="">
              <Button variant="outline-dark" className='btn-1'>Contact Us</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div> */}
    </>
  );
}

export default NavScrollExample;