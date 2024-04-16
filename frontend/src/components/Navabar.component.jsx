import React, { useState } from 'react';
import airbnb from'../assest/airbnb.png'
import { Link } from 'react-router-dom';
import '../styles/navbar.css'
import { Reorder } from '@mui/icons-material';
const NavabarComponent = () => {
    const [openLinks, setopenLinks] = useState(false);
    const toggole=()=>{
        setopenLinks(!openLinks)
    }
    return (
        <div className='navbar'>
            <div className='left' id={openLinks ? "open":"close"}>
            <Link to='/'><img src={airbnb}></img></Link>
            <div className='hiddenLinks'>
            <Link to='/'>Home</Link>
            <Link to='/listings'>Listings</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            </div>
            </div>
            <div className='right'>
            <Link to='/'>Home</Link>
            <Link to='/listings'>Listings</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact Us</Link>
            <button onClick={toggole}>
            <Reorder/>
            </button >
            </div>
        </div>
    );
}

export default NavabarComponent;
