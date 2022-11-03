import logo from './logo.svg';
import './App.css';
import { Home } from './Components/Home';
import { CustomerTable } from './Components/CustomerTable';
// import { Router, Route, Routes, NavLink } from 'react-router-dom';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

function App() {
  return (

    <div>
      <Router>
        <Link to="/">Home  </Link>
        <Link to="/customerTable">  CustomerTable</Link>
        <Routes>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/home" ><Home /></Route>
          <Route path="/customerTable" component={CustomerTable} />
        </Routes>


      </Router>
    </div>

  );
}

export default App;
