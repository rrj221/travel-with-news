import React, {Component} from 'react';


export default class IndexPage extends Component {
  render() {
  	const { prices } = this.state;
    return (
      <div id='IndexPage'>
        Prices
		<ul className='list-group-item'>
		  {
			prices.map((agent) =>
			  <Price
				agentName={agent.agentName}
				price={agent.price}
				image={agent.image}
				link={agent.link}
			  />
			)
		  }
		</ul>

      </div>
    )
  }
}