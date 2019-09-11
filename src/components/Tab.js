import React, {Component} from 'react';
import { observable, decorate  } from 'mobx';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tab extends Component {
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
      <div style={{color: "yellow"}}>
        
      </div>
    );
  }
}

// Define received props types for validation.
Tab.propTypes = {
};

decorate(Tab, {
  pageState: observable
});

export default Tab;