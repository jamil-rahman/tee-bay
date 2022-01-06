import React, {useState} from 'react'
import { CREATE_USER_MUTATION } from "../GraphQL/Mutations"
import { useMutation } from "@apollo/client";
function Register() {

    const [email,setEmail] = useState("");
    const [password,setpassword] = useState("")

    const [createUser, { error }] = useMutation(CREATE_USER_MUTATION);


    const register = () => {
        createUser({
          variables: {
            email: email,
            password: password,
          },
        });
    
        if (error) {
          console.log(error);
        }
      };
        if(!error){
        }
    
    return (  
<div className='container'>
<form >
<div className="form-group row">
        <div className="col-xs-3">
            <label for="ex2">Email</label>
            <input className="form-control" id="ex2" type="email" onChange={(e)=>{
                setEmail(e.target.value)
            }} />
        </div>

      <div className="col-xs-3">
        <label for="Password">Password</label>
        <input className="form-control" id="ex2" type="password"  onChange={(e)=>{
                setpassword(e.target.value) }}/>
      </div>

      <div class="d-flex justify-content-center my-3">
    <button class="btn btn-primary" onClick={register}>Register</button>
    </div>
      </div>
</form>
</div>
        
    )
}
export default Register
