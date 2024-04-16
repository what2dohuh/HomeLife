import React from 'react';
import ListingComponent from '../components/listing.component';
import air from '../assest/house.png'
import '../styles/listing.css';
const ListingsPage = () => {
    return (
        <div className='listings'>
            <h1  className='listingTitle'>
                House Listings
            </h1>
            <div className='housingLists'>
                <ListingComponent img={air} title='Title' price={10}/>
                <ListingComponent img={air} title='Title' price={10}/>
                <ListingComponent img={air} title='Title' price={10}/>
                <ListingComponent img={air} title='Title' price={10}/>
                <ListingComponent img={air} title='Title' price={10}/>
                <ListingComponent img={air} title='Title' price={10}/>
            </div>
            
        </div>
    );
}

export default ListingsPage;
