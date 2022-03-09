import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './Footer.scss';

const Footer = () => {
	return (
		<div className='footer'>
			<div className="container footer-content">
				<div className="footer__title">
					Store
				</div>

				<div className="footer-menu">
					<div className="footer-menu__item">
						<h3>Get help</h3>
						<ul>
							<li>Order status</li>
							<li>Delivery</li>
							<li>Returns</li>
							<li>Payment options</li>
							<li>Contact us</li>
						</ul>
					</div>

					<div className="footer-menu__item">
						<h3>About store</h3>
						<ul>
							<li>News</li>
							<li>Careers</li>
							<li>Investors</li>
							<li>Address</li>
						</ul>
					</div>
				</div>

				<div className="footer-socials">
					<FaFacebook className='footer-socials__icon' />
					<FaTwitter className='footer-socials__icon' />
					<FaYoutube className='footer-socials__icon' />
					<FaInstagram className='footer-socials__icon' />
				</div>
			</div>

			<div className="container footer-sub">
				<div className="footer-sub__copyright">
				© 2022 STORE, Inc. All Rights Reserved
				</div>

				<div className="footer-sub__terms">
					<div className="terms">Terms of use</div>
					<div className="policy">Privacy policy</div>
				</div>
			</div>
		</div>
	)
}

export default Footer;