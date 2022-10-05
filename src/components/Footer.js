import React from 'react';

const Footer = () => {
    return (
        <div className='footer container'>
            <div className='footer-section'>
                
                <p className='title'>KamerFood</p>
                <p>
                    KamerFood is a place where you can please yours soul and tummy with cameroonian delicious food recipies of all cuisine. 
                    And our service is absolutely free
                </p>
                <p>&copy; 2022 | All Rights Reserved</p>
            </div> 
            <div className='footer-section'>
                
                <p className='title'>Contact Us</p>
                <p>
                   kamerfood@gmail.com
                </p>
                <p>+ 237 6XX XXX XXX</p>
                <p>Rue 2467, Bamougoum, Ouest Cameroun</p>
            </div> 
            <div className='footer-section'>
                
                <p className='title'>Socials</p>
                <p>Facebook</p>
                <p>Twitter</p>
                <p>Instagram</p>
            </div> 
        </div>
    );
};

export default Footer;