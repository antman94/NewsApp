import React from 'react';
import iconLogo from './icon-fox.png';
import { useState } from 'react'
import Modal from 'react-modal';
import './Header.css'


const Header = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return (
        <header>
            <img src={iconLogo} alt='icon of a fox' style={{ height: '95px' }} />
            <div className='column-container'>
                <h1>Game Over News</h1>
                <p>– I'VE GOT NEWS FOR YA! –</p>
            </div>
            <div className='items-right'>
            <button onClick={() => setModalIsOpen(true)}>Sign in</button>
                <Modal className="signinmodal" isOpen={modalIsOpen}>
                    <h1 className="signintext">SIGN IN</h1>
                    <button onClick={() => setModalIsOpen(false)}>Close</button><br />
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
                </Modal>
                <p>Login</p>
            </div>

        </header>
    )
}

export default Header;