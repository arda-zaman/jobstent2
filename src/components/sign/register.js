import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';

import { Button } from '../fields';
import fire from '../../../fbConfig';
import { userSignIn } from '../../actions/user';

class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: '',
    }
  }

  signUpWithEmailAndPassword = () => {
    const { onUserSignIn } = this.props;
    const { name, surname, email, password } = this.state;

    firebase.auth().createUserWithEmailAndPassword(email, password).then((authUser) => {
      authUser.user.updateProfile({
        displayName: name + ' ' + surname
      }).then((res) => {
        console.log("SUCCESS::", res);
      }, (error) => {
        console.log("ERROR:", error);
      });
    }, function (error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode == 'auth/weak-password') {
        alert('The password is too weak.');
      } else {
        console.error(error);
      }
    });
  }

  signUpWithGoogle = () => {
    const base_provider = new firebase.auth.GoogleAuthProvider;

    fire.auth().signInWithPopup(base_provider).then(res => {
      console.log("RESPONSE: ", res);
    }).catch(err => {
      console.log("ERROR ON GOOGLE LOGIN", err);
    });
  };

  render() {
    return (
      <div className="login-page register-page">
        <Helmet>
          <title>Jobstent Register</title>
        </Helmet>

        <div className="center-page">
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
                <div className="form-group group">
                  <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={this.state.name} onChange={e => this.setState({ name: e.target.value })} />
                  </div>
                  <div>
                    <label htmlFor="surname">Surname</label>
                    <input type="text" id="surname" value={this.state.surname} onChange={e => this.setState({ surname: e.target.value })} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="username">Email Address</label>
                  <input type="email" id="username" value={this.state.email} onChange={e => this.setState({ email: e.target.value })} />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input type="password" id="password" value={this.state.password} onChange={e => this.setState({ password: e.target.value })} />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password (Confirm)</label>
                  <input type="password" id="password" value={this.state.passwordConfirm} onChange={e => this.setState({ passwordConfirm: e.target.value })} />
                </div>

                <Button type="button" shadow="true" text="Sign Up" size="large" dataType="midnight" click={this.signUpWithEmailAndPassword} />

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

const mapDispatchToProps = {
  onUserSignIn: userSignIn
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);