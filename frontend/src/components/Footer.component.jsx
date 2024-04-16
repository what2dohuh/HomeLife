import React from 'react';
import '../styles/footer.css'
import { Twitter,Instagram,Facebook } from '@mui/icons-material';
const FooterComponent = () => {
    return (
        <div className='footer'>
            <div className='socialMedia'>
            <Twitter/>
            <Instagram/>
            <Facebook/>
            </div>
            <p>&copy;@2024 something.com</p>
        </div>
    );
}

export default FooterComponent;
