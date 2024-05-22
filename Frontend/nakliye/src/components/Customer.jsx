
// rfce
import React, { useEffect, useState } from 'react';
import CompanyApi from '../services/CompanyApi.js';
import Header from './Header.jsx'
import Footer from "./Footer.jsx";
import RoteCustomer from "./RoteCustomer.jsx"
import Sidebar from "./Sidebar.jsx"
// Fimanın componenti
function Customer() {
  /////////////////////////////////////////////////
  // EFFECT
  useEffect(() => {

  }, []);

  return (
    <div>
      {/* HEADER */}
      <div>
        <Header />
      </div><br /><br />
      <div className='row'>
        <div className='col col-2'><Sidebar></Sidebar></div>
        <div className='col'> <RoteCustomer></RoteCustomer></div>
       </div>

      {/* FOOTER */}
      <Footer></Footer></div>
  )
} //End function

export default Customer;
