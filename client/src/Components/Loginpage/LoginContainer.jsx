import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import LoginForm from './LoginForm';
import './LoginContainer.css';

class LoginContainer extends Component {
	render() {
		return (
			<div>
				<img
					src='https://c1.wallpaperflare.com/preview/202/734/520/graduation-cap-graduation-cap-achievement.jpg'
					alt='bg'
					class='bg'></img>
				<Card className='login_container shadow p-3 mb-5 bg-white rounded'>
					<Card.Body>
						<Card.Title className='Card_title'>Alumni Connect</Card.Title>
						<Card.Subtitle className='mb-2 text-muted '>
							A place to share knowledge and better understand the world
						</Card.Subtitle>{' '}
						<br></br>
						<LoginForm />
					</Card.Body>
				</Card>
			</div>
		);
	}
}

export default LoginContainer;
