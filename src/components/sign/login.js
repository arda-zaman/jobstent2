import React from 'react';
import firebase from 'firebase/app';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import fire from '../../../fbConfig';
import { Button } from '../fields';


class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    }
  }

  signInWithCredentials = () => {
    const { email, password } = this.state;
    fire.auth().signInWithEmailAndPassword(email, password)
      .then(firebaseUser => {
        console.log("USER LOGGED, #12");
      })
      .catch(err => {
        console.log("ERROR HAPPENED: SignInWithCredentials", err);
      })
  };

  signInWithGoogle = () => {
    const base_provider = new firebase.auth.GoogleAuthProvider;

    fire.auth().signInWithPopup(base_provider).then(res => {
      console.log("RESPONSE: ", res);
    }).catch(err => {
      console.log("ERROR ON GOOGLE LOGIN", err);
    })
  };

  render() {
    const { user } = this.props;
    console.log("PROPS:", user);

    return (
      <div className="login-page">
        <Helmet>
          <title>Sign In</title>
        </Helmet>
        <div className="center-page">

          {!user.login && (
            <div className="login-area">
              <div className="left-side">
                <img src={require('../../assets/images/loginpic.jpeg')} alt="" />
              </div>
              <div className="right-side">
                <div className="title">
                  <span>Welcome to</span>
                  <h1>Jobstent</h1>
                </div>

                <form>
                  <div className="form-group">
                    <label htmlFor="username">Email Address</label>
                    <input type="email" id="username" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
                    <span className="reset-password">Reset Password</span>
                  </div>

                  <Button type="button" shadow="true" text="Sign In" size="large" dataType="midnight" click={this.signInWithCredentials} />

                  <div className="or-area">
                    <em />
                    <span>OR</span>
                    <em />
                  </div>

                  <div className="social-buttons">
                    <img src={require('../../assets/svgs/google.svg')} onClick={this.signInWithGoogle} />
                    <img src={require('../../assets/svgs/linkedin.svg')} />
                  </div>
                </form>
              </div>
            </div>
          )}

          {user.login && (
            <div className="logged-area">
              You have alreaddy logged in
            </div>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(Login);