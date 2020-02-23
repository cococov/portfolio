import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  NotFoundPage Class
*/
class Profile extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
    };
  }

  render() {
    return (
      <h1>Profile</h1>
    );
  }
}

export default Profile;
