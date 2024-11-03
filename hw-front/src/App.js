
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import { Route, BrowserRouter as Router, Routes, Navigate } from 'react-router-dom';
import AddUser from './users/AddUser';
import StartHome from './pages/StartHome';
import AdminLogin from './pages/AdminLogin';
import UserLogin from './pages/UserLogin'; // Import your UserLogin component
import UserSignup from './pages/UserSignup'; // Import your UserSignup component
import { useState } from 'react';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import Horiginpage from './pages/Horiginpage';
import Appointment from './pages/Appointment';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // State to track login status

  return (
    <div className="App">
      <Router>
        <Navbar />
        <MainRoutes isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
      </Router>
    </div>
  );
}

function MainRoutes({ isAuthenticated, setIsAuthenticated }) {
  return (
    <Routes>
      {/* Default route to StartHome */}
      <Route path="/" element={<StartHome />} />
      <Route path="/starthome" element={<StartHome />} />
      
      <Route path="/horigin" element={<Horiginpage/>} />
      <Route path="/appointment" element={<Appointment />} />

      
      {/* Public route: User login */}
      <Route path='/userlogin' element={<UserLogin setIsAuthenticated={setIsAuthenticated} />} />
      
      {/* Public route: User signup */}
      <Route path='/usersignup' element={<UserSignup />} />
      
      {/* Public route: Admin login */}
      <Route path='/adminlogin' element={<AdminLogin setIsAuthenticated={setIsAuthenticated} />} />
      
      {/* Protected route: Admin page */}
      <Route
        exact
        path="/admin"
        element={isAuthenticated ? <Home /> : <Navigate to="/adminlogin" />}
      />

      {/* Add User route */}
      <Route exact path="/adduser" element={isAuthenticated ? <AddUser /> : <Navigate to="/admin" />} />
     
      <Route exact path='/edituser/:id' element={<EditUser/>}/> 
      <Route exact path='/viewuser/:id' element={<ViewUser/>}/> 
      {/* Redirect to StartHome for any undefined routes */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
