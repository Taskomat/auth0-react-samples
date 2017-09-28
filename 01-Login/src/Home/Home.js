import React, { Component } from 'react';

class Home extends Component {
  componentWillMount() {
    this.setState({ profile: {} });

    const { userProfile, getProfile, isAuthenticated } = this.props.auth;

    if(isAuthenticated()) {
        if (!userProfile) {
            getProfile((err, profile) => {
              this.setState({ profile });
            });
        } else {
            this.setState({ profile: userProfile });
        }
    }
  }

  goToLogin() {
      this.props.history.replace('login')
  }

  goToRegister() {
      this.props.history.replace('register')
  }

  getUserName() {
      return this.state.profile.name;
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="container">
        {
          isAuthenticated() && (
              <h4>
                You are logged in as {this.getUserName()}!
              </h4>
            )
        }
        {
          !isAuthenticated() && (
              <h4>
                You are not logged in! Please{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.goToLogin.bind(this)}
                >
                  Log In
                </a>
                {' '} or{' '}
                <a
                  style={{ cursor: 'pointer' }}
                  onClick={this.goToRegister.bind(this)}
                >
                  Register
                </a>
                {' '}to continue.
              </h4>
            )
        }
      </div>
    );
  }
}

export default Home;
