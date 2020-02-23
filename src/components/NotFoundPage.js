import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

/*
  NotFoundPage Class
*/
class NotFoundPage extends Component {
  pageState = {};

  constructor(props) {
    super(props);
    this.pageState = {
    };
  }

  render() {
    return (
      <h1>ERROR 404</h1>
    );
  }
}

export default NotFoundPage;
