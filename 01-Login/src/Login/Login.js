import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleLogin = this.handleLogin.bind(this);
        this.handleFacebookLogin = this.handleFacebookLogin.bind(this);
        this.handleGooglePlusLogin = this.handleGooglePlusLogin.bind(this);
    }

    handleLogin() {
        this.props.auth.loginWithCredentials({
            username: this.state.email,
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
        return(
            <div>
                <h4>User Password Login</h4>
                <input type="text" name="email" value={this.state.email} onChange={this.changeEmail.bind(this)} />
                <input type="password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)} />
                <button onClick={this.handleLogin}>
                    {'Login'}
                </button>

                <h4>Social Login</h4>
                <button onClick={this.handleFacebookLogin}>
                    {'Facebook Login'}
                </button>
                <button onClick={this.handleGooglePlusLogin}>
                    {'Google+ Login'}
                </button>
            </div>
        );
    }
}

export default Login;
