import form from 'react-bootstrap/form';
import {useEffect,useState} from 'react';
import {connect} from "react-redux";
import {React,Component} from 'react';
import {register} from '../../store/actions/auth1';
class Register extends Component{
    constructor(props)
    {
        super(props);
         this.onChangeValue=this.onChangeValue.bind(this);
        this.SubmitButton=this.SubmitButton.bind(this);
        this.state={
            username:"",
            userfirstname:"",
            userlastname:"",
            userage:"",
            usergender:"",
            useremail:"",
            usermobile:"",
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
        this.props.dispatch(register(this.state.Name,this.state.Mobile,this.state.Email,this.state.Password))
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
        return(<div className="container">
    {!this.state.successful&&
    <form>
   <h1>Sign Up</h1>
  <div class="form-group container">
          
    <label for="username">Username</label>
    <input type="text" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter Name" onChange={this.onChangeValue}/>
               <label for="userfirstname">First Name</label>
    <input type="text" className="form-control" id="userfirstname" aria-describedby="emailHelp" placeholder="Enter Name" onChange={this.onChangeValue}/>
               <label for="userlastname">Last Name</label>
    <input type="text" className="form-control" id="userlastname" aria-describedby="emailHelp" placeholder="Enter Name" onChange={this.onChangeValue}/>
               <label for="Age">Age</label>
    <input type="text" className="form-control" id="userage" aria-describedby="emailHelp" placeholder="Enter Name" onChange={this.onChangeValue}/>
               <label for="Gender">Gender</label>
    <input type="text" className="form-control" id="usergender" aria-describedby="emailHelp" placeholder="Enter Name" onChange={this.onChangeValue}/>
        
          
    <label for="Email">Email address</label>
    <input type="email" class="form-control" id="useremail" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.onChangeValue}/>
                <label for="Mobile">Mobile</label>
    <input type="text" class="form-control" id="usermobile" aria-describedby="emailHelp" placeholder="Enter mobile" onChange={this.onChangeValue}/>
          
    <label for="Password">Password</label>
    <input type="password" class="form-control" id="password" placeholder="Password" onChange={this.onChangeValue}/>
  <button type="submit" class="btn btn-primary mt-4" onClick={this.SubmitButton}>Submit</button>
           </div>
</form>
               }
{this.state.successful&&<h1>Registration Successful</h1>}
</div>);
    }
};
export default connect()(Register);