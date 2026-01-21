import React, { useRef } from 'react'

const Signup = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();

  function Signuphandler(){
    const namevalue = name.current.value;
    const emailvalue = email.current.value;
    const passwordvalue = password.current.value;
    const data = {namevalue,emailvalue,passwordvalue};
    name.current.value = '';
    email.current.value = '';
    password.current.value = '';
  }

  return (
    <form onSubmit={Signuphandler}>
        Name : <input type="text" placeholder='Enter username' value={name} ref={name} /> <br />
        Email : <input type="text" placeholder='Enter Your Email' value={email} ref={email} /> <br />
        Password : <input type="text" placeholder='Enter Your Password' value={password} ref={password}/> <br />
        <button type='Submit'>Submit</button>
    </form>
  )
}

export default Signup