import { Navbar, Container, Nav, Button } from "react-bootstrap";

const RepoFinderNavbar = ({ checkNewUser}: {checkNewUser: Function}) => {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand>Repofinder</Navbar.Brand>
        </Container>
        <Nav className="me-auto buttonContainer">
          <Button onClick={() => {checkNewUser()}}>check different user</Button>
        </Nav>
      </Navbar>
    )
}

export default RepoFinderNavbar