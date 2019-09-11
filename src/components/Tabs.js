import React, {Component} from 'react';
import { observable } from 'mobx';
import { observable, decorate  } from 'mobx';
import 'bootstrap/dist/css/bootstrap.min.css';

class Tabs extends Component {
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
Tabs.propTypes = {
};

decorate(Tabs, {
  pageState: observable
});

export default Tabs;