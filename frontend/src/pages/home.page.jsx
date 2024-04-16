import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/home.css'
import house from '../assest/house.png'
const HomPage = () => {
    return (
        <div className='home' style={{backgroundImage:`url(${house})`}}>
            <div className='headerContainer'>
                <h1 className=''>HomeLife</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, optio non perferendis earum quod placeat unde corrupti. Praesentium architecto labore illum nemo, quam facilis reprehenderit officiis optio quidem sequi aut!</p>
                <Link to="/listings">
                <button>Show Listings</button>
                </Link>
            </div>
        </div>
    );
}

export default HomPage;
