import React from "react";
import './Header.css';

class Form extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
        username: "",
        password: "",
        }
        
    }
    /*-------------------------------------------------------------------------------------------*/ 
    formValid = (formErrors) => {
        let valid = true;
      
        Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    return valid;
    };
    
    /*------------------------------------------------------------------------------------------*/ 

        /*this.handleEvent = this.handleEvent.bind(this)*/

        validate = () => {
            let nameError = "";

            if (!this.state.username) {
                nameError = "Name cannot be blank";
            }

            if (nameError) {
                return false;
            }
        }

    /*-------------------------------------------------------------------------------------*/ 

        /*handlesubmit checks if the credentials in the formErrors object are correct*/ 
        handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state);
        }
        /*const { name, value } = e.target;

        if (formValid(this.credentials.formErrors)) {
            console.log(
                "First name: " 
            );
        } else { console.error("Form invalid") }*/
        };

    /*------------------------------------------------------------------------------------------*/

    render() {
        return ( <form onSubmit={this.handleSubmit}>
                    <h1 className="logintext">LOGIN</h1>

                    <label for="loginnameinput">USERNAME</label><br />
                    <input type="text" className="nameinput"></input><br />

                    <label for="loginnameinput">PASSWORD</label><br />
                    <input type="password" className="nameinput"></input><br />

                    <h3 className="bottomtext">Don't have an account?<span className="linktologin">Click Here</span></h3>
                    <button type="submit" className="loginbutton">Sign In</button>
                </form> )
    }
}

export default Form;