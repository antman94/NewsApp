import React, { useState } from 'react';
import Modal from 'react-modal';
import DayJS from 'react-dayjs';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import { selectUserList } from '../../redux/reducers/users'
import { fetchUsers } from '../../redux/actions/users';
import './Header.css'
import iconLogo from './icon-fox.png';



const Header = (props) => {

	const [modalIsOpen, setModalIsOpen] = useState(false)
	const [loginmodalIsOpen, setLoginModalIsOpen] = useState(false)

	const [loginData, setLoginData] = useState({
		username: '',
		password: '',
	});
	const [signupData, setSignupData] = useState('');

	const currentDate = '';
	const handleChangeLogin = (e) => {
		console.log(e.target)
		setLoginData({...loginData,[e.target.name]: e.target.value})
	}
	const handleClickLogin = () => {
		const user = props.users.users.find(user => user.username === loginData.username)
		if(user.password === loginData.password) {
			console.log('User logged in: ' , user)
			setLoginModalIsOpen(false)
		}
		
	}
	const handleChangeSignup = (e) => {
		setSignupData({[e.target.name]: e.target.value})
	}
	
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
			<button className="signinmodalbutton" onClick={() => setModalIsOpen(true)}><h3>SIGN UP</h3></button>
				<Modal className="signinmodal" isOpen={modalIsOpen}>
					<button className="closebutton" onClick={() => setModalIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></button><br />
					<h1 className="signintext">SIGN UP</h1>
					<label for="nameinput">NAME</label><br />
					<input type="text" className="nameinput"></input><br />

					<label for="nameinput">USERNAME</label><br />
					<input 
						type="text" 
						className="nameinput"
						value={loginData.username}
						onChange={(e) => handleChangeLogin(e)}
						></input><br />

					<label for="nameinput">PASSWORD</label><br />
					<input 
						type="text" 
						className="nameinput"
						value={loginData.password}
						onChange={(e) => handleChangeLogin(e)}
						></input><br />

					<label for="nameinput">CONFIRM PASSWORD</label><br />
					<input type="text" className="nameinput"></input><br />

					<h3 className="bottomtext">Already have an account?</h3>
					<h3 className="linktologin">Click here</h3>
					<button className="signinbutton">Sign up</button>
				</Modal>

				<Modal className="loginmodal" isOpen={loginmodalIsOpen}>
					<button className="loginclosebutton" onClick={() => setLoginModalIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></button>
					<h1 className="logintext">LOGIN</h1>
					<label for="loginnameinput">USERNAME</label><br />
					<input 
						type="text" 
						name="username"
						className="nameinput"
						value={loginData.username}
						onChange={(e) => handleChangeLogin(e)}
						></input><br />

					<label for="loginnameinput">PASSWORD</label><br />
					<input 
						type="text" 
						name="password"
						className="nameinput"
						value={loginData.password}
						onChange={(e) => handleChangeLogin(e)}
						></input><br />

					<h3 className="bottomtext">Already have an account?<span className="linktologin">Click Here</span></h3>
					<button 
						className="loginbutton"
						onClick={handleClickLogin}
						>Sign In</button>
				</Modal>
				<button className='login-btn' onClick={() => setLoginModalIsOpen(true)}>Login</button>
			</div>

		</header>
	)
}

function mapStateToProps(state) {

	//Hämta användare med ID , kontrollera att lösenord stämmer för login

	// Skicka användare med dispatch, create new user.
	return {
		users: selectUserList(state)
	}

}

const mapDispatchToProps = {
  fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);