import {Navbar, Button,Nav} from 'react-bootstrap'
import instacartLogoSvg from '../logo-1.svg'


export default function TopBar() {
    return <Navbar bg='light' expand='lg' fixed='top'>
        <Navbar.Brand 
        style={
            {
                margin: '5px 0 0 20px'
            }
        }
        href='#home'
        >
            <img src={instacartLogoSvg} alt='logo image' />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-bar' >
            <Nav className='mr-auto'></Nav>
            <Nav>
                <Nav.Link href='#login'>Log In</Nav.Link>
                <Button variant='success'>Sign Up</Button>
            </Nav>
        
        </Navbar.Collapse>

    </Navbar>

}