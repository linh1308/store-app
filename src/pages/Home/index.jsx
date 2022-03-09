import React from 'react';
import Listing from '../../components/Listing';
import bg from '../../images/bg.jpg';
import './Home.scss';

const Home = () => {
	return (
		<>
			<div className='hero'>
				<div className="container-fluid">
					<div className="image">
						<img src={bg} alt="background" />
					</div>

					<div className="hero__content">
						<h4 className='title'>New seasons arrivals</h4>
						<p className="text">Check out all the trends</p>
					</div>
				</div>
			</div>

			<Listing />
		</>
	)
}

export default Home;