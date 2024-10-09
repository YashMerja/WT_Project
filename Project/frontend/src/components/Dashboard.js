
// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   const { user, logout } = useContext(AuthContext);
//   const [expenses, setExpenses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate('/login'); // Redirect to login if user is not authenticated
//     } else {
//       const fetchExpenses = async () => {
//         try {
//           const response = await fetch('http://localhost:5000/api/expenses', {
//             method: 'GET',
//             headers: {
//               'x-auth-token': localStorage.getItem('token'),
//               'Content-Type': 'application/json',
//             },
//           });

//           if (!response.ok) {
//             throw new Error('Failed to fetch expenses');
//           }

//           const data = await response.json();
//           setExpenses(data);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       fetchExpenses();
//     }
//   }, [user, navigate]);

//   // Function to format the amount in INR
//   const formatToINR = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 2,
//     }).format(amount);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Dashboard</h2>
//       <hr />
//       <button className="btn btn-danger mb-4" onClick={logout}>
//         Logout
//       </button>
//       <h3>Your Expenses</h3>
//       {expenses.length === 0 ? (
//         <p>No expenses recorded.</p>
//       ) : (
//         <table className="table table-hover table-striped">
//           <thead>
//             <tr>
//               <th>Name</th> {/* Moved Name column to the first position */}
//               <th>Description</th>
//               <th>Amount (INR)</th>
//               <th>Date</th>
//               <th>Payment Method</th>
//             </tr>
//           </thead>
//           <tbody>
//             {expenses.map((expense) => (
//               <tr key={expense._id}>
//                 <td>{expense.name}</td> {/* Moved Name column to the first position */}
//                 <td>{expense.description}</td>
//                 <td>{formatToINR(expense.amount)}</td>
//                 <td>{new Date(expense.date).toLocaleDateString()}</td>
//                 <td>{expense.paymentMethod}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Dashboard;















// import React, { useState, useEffect, useContext } from 'react';
// import { AuthContext } from '../context/AuthContext';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const Dashboard = () => {
//   const { user, logout } = useContext(AuthContext);
//   const [expenses, setExpenses] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     if (!user) {
//       navigate('/login'); // Redirect to login if user is not authenticated
//     } else {
//       const fetchExpenses = async () => {
//         try {
//           const response = await fetch('http://localhost:5000/api/expenses', {
//             method: 'GET',
//             headers: {
//               'x-auth-token': localStorage.getItem('token'),
//               'Content-Type': 'application/json',
//             },
//           });

//           if (!response.ok) {
//             throw new Error('Failed to fetch expenses');
//           }

//           const data = await response.json();
//           setExpenses(data);
//         } catch (error) {
//           console.error(error);
//         }
//       };

//       fetchExpenses();
//     }
//   }, [user, navigate]);

//   // Function to format the amount in INR
//   const formatToINR = (amount) => {
//     return new Intl.NumberFormat('en-IN', {
//       style: 'currency',
//       currency: 'INR',
//       minimumFractionDigits: 2,
//     }).format(amount);
//   };

//   // Function to handle expense deletion
//   const handleDelete = async (id) => {
//     if (window.confirm('Are you sure you want to delete this expense?')) {
//       try {
//         const response = await fetch(`http://localhost:5000/api/expenses/${id}`, {
//           method: 'DELETE',
//           headers: {
//             'x-auth-token': localStorage.getItem('token'),
//             'Content-Type': 'application/json',
//           },
//         });

//         if (!response.ok) {
//           throw new Error('Failed to delete expense');
//         }

//         // Remove the deleted expense from the state
//         setExpenses(expenses.filter(expense => expense._id !== id));
//       } catch (error) {
//         console.error(error);
//       }
//     }
//   };

//   // Navigate to the edit page
//   const handleEdit = (id) => {
//     navigate(`/edit-expense/${id}`);
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Dashboard</h2>
//       <hr />
//       <button className="btn btn-danger mb-4" onClick={logout}>
//         Logout
//       </button>
//       <h3>Your Expenses</h3>
//       {expenses.length === 0 ? (
//         <p>No expenses recorded.</p>
//       ) : (
//         <table className="table table-hover table-striped">
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Description</th>
//               <th>Amount (INR)</th>
//               <th>Date</th>
//               <th>Payment Method</th>
//               <th>Actions</th> {/* New column for actions */}
//             </tr>
//           </thead>
//           <tbody>
//             {expenses.map((expense) => (
//               <tr key={expense._id}>
//                 <td>{expense.name}</td>
//                 <td>{expense.description}</td>
//                 <td>{formatToINR(expense.amount)}</td>
//                 <td>{new Date(expense.date).toLocaleDateString()}</td>
//                 <td>{expense.paymentMethod}</td>
//                 <td>
//                   <button
//                     className="btn btn-warning btn-sm me-2"
//                     onClick={() => handleEdit(expense._id)} // Edit button
//                   >
//                     Edit
//                   </button>
//                   <button
//                     className="btn btn-danger btn-sm"
//                     onClick={() => handleDelete(expense._id)} // Delete button
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       )}
//     </div>
//   );
// };

// export default Dashboard;





import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const [expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate('/login'); // Redirect to login if user is not authenticated
    } else {
      const fetchExpenses = async () => {
        try {
          const response = await fetch('http://localhost:5000/api/expenses', {
            method: 'GET',
            headers: {
              'x-auth-token': localStorage.getItem('token'),
              'Content-Type': 'application/json',
            },
          });

          if (!response.ok) {
            throw new Error('Failed to fetch expenses');
          }

          const data = await response.json();
          setExpenses(data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchExpenses();
    }
  }, [user, navigate]);

  const formatToINR = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 2,
    }).format(amount);
  };

  // Function to handle expense deletion
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this expense?')) {
      try {
        const response = await fetch(`http://localhost:5000/api/expenses/${id}`, {
          method: 'DELETE',
          headers: {
            'x-auth-token': localStorage.getItem('token'),
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to delete expense');
        }

        // Remove the deleted expense from the state
        setExpenses(expenses.filter(expense => expense._id !== id));
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Navigate to the edit page
  const handleEdit = (id) => {
    navigate(`/edit-expense/${id}`);
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Dashboard</h2>
      <hr />
      <button className="btn btn-danger mb-4" onClick={logout}>
        Logout
      </button>
      <h3>Your Expenses</h3>
      {expenses.length === 0 ? (
        <p>No expenses recorded.</p>
      ) : (
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Amount (INR)</th>
              <th>Date</th>
              <th>Payment Method</th>
              <th>Actions</th> {/* New column for actions */}
            </tr>
          </thead>
          <tbody>
            {expenses.map((expense) => (
              <tr key={expense._id}>
                <td>{expense.name}</td>
                <td>{expense.description}</td>
                <td>{formatToINR(expense.amount)}</td>
                <td>{new Date(expense.date).toLocaleDateString()}</td>
                <td>{expense.paymentMethod}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(expense._id)} // Edit button
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(expense._id)} // Delete button
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Dashboard;
