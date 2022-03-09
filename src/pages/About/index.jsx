import React from 'react';
import './About.scss';

const About = () => {
	return (
		<div className='about'>
			<div className="container">
				<div className="about__title">STORE</div>

				<div className="about__introduce">
					<div className='offline'>
						<h3>Offline</h3>
						<p>About lifestyle for men, founded in 2015 in the centre of Amsterdam. The shops are located on the Haarlemmerdijk and De Clercqstraat. More than 120 investors helped create the ultimate men's store: a combination of fashion, art and lifestyle in an all-round stylish hangout.</p>
						<p>With carefully selected brands such as drôle de monsieur, isabel marant, norse project, nn07, libertine libertine, new balance, arte antwerp, won hundred, filippa k, filling pieces and many more mouth-watering fashion. A setting that inspires. Meeting like-minded people with good coffee or a beer. The freshest tunes and art. About knows what is good in life.</p>
					</div>

					<div className="online">
						<h3>Online</h3>
						<p>With carefully selected brands such as drôle de monsieur, isabel marant, norse project, nn07, libertine libertine, new balance, arte antwerp, won hundred, filippa k, filling pieces and many more mouth-watering fashion. A setting that inspires. Meeting like-minded people with good coffee or a beer. The freshest tunes and art. About knows what is good in life.</p>
						<p>The about webshop brings our instore service to you. Simply navigate through our collection, select your favorite pieces and order them from anywhere. It’s a pity we won’t see you in person, plus you’ll miss our coffee and stories. But it is a great alternative, if you don’t have time to drop by the store.</p>
					</div>
				</div>

				<p className="text">"To all the gents in the place, with style and grace - see you online and instore bij about."</p>
			</div>
		</div>
	)
}

export default About;