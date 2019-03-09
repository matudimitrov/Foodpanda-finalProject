import React, { Component } from 'react';
import './registration.css';

class RegisterForm extends Component {

    state = {
        user: {
            firstName: "",
            lastName: "",
            email: "",
            mobileNumber: "",
            password: ""
        },
        usersList: [

        ]

    }

    showLoginForm = event => {
        event.preventDefault();
        (this.props.login)();
    }

    setFirstName = event => {
        const value = event.target.value;
        const user = { ...this.state.user };
        user.firstName = value;
        this.setState({ user });
    }

    setLastName = event => {
        const value = event.target.value;
        const user = { ...this.state.user };
        user.lastName = value;
        this.setState({ user });
    }

    setEmail = event => {
        const value = event.target.value;
        const user = { ...this.state.user };
        user.email = value;
        this.setState({ user });
    }

    setMobileNumber = event => {
        const value = event.target.value;
        const user = { ...this.state.user };
        user.mobileNumber = value;
        this.setState({ user });
    }

    setPassword = event => {
        const value = event.target.value;
        const user = { ...this.state.user };
        user.password = value;
        this.setState({ user });
    }

    register = event => {
        event.preventDefault();
        const firstName = document.querySelector("input[name='firstName']");
        const lastName = document.querySelector("input[name='lastName']");
        const email = document.querySelector("input[name='email']");
        const mobileNumber = document.querySelector("input[name='mobileNumber']");
        const password = document.querySelector("input[name='password']");
        console.log(firstName);
        console.log(lastName);
        console.log(mobileNumber);
        console.log(email)
        console.log(password)

        let hasErrors = false;

        if (!isNaN(firstName.value) && (firstName.value.trim().length < 2)) {
            const error = document.querySelector('.firstName span');
            error.style.visibility = "visible";
            hasErrors = true;
        }
        if (!isNaN(lastName.value) && (lastName.value.trim().length < 2)) {
            const error = document.querySelector('.lastName span');
            error.style.visibility = "visible";
            hasErrors = true;
        }
        if (!isNaN(mobileNumber.value) && (mobileNumber.value.trim().length !== 10)) {
            const error = document.querySelector('.mobileNumber span');
            error.style.visibility = "visible";
            hasErrors = true;
        }
        if (!this.isEmailValid(email.value)) {
            const error = document.querySelector('.email span');
            error.style.visibility = "visible";
            hasErrors = true;
        }
        if (!isNaN(password.value) && (password.value.trim().length < 5)) {
            const error = document.querySelector('.password span');
            error.style.visibility = "visible";
            hasErrors = true;
        }


        if (!hasErrors) {
            let user = {...this.state.user};
            let usersList = [...this.state.usersList, user];
            this.setState({usersList});
            sessionStorage.setItem('usersList', JSON.stringify(usersList));
            (this.props.register)()
            
        }


    }

    isEmailValid = email => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }




    render() {
        return (
            <div className="register-form-wrapper">
                <div class="form-close" onClick={this.props.close}> </div>
                <div className="register-form-content">
                    <h4 className="register-header">Register</h4>
                    <form className="register-form">
                        <div className="input-box firstName">
                            <input type="text" required name="firstName" placeholder="First Name" onChange={this.setFirstName} value={this.state.user.firstName} />
                            <span className="error">Mоля въведете актуално име</span>

                        </div>
                        <div className="input-box lastName">
                            <input type="text" required name="lastName" placeholder="Last Name" onChange={this.setLastName} value={this.state.user.lastName} />
                            <span className="error">Mоля въведете актуална фамилия</span>

                        </div>
                        <div className="input-box email">
                            <input type="email" required name="email" placeholder="Email" onChange={this.setEmail} value={this.state.user.email} />
                            <span className="error">Mоля въведете актуален имейл</span>

                        </div>
                        <div className="input-box mobileNumber">
                            <input type="text" required name="mobileNumber" placeholder="Mobile Number" onChange={this.setMobileNumber} value={this.state.user.mobileNumber} />
                            <span className="error">Mоля въведете актуален телефонен номер</span>

                        </div>
                        <div className="input-box password">
                            <input type="password" required name="password" placeholder="Password" onChange={this.setPassword} value={this.state.user.password} />
                            <span className="error">Паролата трабва да съдържа поне 5 символа</span>
                        </div>
                        <button onClick={this.register}>
                            register
                        </button>


                    </form>
                    <div className="login-text">
                        <span>You have an account ? <a className="register-link" onClick={this.showLoginForm}>Login</a></span>
                    </div>
                </div>
            </div>
        );
    }
}

export default RegisterForm;