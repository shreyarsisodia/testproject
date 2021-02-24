import button from 'react-bootstrap/button';
import {Link} from 'react-router-dom';
import './index.css';
import Button from 'react-bootstrap/Button';
const LandingPage=()=>
{
    return(<div class="body">
    <div class="container landingpagediv">
        <h1>Podcast Platform</h1>
           <Link to="Login"  class="btn btn-light btn-lg btn-block mt-5">Login</Link>
              <Link to="Register"  class="btn btn-light btn-lg btn-block">Register</Link>
           </div>
           </div>
           
    
    )
}
export default LandingPage;