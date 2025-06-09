'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { auth } from '../../../lib/firebase';
import '../../../src/app/styles/Auth.css';

// ✅ Import icons from react-icons
import { FaEnvelope, FaLock } from 'react-icons/fa';

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [remember, setRemember] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/');
    } catch (err) {
      setErrorMsg(err.message);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="input-group">
          <FaEnvelope className="icon" />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <FaLock className="icon" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {errorMsg && <p className="error-text">{errorMsg}</p>}

        <div className="extra-options">
          <label className="remember-me">
            <input
              type="checkbox"
              checked={remember}
              onChange={() => setRemember(!remember)}
            />
            <span>Remember Me</span>
          </label>
          <a className="forgot-link" href="#">Forgot Password?</a>
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
