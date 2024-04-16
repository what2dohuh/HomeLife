import React from 'react';

const ListingComponent = ({img,title,price}) => {
    return (
        <div className='ListingItems'>
            <div style={{backgroundImage:`url(${img})`}}></div>
            <h1>{title}</h1>
            <p>{price}</p>
            <div className='btn'>
            <button > Book Now</button>
            </div>
        </div>
    );
}

export default ListingComponent;
