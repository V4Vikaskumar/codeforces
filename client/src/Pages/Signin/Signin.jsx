import React, { useRef } from "react";
import "./Signin.css";

export default function Signin() {
  const emailRef = useRef(null);
  const passRef = useRef(null);

  function signinhandler(e) {
    e.preventDefault();

    const emailvalue = emailRef.current.value;
    const passwordvalue = passRef.current.value;

    const data = { emailvalue, passwordvalue };
    console.log("Signin data:", data); // later send to backend

    emailRef.current.value = "";
    passRef.current.value = "";
  }

  return (
    <div className="auth">
      <div className="auth_card">
        <div className="auth_head">
          <h2>Sign in</h2>
          <p>Welcome back</p>
        </div>

        <form className="auth_form" onSubmit={signinhandler}>
          <label className="auth_label">Email</label>
          <input className="auth_input" type="email" placeholder="Enter your email" ref={emailRef} />

          <label className="auth_label">Password</label>
          <input className="auth_input" type="password" placeholder="Enter your password" ref={passRef} />

          <button className="auth_btn" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
