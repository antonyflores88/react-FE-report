// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [startDate, setStartDate] = useState('2023-01-01'); // Initial start date
//   const [endDate, setEndDate] = useState('2023-01-31');     // Initial end date
//   const [data, setData] = useState(null);                   // State to hold fetched data
//   const [error, setError] = useState(null);                 // State to hold any error

//   useEffect(() => {
//     // Function to fetch data
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`https://localhost:7292/api/Customer/GetSalesOrdersByDateRange?startDate=${startDate}&endDate=${endDate}`);
//         setData(response.data);
//       } catch (err) {
//         setError(err);
//       }
//     };

//     fetchData();
//   }, [startDate, endDate]); // Effect depends on startDate and endDate

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <div>
//           <h3>Data from API:</h3>
//           {error && <p>Error fetching data: {error.message}</p>}
//           {data ? (
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//         <div>
//           <h3>Set Date Range</h3>
//           <label>
//             Start Date:
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </label>
//           <label>
//             End Date:
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </label>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, { useState } from 'react';
// import axios from 'axios';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [startDate, setStartDate] = useState('2023-01-01'); // Initial start date
//   const [endDate, setEndDate] = useState('2023-01-31');     // Initial end date
//   const [data, setData] = useState(null);                   // State to hold fetched data
//   const [error, setError] = useState(null);                 // State to hold any error

//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`https://localhost:7292/api/Customer/GetSalesOrdersByDateRange?startDate=${startDate}&endDate=${endDate}`);
//       setData(response.data);
//     } catch (err) {
//       setError(err);
//     }
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//         <div>
//           <h3>Data from API:</h3>
//           {error && <p>Error fetching data: {error.message}</p>}
//           {data ? (
//             <pre>{JSON.stringify(data, null, 2)}</pre>
//           ) : (
//             <p>Loading...</p>
//           )}
//         </div>
//         <div>
//           <h3>Set Date Range</h3>
//           <label>
//             Start Date:
//             <input
//               type="date"
//               value={startDate}
//               onChange={(e) => setStartDate(e.target.value)}
//             />
//           </label>
//           <label>
//             End Date:
//             <input
//               type="date"
//               value={endDate}
//               onChange={(e) => setEndDate(e.target.value)}
//             />
//           </label>
//           <button onClick={fetchData}>Fetch Data</button>
//         </div>
//       </header>
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import axios from 'axios';
import logo from './new-logo01.gif';
import './App.css';

function App() {
  const [startDate, setStartDate] = useState('2023-01-01'); // Initial start date
  const [endDate, setEndDate] = useState('2023-01-31');     // Initial end date
  const [data, setData] = useState(null);                   // State to hold fetched data
  const [error, setError] = useState(null);                 // State to hold any error

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://localhost:7292/api/Customer/GetSalesOrdersByDateRange?startDate=${startDate}&endDate=${endDate}`);
      setData(response.data);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Welcome to My Report App</h1>
        <div>
          <h3>Set Date Range For Orders to Show</h3>
          <label>
            Start Date:
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </label>
          <label>
            End Date:
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </label>
          <button onClick={fetchData}>Fetch Data</button>
        </div>
        <div>
          <h3>Data from API:</h3>
          {error && <p>Error fetching data: {error.message}</p>}
          {data ? (
            <table>
              <thead>
                <tr>
                  <th>Order ID</th>
                  <th>Order Date</th>
                  <th>Account Number</th>
                  <th>Customer ID</th>
                  <th>Total Due</th>
                </tr>
              </thead>
              <tbody>
                {data.map((order) => (
                  <tr key={order.orderID}>
                    <td>{order.orderID}</td>
                    <td>{new Date(order.orderDate).toLocaleDateString()}</td>
                    <td>{order.accountNumber}</td>
                    <td>{order.customerID}</td>
                    <td>${order.totalDue.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
