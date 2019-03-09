import React, { Component } from 'react';
import './loginForm.css';


class LoginForm extends Component {

    state = {
        user: {
            email: "",
            password: ""
        },
        userList: [
            {
                firstName: 'Georgi',
                lastName: 'Halembakov',
                email: 'g@email.com',
                password: 'parola123',
                mobileNumber: '0888776293'
            }
        ],
    }

    showRegisterForm = event => {
        event.preventDefault();
        (this.props.register)();
    }

    setEmail = event => {
        const value = event.target.value;
        const user = { ...this.state.user };
        user.email = value;
        this.setState({ user });
    }

    setPassword = event => {
        const value = event.target.value;
        const user = { ...this.state.user };
        user.password = value;
        this.setState({ user });
    }

    login = event => {
        event.preventDefault();
        const email = document.querySelector("input[name='email']");
        const password = document.querySelector("input[name='password']");
        console.log(email)
        console.log(password)
        const userList = JSON.parse(localStorage.getItem('userList'));
        console.log(userList);


        if (Array.prototype.some.call(userList, (user =>
            user.email === email.value &&
            user.password === password.value))) {

            const currentUser = Array.prototype.filter.call(userList, (user =>
            user.email === email.value &&
            user.password === password.value));
            console.log(currentUser[0]);
            sessionStorage.setItem('currentUser', JSON.stringify(currentUser[0]));
            (this.props.login)();

        }
        else {
            const error = document.querySelector('.error');
            error.style.visibility = "visible";
        }

    }




    render() {
        return (
            <div className="login-form-wrapper">
                <div class="form-close" onClick={this.props.close}> </div>
                <div className="login-form-content">
                    <h4 className="login-header">Login</h4>
                    <form className="login-form">
                        <div className="input-box email">
                            <input type="email" required name="email" placeholder="Email" onChange={this.setEmail} value={this.state.user.email} />


                        </div>
                        <div className="input-box password">
                            <input type="password" required name="password" placeholder="Password" onChange={this.setPassword} value={this.state.user.password} />

                        </div>
                        <button onClick={this.login}>
                            login
                        </button>
                        <div className="error"><span >Invalid username or password! </span></div>

                    </form>
                    <div className="login-form-content">
                        <span>Don't have an account ? <a className="register-link" onClick={this.showRegisterForm}>Sign-up here</a></span>
                    </div>
                </div>

            </div>
        );
    }
}

export default LoginForm;