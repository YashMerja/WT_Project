
// import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';
// import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const { login } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');

//     try {
//       const res = await axios.post('http://localhost:5000/api/auth/login', { email, password });
//       login(res.data.token);
//       navigate('/dashboard'); // Use navigate for redirect
//     } catch (err) {
//       console.error(err);
//       setError('Invalid email or password');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card shadow" style={{ width: '100%', maxWidth: '400px' }}>
//         <div className="card-body">
//           <h2 className="card-title text-center mb-4">Login</h2>
//           {error && <div className="alert alert-danger">{error}</div>}
//           <form onSubmit={handleSubmit}>
//             <div className="form-group mb-3">
//               <input
//                 type="email"
//                 className="form-control"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//               />
//             </div>
//             <div className="form-group mb-3">
//               <input
//                 type="password"
//                 className="form-control"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//               />
//             </div>
//             <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
//               {loading ? 'Logging in...' : 'Login'}
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Invalid email or password');
      }

      const data = await response.json();
      login(data.token);
      navigate('/dashboard'); // Redirect after successful login
    } catch (err) {
      console.error(err);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Login</h2>
          {error && <div className="alert alert-danger">{error}</div>}
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
