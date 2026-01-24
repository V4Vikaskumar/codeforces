import React, { useRef } from "react";
import "./Signup.css";

export default function Signup() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passRef = useRef(null);

  function Signuphandler(e) {
    e.preventDefault();

    const namevalue = nameRef.current.value;
    const emailvalue = emailRef.current.value;
    const passwordvalue = passRef.current.value;

    const data = { namevalue, emailvalue, passwordvalue };
    console.log("Signup data:", data); // later: send to backend

    // clear inputs
    nameRef.current.value = "";
    emailRef.current.value = "";
    passRef.current.value = "";
  }

  return (
    <div className="auth">
      <div className="auth__card card">
        <div className="auth__head">
          <h1 className="h1">Create account</h1>
          <p className="p">Join and start solving problems.</p>
        </div>

        <form className="auth__form" onSubmit={Signuphandler}>
          <label className="auth__label">Username</label>
          <input className="input" placeholder="rahul123" ref={nameRef} />

          <label className="auth__label">Email</label>
          <input className="input" placeholder="you@example.com" ref={emailRef} />

          <label className="auth__label">Password</label>
          <input className="input" type="password" placeholder="••••••••" ref={passRef} />

          <button className="btn auth__btn" type="submit">
            Sign up
          </button>

          <p className="auth__foot">
            Already have an account?{" "}
            <a className="auth__link" href="/signin">
              Sign in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
