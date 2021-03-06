import React, { useState } from 'react';
import { Form, Col, Row, Button, Alert } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Axios from 'axios';
import './LoginContainer.css';

function LoginForm() {
	// const [fullName, setFullName] = useState('');
	// const [email, setEmail] = useState('');
	// const [password, setPassword] = useState('');
	const [emaillog, setEmailLog] = useState('');
	const [passwordlog, setPasswordLog] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const history = useHistory();

	// const signUp = () => {
	// 	Axios.post('http://localhost:3001/signup', {
	// 		fullName: fullName,
	// 		email: email,
	// 		password: password,
	// 	})
	// 		.then((response) => response.json())
	// 		.then((response) => {
	// 			console.log(response);
	// 		});
	// };

	const Studentlogin = () => {
		Axios.post('http://localhost:3001/studentlogin', {
			email: emaillog,
			password: passwordlog,
		}).then((response) => {
			if (response.data.loggedIn) {
				localStorage.setItem('loggedIn', true);
				localStorage.setItem('email', response.data.email);
				localStorage.setItem('status', 'student');
				history.push('/feed');
				window.location.reload(true);
			} else {
				setErrorMessage(response.data.message);
			}
		});
	};

	const Alumnilogin = () => {
		Axios.post('http://localhost:3001/alumnilogin', {
			email: emaillog,
			password: passwordlog,
		}).then((response) => {
			if (response.data.loggedIn) {
				localStorage.setItem('loggedIn', true);
				localStorage.setItem('email', response.data.email);
				localStorage.setItem('status', 'alumni');
				history.push('/feed');
				window.location.reload(true);
			} else {
				setErrorMessage(response.data.message);
			}
		});
	};

	return (
		<div>
			{errorMessage && <Alert variant='danger'>{errorMessage}</Alert>}
			<Form>
				<Row>
					<Col>
						<h3 className='font-weight-light'>
							<img
								src='https://img.icons8.com/cute-clipart/2x/tie.png'
								class='rounded-circle'
								style={{ height: '2rem', width: '2rem' }}
							/>{' '}
							Alumni Login
						</h3>
						<hr></hr>
						<Form.Label className='text-secondary'>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Email'
							onChange={(e) => {
								setEmailLog(e.target.value);
							}}
						/>
						<Form.Label className='text-secondary'>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => {
								setPasswordLog(e.target.value);
							}}
						/>
						<Button variant='success' className='Button' onClick={Alumnilogin}>
							Login
						</Button>
					</Col>

					{/* Login form starts here */}

					<Col>
						<h3 className='font-weight-light'>
							<img
								src='https://img.icons8.com/fluent/2x/student-female.png'
								class='rounded-circle'
								style={{ height: '2rem', width: '2rem' }}
							/>{' '}
							Student Login
						</h3>
						<hr></hr>
						<Form.Label className='text-secondary'>Email address</Form.Label>
						<Form.Control
							type='email'
							placeholder='Email'
							onChange={(e) => {
								setEmailLog(e.target.value);
							}}
						/>
						<Form.Label className='text-secondary'>Password</Form.Label>
						<Form.Control
							type='password'
							placeholder='Password'
							onChange={(e) => {
								setPasswordLog(e.target.value);
							}}
						/>
						<Button variant='success' className='Button' onClick={Studentlogin}>
							Login
						</Button>
					</Col>
				</Row>
			</Form>
		</div>
	);
}

export default LoginForm;
