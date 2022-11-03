import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { CustomerTable } from './Components/CustomerTable';
import { Home } from './Components/Home';
import { SiteForm } from './Components/SiteForm';
import { Create } from './Components/Create';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Router>

    <div>
      <React.StrictMode>
        <Routes>
          <Route exact path="/CustomerTable" element={<CustomerTable />}></Route>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/SIteForm" element={<SiteForm />}></Route>
          <Route exact path="/Create" element={<Create />}></Route>
        </Routes>
      </React.StrictMode>
    </div>
  </Router >


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
