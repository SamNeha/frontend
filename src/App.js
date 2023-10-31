import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

// Import frontend components
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import Portal from "./Pages/Portal";
import Lab from "./Pages/Lab";
import Cart from "./Components/Cart";
import LoginForm from "./Components/LoginForm";
import SignupForm from "./Components/SignupForm";
import DoctorSignupForm from "./Components/DoctorSignupForm";
import DoctorLoginForm from "./Components/DoctorLoginForm";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import DoctorLogin from "./Components/DoctorLogin";
import DoctorSignup from "./Components/DoctorSignup";
import CheckoutForm from "./Components/CheckoutForm";
import DoctorPortal from "./Components/DoctorPortal";

function App() {
  return (
    <div className="App">
      <Router basename="/Health-Plus">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/portal" element={<Portal />} />
          <Route path="/lab" element={<Lab />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/loginform" element={<LoginForm />} />
          <Route path="/signupform" element={<SignupForm />} />
          <Route path="/doctorsignup" element={<DoctorSignupForm />} />
          <Route path="/doctorlogin" element={<DoctorLoginForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/doclogin" element={<DoctorLogin />} />
          <Route path="/docsignup" element={<DoctorSignup />} />
          <Route path="/docportal" element={<DoctorPortal />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
