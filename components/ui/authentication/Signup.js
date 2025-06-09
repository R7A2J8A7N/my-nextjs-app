'use client';

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../lib/firebase";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import "../../../src/app/styles/Auth.css";

export default function Signup() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [agree, setAgree] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (!agree) {
      setErrorMsg("You must agree to the Terms & Privacy.");
      return;
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSignup}>
        <h2 className="form-title">Get Started Now</h2>
        <p className="form-subtext">Enter your credentials to access your account</p>

        <div className="social-login">
          <button type="button" className="social-btn">
            <FcGoogle size={18} style={{ marginRight: 8 }} />
            Log in with Google
          </button>
          <button type="button" className="social-btn linkedin">
            <FaLinkedin size={18} style={{ marginRight: 8 }} />
            Log in with LinkedIn
          </button>
        </div>

        <div className="divider"><span>or</span></div>

        <div className="input-group">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group password-field">
          <input
            type="password"
            placeholder="min 8 chars"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <a href="#" className="forgot-link">Forgot password?</a>
        </div>

        <div className="checkbox-group">
          <input
            type="checkbox"
            checked={agree}
            onChange={() => setAgree(!agree)}
          />
          <span>I agree to the <a href="#">Terms & Privacy</a></span>
        </div>

        {errorMsg && <p className="error-text">{errorMsg}</p>}

        <button type="submit" className="submit-btn">Login</button>

        <p className="signin-link">
          Have an account? <a href="/login">Sign in</a>
        </p>
      </form>
    </div>
  );
}
