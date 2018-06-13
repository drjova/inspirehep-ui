import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import RouteOrRedirect from '../common/components/RouteOrRedirect';
import LoginPage from './containers/LoginPage';
import ProfilePage from './containers/ProfilePage';

class User extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <div className="w-100">
        <RouteOrRedirect
          exact
          path="/user/login"
          condition={!loggedIn}
          component={LoginPage}
          redirectTo="/"
        />
        <RouteOrRedirect
          exact
          path="/user/profile"
          condition={loggedIn}
          component={ProfilePage}
        />
      </div>
    );
  }
}

User.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
};

const stateToProps = state => ({
  loggedIn: state.user.get('loggedIn'),
});

export default connect(stateToProps)(User);
