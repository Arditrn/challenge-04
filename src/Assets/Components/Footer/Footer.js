import React from 'react';
import fb from '../../Img/icon_facebook.png';
import twitter from '../../Img/icon_twitter.png';
import ig from '../../Img/icon_instagram.png';
import twitch from '../../Img/icon_twitch.png';
import email from '../../Img/icon_mail.png';
import logo from '../../Img/logo.png';
import '../Footer/Footer.css';

export const Footer = () => {
  return (
    <div className='container fixed-bottom' id='footer'>
        <div className="row">
				<div className="col-lg-3">
					<p>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
					<p>binarcarrental@gmail.com</p>
					<p>081-233-334-808</p>
				</div>
				<div className="col-lg-2">
					<p>Our services</p>
					<p>Why Us</p>
					<p>Testimonial</p>
					<p>FAQ</p>
				</div>
				<div className="col-lg-4">
					<p>Connect with us</p>
					<img src={fb} className="img-icon" alt=""/>
					<img src={twitter} className="img-icon" alt=""/>
					<img src={ig} className="img-icon" alt=""/>
					<img src={email} className="img-icon" alt=""/>
					<img src={twitch} className="img-icon" alt=""/>
				</div>
				<div className="col-lg-3">
					<p>Copyright Binar 2022</p>
                    <img src={logo}></img>
				</div>
			</div>
    </div>
  )
}
