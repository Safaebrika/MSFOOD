import './bootstrap';
import ReactDOM from 'react-dom/client';
import { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { createRoot } from 'react-dom/client';

import Header from './components/Header';
import Categories from './components/categories/categories';
import Menu from './components/Menus/menu';
import About from './components/about/About';
import Contact from './components/contact/contact';
import Home from './components/HomeComponents/Home';
import LoginUi from './components/AuthComponents/Login';
import Register from './components/AuthComponents/Register';
import AdminDash from './components/AdminDashboard/AdminDash';
import Cart from './components/cart/Cart';
import Contacts from './components/contact/Contacts';
import CartComponent from './components/cartAdmin/AdminCart';
function App() {
    const [role, setRole] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
      axios
        .get('/GetRole')
        .then(response => {
          const role = response.data;
          setRole(role);
        })
        .catch(error => {
          console.log(error);
        });
    }, []);

    // useEffect(() => {
    //   if (role === 'admin') {
    //     navigate('/admin/dashboard');
    //   } else if (role === 'client') {
    //     navigate('/cat');
    //   }
    // }, [role, navigate]);

    return (
      <div>
        {role !== 'admin' && <Header />} {/* Condition pour afficher Header */}
        <Routes>
          <Route path="admin/dashboard" element={<AdminDash />} >
            <Route path="contacts" element={<Contacts />} />
            <Route path="AdminCart" element={<CartComponent/>} />
          </Route>
          <Route path="/cat" element={<Categories />} />
          <Route path="/" element={<Home />} />
          <Route path="/menus/:id" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginUi />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/logout" render={() => {
          // Perform any necessary logout logic here
          // Redirect the user to the login page
          window.location.href = '/login';
          return null; // Render nothing in this route
        }} />


        </Routes>
      </div>
    );
  }

  createRoot(document.getElementById('app')).render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

