import React from 'react';
import iconLogo from './icon-fox.png';
import { useState } from 'react'
import Modal from 'react-modal';
import './Header.css'
import DayJS from 'react-dayjs';


const Header = () => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [loginmodalIsOpen, setLoginModalIsOpen] = useState(false)


const currentDate = '';

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
                    <input type="text" className="nameinput"></input><br />

                    <label for="nameinput">PASSWORD</label><br />
                    <input type="text" className="nameinput"></input><br />

                    <label for="nameinput">CONFIRM PASSWORD</label><br />
                    <input type="text" className="nameinput"></input><br />

                    <h3 className="bottomtext">Already have an account?</h3>
                    <h3 className="linktologin">Click here</h3>
                    <button className="signinbutton">Sign In</button>
                </Modal>
                <button className="loginmodalbutton" onClick={() => setLoginModalIsOpen(true)}><h3>LOGIN</h3></button>

		        <Modal className="loginmodal" isOpen={loginmodalIsOpen}>
			        <button className="loginclosebutton" onClick={() => setLoginModalIsOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="white" d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg></button>
                    <h1 className="logintext">LOGIN</h1>
                    <label for="loginnameinput">USERNAME</label><br />
                    <input type="text" className="nameinput"></input><br />

                    <label for="loginnameinput">PASSWORD</label><br />
                    <input type="text" className="nameinput"></input><br />

                    <h3 className="bottomtext">Already have an account?<span className="linktologin">Click Here</span></h3>
                    <button className="loginbutton">Sign In</button>
		        </Modal>
                <button className='login-btn'>Login</button>
            </div>

        </header>
    )
}

export default Header;