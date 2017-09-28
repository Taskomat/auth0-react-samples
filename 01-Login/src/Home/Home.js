import React, { Component } from 'react';

class Home extends Component {
  componentWillMount() {
    this.setState({ profile: {} });

    const { userProfile, getProfile } = this.props.auth;

    if (!userProfile) {
        getProfile((err, profile) => {
          this.setState({ profile });
        });
    } else {
        this.setState({ profile: userProfile });
    }
  }


  login() {
    this.props.auth.login();
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
                  onClick={this.login.bind(this)}
                >
                  Log In
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
