import React from 'react';
import './Contact.scss';

const Contact = () => {
	return (
		<div className='contact'>
			<div className="container">
				<div className="col">
					<div className="row">
						<div className="contact__title">Contact</div>
						<div className="contact__address">
							<h3>STORE</h3>
							<p>De Clercqstraat 74 - 76</p>
							<p>1052 NK, Amsterdam</p>
							<p>The Netherlands</p>
							<p>+0123456789</p>
							<p>test1234@gmail.com</p>
						</div>
					</div>

					<div className="row">
						<iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62694.91569666865!2d106.7181449227894!3d10.854692767355855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174d85e042bf04b%3A0xbb26baec1664394d!2zVGjhu6cgxJDhu6ljLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1646849490599!5m2!1svi!2s" className='map' loading="lazy"></iframe>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact;