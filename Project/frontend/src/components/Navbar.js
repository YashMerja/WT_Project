// import React, { useContext } from 'react';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// const Navbar = () => {
//   const { user, logout } = useContext(AuthContext);

//   return (
//     <nav>
//       <ul>
//         {user ? (
//           <>
//             <li><Link to="/dashboard">Dashboard</Link></li>
//             <li><Link to="/add-expense">Add Expense</Link></li>
//             <li><button onClick={logout}>Logout</button></li>
//           </>
//         ) : (
//           <>
//             <li><Link to="/login">Login</Link></li>
//             <li><Link to="/register">Register</Link></li>
//           </>
//         )}
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;





import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Expense Tracker</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li> */}
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/dashboard">Dashboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/add-expense">Add Expense</Link>
                </li>
                <li className="nav-item">
                  <button className="btn btn-outline-danger" onClick={logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
                <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
