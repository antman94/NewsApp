import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import DayJS from 'react-dayjs';
import { connect } from 'react-redux';

import './Header.css'
import iconLogo from './icon-fox.png';
import { login, register, logout } from "../../redux/actions/users/auth";
import { GeneralWhiteText } from '../common/index.styled.jsx';


const Header = (props) => {
	
	const [ modalIsOpen, setModalIsOpen ] = useState(false)
	const [ loginmodalIsOpen, setLoginModalIsOpen ] = useState(false)
	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});
	const [signupData, setSignupData] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	});

	const loggedInUser = JSON.parse(localStorage.getItem("user"));
	const currentDate = '';
	const { dispatch, message } = props;


	
	const handleChangeLogin = (e) => {
		console.log(e.target)
		setLoginData({...loginData,[e.target.name]: e.target.value})
	}

	/* 
	*	Dispatches the login function in redux with username and password, and if everything
	*	goes well it resets the form fields and closes the login modal so the user gets back
	* to the page.
	*/
	const handleClickLogin = () => {
			dispatch(login(loginData.username, loginData.password))
				.then(() => {
					setLoginData('');
					setLoginModalIsOpen(false);
				})
				.catch((err) => {
					console.log(err);
				})
		}
		
	const handleChangeSignup = (e) => {
		setSignupData({...signupData,[e.target.name]: e.target.value})
	}

	/* 
	*		When user clicks sign up and the passwords matches, dispatch the register function 
	*		in redux with username and password, then clear form fields, close signup modal and 
	*		open login modal.
	 */
	const handleClickSignup = () => {
		const { username, password, confirmPassword } = signupData;
		if(password === confirmPassword) {
			dispatch(register(username, password))
			.then(() => {
				setSignupData('');
				setModalIsOpen(false);
				setLoginModalIsOpen(true);
				alert('Signup succesful! WElcome ' + username);
			})
			.catch((err) => {
				console.log(err);
			})
		}
	}

	/* 
	*		Function for handling when user clicks "Dont have an account". Switches from login
	*		modal to signup modal.
	 */
	const handleClickNoAccount = () => {
		setLoginModalIsOpen(false);
		setModalIsOpen(true);
	}

	const logOut = () => {
		dispatch(logout());
	}
	
	/* 
	*		Hook for handling some warnings related to the modal.
	 */
	useEffect(() => {
		Modal.setAppElement('body');
		console.log(props.isLoggedIn)
	},[])
	
	return (
		<header>
			<div className='items-center'>
				<img src={iconLogo} alt='icon of a fox' className='logo' style={{ height: '100px' }} />
				<div className='column-container'>
					<h1>Ga<span className='m'>m</span>e Ove<span className='r'>r</span> News</h1>
					<DayJS className='date' format='dddd D MMMM YYYY'>{ currentDate }</DayJS>
				</div>
			</div>
			<div className='items-right'>
			
				<Modal className="signinmodal" isOpen={modalIsOpen} >
					<button className="closebutton" onClick={() => setModalIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></button><br />
					<h1 className="signintext">SIGN UP</h1>

					<label htmlFor="nameinput">USERNAME</label><br />
					<input 
						name="username"
						type="text" 
						className="nameinput"
						value={signupData.username}
						onChange={(e) => handleChangeSignup(e)}
						></input><br />

					<label htmlFor="nameinput">PASSWORD</label><br />
					<input 
						name="password"
						type="password" 
						className="nameinput"
						value={signupData.password}
						onChange={(e) => handleChangeSignup(e)}
						></input><br />

					<label htmlFor="nameinput">CONFIRM PASSWORD</label><br />
					<input
						name="confirmPassword"
						type="password" 
						className="nameinput"
						value={signupData.confirmPassword}
						onChange={(e) => handleChangeSignup(e)}
					></input><br />
					<GeneralWhiteText>{message}</GeneralWhiteText>
				

					<h3 className="bottomtext">Already have an account?</h3>
					<h3 className="linktologin">Click here</h3>
					<button 
						className="signinbutton"
						onClick={handleClickSignup}
						>Sign up</button>
				</Modal>

				<Modal className="loginmodal" isOpen={loginmodalIsOpen}>
					<button className="loginclosebutton" onClick={() => setLoginModalIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></button>
					<h1 className="logintext">LOGIN</h1>
					<label htmlFor="loginnameinput">USERNAME</label><br />
					<input 
						type="text" 
						name="username"
						className="nameinput"
						value={loginData.username}
						onChange={(e) => handleChangeLogin(e)}
						></input><br />

					<label htmlFor="loginnameinput">PASSWORD</label><br />
					<input 
						type="password" 
						name="password"
						className="nameinput"
						value={loginData.password}
						onChange={(e) => handleChangeLogin(e)}
						></input><br />
						<GeneralWhiteText>{message}</GeneralWhiteText>
						

					<h3 className="bottomtext">Dont have an account?
					<span 
						className="linktologin"
						onClick={handleClickNoAccount}
						>Click Here</span></h3>
					<button 
						className="loginbutton"
						onClick={handleClickLogin}
						>Sign In</button>
				</Modal>
				{props.isLoggedIn ? 
				<h3 className='login-btn'>{loggedInUser.username}</h3> :
				<button className='login-btn' onClick={() => setLoginModalIsOpen(true)}>Login</button>
			}
				
			</div>

		</header>
	)
}

/* 
*		
 */
function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message
  };
}


export default connect(mapStateToProps)(Header);