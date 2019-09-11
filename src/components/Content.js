import React, {Component} from 'react';
import { observable, decorate  } from 'mobx';
import 'bootstrap/dist/css/bootstrap.min.css';

class Content extends Component {
  pageState = {};

  /**
   * Class constructor.
   */
  constructor (props) {
    super(props);

    // Set the initial component state.
    this.pageState = {
    };
  }

  render () {
    return (
      <div style={{color: "red"}}>
        
      </div>
    );
  }
}

// Define received props types for validation.
Content.propTypes = {
};

decorate(Content, {
  pageState: observable
});

export default Content;