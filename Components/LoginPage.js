import React, {Component} from 'react';


export default class LoginPage extends Component {
  constructor(props, context) {

    super(props, context);

    // set initial state
    this.state = {
     // add modal maybe?
    };
  }
    render() {
  const { loggedIn, UserInfo, location } = this.props;
    return (
      <div id='LoginPage'>
        LoginPage
      </div>
    )
  }
}


