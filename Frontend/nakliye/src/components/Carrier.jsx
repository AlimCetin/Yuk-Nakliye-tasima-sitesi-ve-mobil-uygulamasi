
// rfce
import React, { useEffect, useState } from 'react';
import CompanyApi from '../services/CompanyApi.js';
import Header from './Header.jsx'
import Footer from "./Footer.jsx";
import Address from "./RoteCarrier.jsx"
// Fimanın componenti
function Carrier() {
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
            <div><Address></Address></div>

            {/* FOOTER */}
            <Footer></Footer></div>
    )
} //End function

export default Carrier;
