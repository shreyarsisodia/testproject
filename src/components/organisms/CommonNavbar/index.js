import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
const CommonNavbar=()=>
{
    return(
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
       <i class="material-icons micicon">mic_none</i>
  <Navbar.Brand href="#home"></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto ">
      <Link to={""} className="navbar-brand">My Channel</Link>
        <Link to={"PodcastActivity"} className="navbar-brand">Podcast Activity</Link>
        <Link to={"MyDrafts"} className="navbar-brand">My Drafts</Link>
      <Link href={""} className="navbar-brand">Live</Link>
    </Nav>
    <Nav className="dropdownitempadding">
    <Image src="https://st.depositphotos.com/1779253/5140/v/950/depositphotos_51405259-stock-illustration-male-avatar-profile-picture-use.jpg" roundedCircle width="30" height="30"/>
     <NavDropdown  title="username" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">logout</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  </Navbar.Collapse> 
</Navbar>
        );
}
export default CommonNavbar;