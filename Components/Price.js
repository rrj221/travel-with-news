import React, {Component} from 'react';


export default class IndexPage extends Component {
  render() {
    return (
      <div id='IndexPage'>
        Price
        {this.props.price}
      </div>
    )
  }
}