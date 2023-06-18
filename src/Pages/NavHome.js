import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function NavHome() {
  let navigate = useNavigate();

  const logOutAction = () => {
    navigate("/login");
  };

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">The PARADISE FOOD</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/login"}>
                Login
              </Nav.Link>
              <Nav.Link as={Link} to={"/home"}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to={"/registration"}>
                Registration
              </Nav.Link>
              <Nav.Link as={Link} to={"/user-list"}>
                User List
              </Nav.Link>

              <Nav.Link as={Link} to={"/validation-demo"}>
                ValidationDemo
              </Nav.Link>
              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export { NavHome };
