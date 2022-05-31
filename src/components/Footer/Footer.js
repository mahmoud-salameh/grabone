import React from 'react';
import LinksBar from '../Drobdownlist/LinksBar';

function Footer() {
    return (
        <footer>
      <div className='top'>
        <div>
          <span><b>Follow us on</b></span>
          <LinksBar items={[
            {icon: 'fab fa-facebook-f'},
            {icon: 'fab fa-twitter'},
            {icon: 'fab fa-youtube'},
            {icon: 'fab fa-instagram'},
          ]}/> 
          <span><b>Get app exclusive deals</b></span>
          <p className='btn'>Download our App</p>
        </div>

        <div>
          <span>GrabOne</span>
          <p>Contact Us</p>
          <p>About Us</p>
          <p>Terms & Returns</p>
          <p>Blog</p>
          <p>Gift Cards</p>
        </div>

        <div>
          <span>My Account</span>
          <p>My Account</p>
          <p>My Cart</p>
          <p>My Coupons</p>
          <p>FAQ</p>
        </div>

        <div>
          <span>Merchants</span>
          <p>Run a Deal</p>
          <p>Merchant Centre</p>
        </div>

        <div className='phone_hed'>
          <span>Newsletter Signup</span>
          <span>Sign up for our daily emails and we'll send you all the best deals, tailored for you.</span>
          <div className="email-subscription__input-container">
            <i className="far fa-envelope"></i>
            <input  placeholder="Enter email address" className="email-subscription__input" />
            <button className='btn' type="submit" value="Sign Up" >Subscribe</button>
          </div>
          
        </div>
      </div>

      <div className='bottom'> 

      </div>
    </footer>
    );
}

export default Footer;