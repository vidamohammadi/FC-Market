import React from 'react'
import { Container, Navbar, Nav} from 'react-bootstrap'

const Header = () => {
    return (
        <Header>
            <Navbar>
                <Container>
                    <Navbar.Brand href='/'>FC Market</Navbar.Brand>
                    <Nav>
                        <Nav.Link href='/cart'>Cart</Nav.Link>
                        <Nav.Link href='/account'>Account</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </Header>
    )
}

export default Header
