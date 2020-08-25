import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, ButtonGroup} from 'react-bootstrap';

const navbar = props => {
    let user;
    let search;
    if (props.user) {
        user = <NavDropdown title="Dropdown" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    }
    if (props.user) {
        search = <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-success">Search</Button>
        </Form>
    } else {
        search = <ButtonGroup>
            <Button variant="light">log in</Button>
            <Button>Sign up</Button>
        </ButtonGroup>
    }

    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">CodeNote</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/public">Public notes</Nav.Link>
        {user}
        </Nav>
        {search}
    </Navbar.Collapse>
    </Navbar>
    )
}

export default navbar;