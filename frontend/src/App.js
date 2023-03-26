import './App.css';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import ExpanceTracker from './Pages/ExpanseTracker/ExpanceTracker';
import Dashboad from './Pages/ExpanseTracker/Components/Dashboad';
import ViewTransaction from './Pages/ExpanseTracker/Components/ViewTransaction';
import Income from './Pages/ExpanseTracker/Components/Income';
import Expanse from './Pages/ExpanseTracker/Components/Expanse';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

function App() {
  return (
    <>
     <Router>
      <Navbar />

      <Routes>
      <Route excat path="/" element={<Home/>} />
      <Route excat path="/register" element={<Register/>} />
      <Route excat path="/login" element={<Login/>} />
      <Route excat path="expense_tracker" element={<ExpanceTracker/>} >
        <Route excat path="Dashboad" element={<Dashboad/>} />
        <Route excat path="ViewTransection" element={<ViewTransaction />}/>
        <Route excat path="income" element={<Income/>} />
        <Route excat path="expense" element={<Expanse/>} />
      </Route>

      </Routes>

     </Router>
    </>
  );
}

export default App;
