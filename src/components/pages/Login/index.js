import form from 'react-bootstrap/form';
import {useEffect,useState} from 'react';
import {connect} from "react-redux";
import {React,Component} from 'react';
import {login} from '../../store/actions/auth1';
import {Link} from 'react-router-dom';
import './index.css';
class Login extends Component{
    constructor(props)
    {
        super(props);
         this.onChangeValue=this.onChangeValue.bind(this);
        this.SubmitButton=this.SubmitButton.bind(this);
        this.state={
            username:"",
            email:"",
            password:"",
            successful:false,
        };
    }
    onChangeValue(e)
    {
        this.setState({[e.target.id]:e.target.value});
    };
     SubmitButton(e)
    {
        e.preventDefault();
        console.log("dispatchstarted");
        this.props.dispatch(login(this.state.username,this.state.password))
       .then(() => {
          this.setState({
            successful: true,
          });
        })
        .catch(() => {
          this.setState({
            successful: false,
          });
        });
        
    };
    render(){
        return(<div className="body"><div className="container body1">
    <form>
   <h1>Log In</h1>
  <div class="form-group container">
<label for="enterUsername" className="mt-5">Username</label>
    <input type="text" class="form-control mt-2" id="username" placeholder="Username" onChange={this.onChangeValue}/>
    <label for="enterpassword">Password</label>
    <input type="password" class="form-control" id="enterpassword" placeholder="Password" onChange={this.onChangeValue}/>
               
  <button type="submit" class="btn btn-info btn-lg btn-block mt-5" onClick={this.SubmitButton}>Submit</button>
  <p className="bottomtext">new user?<Link to="Register">sign up</Link></p>
           </div>
</form>
               {this.state.successful&&this.props.history.push("/PodcastActivity")}
</div>
</div>);
    }
};
export default connect()(Login);