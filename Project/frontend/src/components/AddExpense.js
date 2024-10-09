









// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const AddExpense = () => {
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/expenses/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-auth-token': localStorage.getItem('token'),
//         },
//         body: JSON.stringify({ description, amount }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add expense');
//       }

//       setDescription('');
//       setAmount('');
//       alert('Expense added');
//     } catch (err) {
//       console.error(err);
//       alert('Failed to add expense');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Add Expense</h2>
//       <form onSubmit={handleSubmit} className="form-inline">
//         <div className="form-group mb-2">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group mx-sm-3 mb-2">
//           <input
//             type="number"
//             className="form-control"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary mb-2">Add Expense</button>
//       </form>
//     </div>
//   );
// };

// export default AddExpense;





// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const AddExpense = () => {
//   const [description, setDescription] = useState('');
//   const [amount, setAmount] = useState('');
//   const navigate = useNavigate(); // useNavigate to redirect to dashboard

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/expenses/add', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'x-auth-token': localStorage.getItem('token'),
//         },
//         body: JSON.stringify({ description, amount }),
//       });

//       if (!response.ok) {
//         throw new Error('Failed to add expense');
//       }

//       // Reset form
//       setDescription('');
//       setAmount('');

//       // Redirect to dashboard after adding the expense
//       alert('Expense added');
//       navigate('/dashboard');
//     } catch (err) {
//       console.error(err);
//       alert('Failed to add expense');
//     }
//   };

//   return (
//     <div className="container mt-5">
//       <h2 className="mb-4">Add Expense</h2>
//       <form onSubmit={handleSubmit} className="form-inline">
//         <div className="form-group mb-2">
//           <input
//             type="text"
//             className="form-control"
//             placeholder="Description"
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group mx-sm-3 mb-2">
//           <input
//             type="number"
//             className="form-control"
//             placeholder="Amount"
//             value={amount}
//             onChange={(e) => setAmount(e.target.value)}
//             required
//           />
//         </div>
//         <button type="submit" className="btn btn-primary mb-2">Add Expense</button>
//       </form>
//     </div>
//   );
// };

// export default AddExpense;



import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddExpense = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [name, setName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState(''); 
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/expenses/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': localStorage.getItem('token'),
        },
        body: JSON.stringify({ description, amount, date, name, paymentMethod }),
      });

      if (!response.ok) {
        throw new Error('Failed to add expense');
      }

      // Reset form
      setDescription('');
      setAmount('');
      setDate('');
      setName('');
      setPaymentMethod('');

      // Redirect to dashboard
      alert('Expense added');
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
      alert('Failed to add expense');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Add Expense</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group mx-sm-3 mb-2">
          <input
            type="number"
            className="form-control"
            placeholder="Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-2">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group mb-2">
          <select
            className="form-control"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">Select Payment Method</option>
            <option value="Cash">Cash</option>
            <option value="Credit Card">Credit Card</option>
            <option value="Debit Card">Debit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Expense</button>
      </form>
    </div>
  );
};

export default AddExpense;
