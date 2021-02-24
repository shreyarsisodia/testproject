import{
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    SET_MESSAGE,
}from "./type";
import axios from 'axios';
export const register=(username,
            userfirstname,
            userlastname,
            userage,
            usergender,
            useremail,
            usermobile,
            password)=>(dispatch)=>
{
   return axios.post('/register',
                     {
              username:username,
                    userfirstname:userfirstname,
                    userlastname:userlastname,
                    userage:userage,
       usermobile:usermobile,
        password: password
   })
            .then((response)=>{})
            .catch();
        
}
export const login=(username,password)=>(dispatch)=>
{
    return axios.post('/login',{
        username,
        password
    })
    .then((response)=>{
        localStorage.setItem("username","34523545");
    })
}
                  
                  

                  
    
    