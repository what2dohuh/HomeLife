import React from 'react';
import air from '../assest/about.png'
import '../styles/contact.css'
const ContactusPage = () => {
    return (
        <div className='contact'>
            <div className='left' style={{backgroundImage:`url(${air})`}}>
            </div>
            <div className='right'>
                <form>
                    <h2>Contact Us</h2>
                    <div className='form-group'>
                        <label>Name</label>
                        <input type='text' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'/>
                    </div>
                    <div className='form-group'>
                        <label>Email</label>
                        <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'/>
                    </div>
                    <div className='form-group'>
                        <label>Message</label>
                        <textarea className='form-control' id='exampleFormControlTextarea1' rows='3'></textarea>
                    </div>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default ContactusPage;
