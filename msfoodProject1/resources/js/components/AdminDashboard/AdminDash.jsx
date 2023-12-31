import React, { useState, useEffect } from 'react';
import './dashboard.css';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminDash = () => {

const [laravelRoutes, setLaravelRoutes] = useState(null);
const [AdminName, setAdminName] = useState(null);
useEffect(() => {
  // Fetch Laravel routes
axios.get('/api/laravel-routes')
    .then(response => {
      setLaravelRoutes(response.data);
    })
    .catch(error => {
      console.error('Error fetching Laravel routes:', error);
    });
axios.get('/AdminName')
    .then(response => {
        setAdminName(response.data);
    })
    .catch(error => {
      console.error('Error ofName Admin:', error);
    });
},
[]);
  const [show, setShow] = useState(false);
  const handleLogout = () => {
    axios.post('/logout')
      .then(response => {
        // Handle successful logout (e.g., redirect to login page)
        window.location.href = '/login';
      })
      .catch(error => {
        console.error('Error logging out:', error);
      });
  };
  return (
    <div id="espacess">
      <main className={show ? 'space-toggle' : null}>
        <header className={`header ${show ? 'space-toggle' : null}`}>
          <div className="header-toggle text-dark " onClick={() => setShow(!show)}>
            <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
          </div>
        </header>
        <aside className={`sidebar ${show ? 'show' : null}`}>
          <nav className="nav nav2">
            <div>
                <div className='d-flex'>
                <img src="/imgs/profile.png" alt="" width={50} />
                 {  <p style={{marginTop:'10%'}}>Welcome  {AdminName} !</p>}
                </div>


              <div className="nav-list">
                <Link to="/admin/dashboard/AdminCart" className="nav-link active">
                  <i class="fa-solid fa-user"></i>
                  <span className="nav-link-name">View Cart client</span>
                </Link>
                  <div className="nav-link">
                    <i className="fa-solid fa-list">
                    <a href={laravelRoutes?.indexCategory ?? '#'} >All Categories</a>
                    {/* <a href={laravelRoutes.indexCategory}>All Categorie</a> */}
                    </i>
                  </div>

                   <div className="nav-link">
                    <i className="fa-solid fa-list">
                    <a href={laravelRoutes?.createCategory ?? '#'}> Add Categories</a>
                    {/* <a href={laravelRoutes.createCategory}>Create Ctegorie</a> */}
                    </i>
                    </div>
                   <div className="nav-link">
                  <i className="fa-solid fa-utensils">
                  {/* <a href={laravelRoutes.menuindex}>Our Menu</a> */}
                  <a href={laravelRoutes?.menuindex ?? '#'} >Our Menu</a>
                  </i>
                  </div>
                    <div className="nav-link">

                  <i className="fa-solid fa-utensils">
                  {/* <a href={laravelRoutes.menuCreate}>Add New Menu</a> */}
                  <a href={laravelRoutes?.menuCreate ?? '#'} >New Menu</a>

                  </i>
                  </div>

                  <Link to="/admin/dashboard/contacts" className="nav-link">
                  <i className="fa-solid fa-user-pen"></i>
                 <span className="nav-link-name"> client contact</span>
               </Link>
              </div>
            </div>

            <Link to="/logout" className="nav-link" onClick={handleLogout}>
               <i className="fas fa-sign-out nav-link-icon"></i>
                 <span className="nav-link-name">Logout</span>
             </Link>
          </nav>
        </aside>
        <div>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AdminDash;
