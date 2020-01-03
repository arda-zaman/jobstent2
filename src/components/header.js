import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userLogout } from '../actions/user';
import { UpperCase } from '../helpers';

class Header extends React.Component {
  renderHeaderByUrl = () => {
    const { location, user } = this.props;
    let header = null;

    switch (true) {
      case location.pathname.indexOf('/builder') > -1:
        header = (
          <div className="app-header">
            <div className="fluid-container">
              <div className="left-area">
                <Link to="/">
                  <img src={require('../assets/images/logo.png')} alt="" />
                </Link>
              </div>
              <div className="right-area">
                {this.renderMainMenu()}
              </div>
            </div>
          </div>
        );
        return header;
      case location.pathname.indexOf('/templates') > -1:
        header = null;
        return header;
      default:
        header = (
          <div className="classic">
            <div className="top-bar">
              <div className="container">
                <div className="flex j-space-between h100">
                  <div className="left-area h100">
                    {this.renderTopMenu('left')}
                  </div>
                  <div className="right-area h100">
                    <nav className="h100">
                      {this.renderTopMenu('right')}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
            <div className="middle-bar">
              <div className="container">
                <div className="flex j-space-between a-center">
                  <div className="left-area">
                    <Link to="/">
                      <img src={require("../assets/images/logo.png")} alt="" />
                    </Link>
                  </div>

                  <div className="right-area">
                    <nav>
                      {this.renderMainMenu()}
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    }

    return header;
  }

  renderMainMenu = () => {
    return (
      <ul className="main-menu flex nw f-center">
        <li className="active">
          <Link to="/resume-templates">Resume Templates</Link>
        </li>
        <li className="">
          <Link to="/builder">Create Resume</Link>
        </li>
        <li className="">
          <Link to="/cover-letter">Create Cover Letter</Link>
        </li>
        <li className="">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    )
  };

  renderTopMenu = (type) => {
    const { user } = this.props;

    if (type === 'right') {
      return (
        <ul>
          {user.login == true && (
            <React.Fragment>
              <li className="notification">
                <span className="bell">
                  <span className="icon">
                    <i className="far fa-bell"></i>
                    <span className="number">4</span>
                  </span>
                </span>
              </li>
              <li className="profile" onClick={this.topMenuClicked}>
                <span className="profile-container">
                  <span className="profile-image">
                    <img src={require('../assets/images/arda.jpeg')} alt="" />
                  </span>
                  <span className="profile-name">
                    <strong className="fs-5">{UpperCase(user.userCredentials.displayName)}</strong>
                    <i className="fas fa-chevron-down"></i>
                  </span>
                </span>

                <ul className="opened-list">
                  <li><Link to="/profile">Profile</Link></li>
                  <li><Link to="/settings">Settings</Link></li>
                  <li onClick={this.props.onUserLogout.bind(this)}><a>Exit</a></li>
                </ul>
              </li>
            </React.Fragment>
          )}

          {user.login == false && (
            <React.Fragment>
              <li className="list-item">
                <Link to="/login">
                  <i className="material-icons">person</i>
                  <span>Sign In</span>
                </Link>
              </li>

              <li className="list-item">
                <Link to="/register">
                  <i className="material-icons">person_add</i>
                  <span>Sign Up</span>
                </Link>
              </li>
            </React.Fragment>
          )}
        </ul>
      )
    } else if (type === 'left') {
      return (
        <ul>
          <li><a target="_blank" href="https://linkedin.com"><i className="fab fa-linkedin-in" /></a></li>
          <li><a target="_blank" href="https://facebook.com"><i className="fab fa-facebook-f" /></a></li>
          <li><a target="_blank" href="https://twitter.com"><i className="fab fa-twitter" /></a></li>
          <li><a target="_blank" href="https://github.com"><i className="fab fa-github" /></a></li>
          <li><a target="_blank" href="https://pinterest.com"><i className="fab fa-pinterest" /></a></li>
        </ul>
      )
    }
  };

  render() {
    return (
      <header>
        {this.renderHeaderByUrl()}
      </header>
    )
  }

  topMenuClicked = (e) => {
    const li = e.target.closest('li');
    if (li.className.indexOf('active') > -1) {
      li.classList.remove('active');
    } else {
      li.classList.add('active');
    }
  };
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = {
  onUserLogout: userLogout
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));