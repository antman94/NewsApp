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
        lengthError: "",
        loginconfirmed: "",
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


            if (!this.state.username || this.state.username === undefined) {
                nameError = "Username cannot be blank";
                console.clear();
                console.log("Username cannot be blank");
                return false;
            }

            if (!this.state.password || this.state.password === undefined) {
                passwordError = "Password cannot be blank";
                /*this.setState({passwordError: "Password cannot be blank"});
                this.setState({password: ""})  /*Reset password 
                console.log("Password cannot be blank");*/
                return false;
            }

            if (this.state.password.length < 5) {
                passwordError = "Password is too short!";
                /*this.setState({lengthError: "Password is too short!"});
                this.setState({password: ""}) /*Reset password
                this.setState({password: ""})*/ 
                return false;
            }

            if (this.state.password.length > 5 && this.state.username.length > 1)  {
                console.log("Access Granted");
                /*this.setState({loginconfirmed: "Access Granted"});*/
                return true;
            }

            /*if (this.state.password.length > 5 && this.state.username < 1 )  {
                this.setState({lengthError: "Name cannot be blank"});
                return false;
            }*/


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
        this.validate();
        event.preventDefault();
        let isValid;
         
        console.clear();
        console.log("handleSubmit triggered");
        console.log(this.state.username);
        console.log(this.state.password);
        
        this.isValid = this.validate(); /*This is finished*/ 
        if (this.state.password.length > 5 && this.state.username.length > 1) {
            this.setState({username: event.target.value});
            this.setState({password: event.target.value});
            this.setState({passwordError: "Access Granted"});
            console.log("validation succeeded");
        } 

        if (this.state.password.length < 5 ) {
            this.setState({passwordError: "Password too short!"});
            this.setState({password: ""});
            console.log("validation failed");
        }

        if (this.state.password.length < 5 && this.state.username.length < 1) {
            this.setState({passwordError: ""});
            this.setState({passwordError: "Credentials too short"});
            this.setState({password: ""});
            this.setState({username: ""});
            console.log("validation failed");
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
                    <div className="passwordwarning"><h2>{this.state.passwordError}</h2></div>
                    <div className="passwordwarning"><h2>{this.state.lengthError}</h2></div>
                    {/*<div className="loginconfirmed"><h2>{this.state.loginconfirmed}</h2></div>*/}

                    <h3 className="bottomtext">Don't have an account?<span className="linktologin">Click Here</span></h3>
                    <button type="submit" className="loginbutton">Sign In</button>
                </form> )
    }
}

export default Form;