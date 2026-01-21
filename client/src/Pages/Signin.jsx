import React, { useRef, useState } from 'react'

const Signin = () => {
  
  const email = useRef();
  const password = useRef();

  function signinhandler(){
    const emailvalue = email.current.value;
    const passwordvalue = password.current.value;
    let data = {emailvalue,passwordvalue};
    email.current.value = '';
    password.current.value = '';
  }

  return (
    <form onSubmit={signinhandler}>
        Email : <input type="text" placeholder='Enter Your Email' ref={email} /> <br />
        Password : <input type="text" placeholder='Enter Your Password' ref={password} /> <br />
        <button>Signup</button>
    </form>
  )
}

export default Signin