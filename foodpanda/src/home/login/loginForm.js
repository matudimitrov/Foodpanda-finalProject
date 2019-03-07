import React, { Component } from 'react';
import './loginForm.css';


class LoginForm extends Component {

    state = {
        user: {
            email: "",
            password: ""
        },
        userList : [
            {firstName: 'Georgi',
            lastName: 'Halembakov',
            email: 'g@email.com',
            password: 'parola123',
            mobileNumber: '0888776293'
            }
        ],
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
    
        if(this.state.userList.some(user => 
            user.email === email && 
            user.password === password)){
                console.log('You have logged ');
                this.props.login();
            
        }
        else {
            throw new Error ('No user found!');
        }
    
    }

   
    

    render() {
        return (
            <div className="login-form-wrapper">
                <div className="login-form-content">
                    <h4 className="login-header">Login</h4>
                    <form className="login-form">
                        <div className="input-box email">
                            <input type="email" required name="email" placeholder="Email" onChange={this.setEmail} value={this.state.user.email} />

                            <span className="error"></span>
                        </div>
                        <div className="input-box password">
                            <input type="password" required placeholder="Password" onChange={this.setPassword} value={this.state.user.password} />
                            <span className="error"></span>
                        </div>
                        <button onClick={this.login}>
                            login
                        </button>
                    </form>
                    <div className="login-form-content">
                        <span>Don't have an account ? </span>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginForm;