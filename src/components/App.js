import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import 'firebase/auth';
import firebase from '../../fbConfig';
import * as userActions from '../actions/user';
import '../assets/js/polyfill';
import { Modal } from './sideComponents'
import { ContentLoader } from './sideComponents'

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.componentState = {};
    this.authListener();
  }

  authListener = async () => {
    const { onUserConnectionChecked, onUserCheckConnection } = this.props;

    // await onUserCheckConnection();
    firebase.auth().onAuthStateChanged(user => {
      const isLoggedIn = user ? true : false;
      onUserConnectionChecked(user, isLoggedIn);
    });
  }

  componentDidCatch(err) {
    console.log("DIDCATCH::", err);
  }

  getAppType = () => {
    const { location } = this.props;
    if (!location) return '';


    switch (firstLevelPath) {
      case '/builder':
        return 'app';
      default:
        return 'classic';
    }
  };

  render() {
    const { children, user, location } = this.props;
    const firstLevelPath = location.pathname.split("/")[1];

    if (user.login == true || user.login == false) {
      const appType = firstLevelPath == 'templates' ? 'app' : '';
      return (
        <main className="main" app-type={appType}>
          {children}
          <Modal />
        </main>
      );
    }

    return <ContentLoader type={firstLevelPath} />
  }
}

App.propTypes = {
  children: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  onUserConnectionChecked: userActions.userConnectionChecked,
  onUserCheckConnection: userActions.checkUserConnection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(App));
