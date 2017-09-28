import React, { Component } from 'react';

class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.handleLogin = this.handleLogin.bind(this);
    }

    handleLogin() {
        this.props.auth.loginWithCredentials({
            username: this.state.email,
            password: this.state.password
        });
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
                <input type="text" name="email" value={this.state.email} onChange={this.changeEmail.bind(this)} />
                <input type="password" name="password" value={this.state.password} onChange={this.changePassword.bind(this)} />
                <button onClick={this.handleLogin}>
                    {'Login'}
                </button>
            </div>
        );
    }
}

export default Login;
