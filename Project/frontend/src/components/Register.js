// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate(); // Corrected capitalization

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
//       navigate('/login'); // Use navigate instead of history.push
//     } catch (err) {
//       console.error(err);
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           required
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div>
//   );
// };

// export default Register;




// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Register = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
//       navigate('/login'); // Redirect to login after successful registration
//     } catch (err) {
//       console.error(err);
//       alert('Registration failed');
//     }
//   };

//   return (
//     <div className="container d-flex justify-content-center align-items-center vh-100">
//       <div className="card shadow" style={{ width: '100%', maxWidth: '400px' }}>
//         <div className="card-body">
//           <h2 className="card-title text-center mb-4">Register</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form-group mb-3">
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Name"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//             </div>
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
//             <button type="submit" className="btn btn-primary btn-block">
//               Register
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Register;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      if (!response.ok) {
        throw new Error('Registration failed');
      }

      navigate('/login'); // Redirect to login after successful registration
    } catch (err) {
      console.error(err);
      alert('Registration failed');
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow" style={{ width: '100%', maxWidth: '400px' }}>
        <div className="card-body">
          <h2 className="card-title text-center mb-4">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
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
            <button type="submit" className="btn btn-primary btn-block">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
