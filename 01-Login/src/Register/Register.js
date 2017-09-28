'use_strict';

import React, { Component } from 'react';

class Register extends Component {

    constructor(){
        super();

        this.state = {
            email: '',
            password: ''
        }
        this.handleRegister = this.handleRegister.bind(this);
        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
        this.handleGooglePlusLogin = this.handleGooglePlusLogin.bind(this);
    }

    handleRegister() {
        this.props.auth.signup({
            email: this.state.email,
            password: this.state.password
        });
    }

    handleGooglePlusLogin() {
        this.handleSocialLogin('google-oauth2');
    }

    handleFacebookLogin() {
        this.handleSocialLogin('facebook');
    }

    handleSocialLogin(connection) {
        this.props.auth.socialLogin(connection);
    }

    changeEmail(e) {
        this.setState({email: e.target.value});
    }

    changePassword(e) {
        this.setState({password: e.target.value});
    }

    render() {
        return (
            <div>
                <h4>User Password Log Sign up</h4>
                <input type="text" name="email" value={this.state.email} onChange={this.changeEmail.bind(this)} />
                <input type="password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)} />
                <button onClick={this.handleRegister.bind(this)}>
                    {'Register'}
                </button>

                <h4>Social Sign up</h4>
                <button onClick={this.handleFacebookLogin}>
                    {'Facebook Register'}
                </button>
                <button onClick={this.handleGooglePlusLogin}>
                    {'Google+ Register'}
                </button>
            </div>
        );
    }
}

export default Register;
