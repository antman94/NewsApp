import React from "react";
import './Header.css';

class Form extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
        username: "",
        password: "",
        nameError: "",
        passwordError: "",
        }
        
    }
    /*-------------------------------------------------------------------------------------------*/ 
        /*formValid = (formErrors) => {
            let valid = true;
        
            Object.values(formErrors).forEach(val => {
            val.length > 0 && (valid = false);
        });

        return valid;
        };*/
    
    /*------------------------------------------------------------------------------------------*/ 

        /*this.handleEvent = this.handleEvent.bind(this)*/

        validate = () => {
            let nameError = "";
            let passwordError = "";

            if (!this.state.username) {
                nameError = "Name cannot be blank";
                console.clear();
                console.log("Username cannot be blank");
            }

            if (!this.state.password) {
                passwordError = "Password cannot be blank";
                console.log("Password cannot be blank");
            }

            if (this.state.password.length < 3) {
                alert("Password is too short. Please choose a different password.");
                return false;
            }

            if (nameError) {
                return false;
            }

            if (passwordError) {
                return false;
            }

        }

    /*-------------------------------------------------------------------------------------*/ 

        /*handlesubmit checks if the credentials in the formErrors object are correct*/ 
        handleSubmit = (event) => {
        event.preventDefault();
        this.setState({username: event.target.value});
        this.setState({password: event.target.value})
        console.clear();
        console.log(this.state.username);
        console.log(this.state.password);
        
        const isValid = this.validate();
        if (isValid) {
            console.log("validate");
        }
        /*const { name, value } = e.target;

        if (formValid(this.credentials.formErrors)) {
            console.log(
                "First name: " 
            );
        } else { console.error("Form invalid") }*/

        /*value={this.state.username}*/
        };

    /*------------------------------------------------------------------------------------------*/
        handleUsernameChange = (event) => {
            this.setState({username: event.target.value})
        }

        handlePasswordChange = (event) => {
            this.setState({password: event.target.value})
        }

    /*------------------------------------------------------------------------------------------*/

    render() {
        return ( <form onSubmit={this.handleSubmit}>
                    <h1 className="logintext">LOGIN</h1>

                    <label for="loginnameinput">USERNAME</label><br />
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} className="nameinput"></input><br />

                    <label for="loginnameinput">PASSWORD</label><br />
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="nameinput"></input><br />

                    <h3 className="bottomtext">Don't have an account?<span className="linktologin">Click Here</span></h3>
                    <button type="submit" className="loginbutton">Sign In</button>
                </form> )
    }
}

export default Form;