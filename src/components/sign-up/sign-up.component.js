import React,{useState} from 'react';
import "./sign-up.styles.scss";
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import axios from 'axios';


export default function SignUpPage() {
  let [dispName,setDispName] = useState("");
  let [password,setPassword] = useState("");
  let [cpassword,setCPassword] = useState("");
  let [email,setEmail] = useState("");

  let handleSubmit = async event => {
    event.preventDefault();
    if(password !== cpassword){
        // alert("Passwords dont match")
        // return;
      // let response = await axios.post("http://localhost:5000/api/users/register", {
      //   method: 'POST',
      //   headers: {'Content-Type': 'application/json'},
      //   body: JSON.stringify({
      //     "name": dispName,
      //     "enail_id": email,
      //     "password": password
      //   })
      // });
      // let content = await response.json();
      // console.log(content);

      try {
        const response = await axios.post("http://localhost:5000/api/users/register",
        JSON.stringify({
              "name": dispName,
              "email_id": email,
              "password": password
             }),
            {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            }
        );
        console.log(response?.data);
        console.log(response?.accessToken);
        console.log(JSON.stringify(response))

    }catch (err) {
      if (!err?.response) {
          console.log(err)
      } else if (err.response?.status === 409) {
          console.log('Username Taken');
      } else {
          console.log('Registration Failed')
      }
    
  }
}
   //write reg logic
    setDispName("");
    setPassword("");
    setCPassword("");
    setEmail("");
  }
  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
      <FormInput name="displayName" type="text" 
        handleChange={(e)=>setDispName(e.target.value)} value={dispName} 
        label="Display Name" required/>
        <FormInput name="email" type="email" 
        handleChange={(e)=>setEmail(e.target.value)} value={email} 
        label="email" required/>
       <FormInput name="password" type="password" 
        handleChange={(e)=>setPassword(e.target.value)} value={password} 
        label="password" required/>
        <FormInput name="cpassword" type="password" 
        handleChange={(e)=>setCPassword(e.target.value)} value={cpassword} 
        label="Confirm Password" required/>
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
        </div>
      </form>
    </div>
  )
}
