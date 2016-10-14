import React, {Component} from 'react';
import Flight from './Flight';


export default class FlightPage extends Component {
	constructor(props, context) {

		super(props, context);

		// set initial state
		this.state = {
			flights: []
		};
	}

  render() {
  	const { flights } = this.state;
    return (
      <div id='MasterPage'>
        Flights
        	<ul className='list-group-item'>
						{
							flights.map((article) =>
								<Flight
									outboundInfo={this.state.flight.outboundInfo}

									inboundInfo={this.state.flight.inboundInfo}

									ibOriginStation={this.state.flight.inboundInfo.originStation}
									ibDestinationstation={this.state.flight.inboundInfo.destinationStation}
									ibDeparture={this.state.flight.inboundInfo.departure}
									ibArrival={this.state.flight.inboundInfo.arrival}
									ibStopsQty={this.state.flight.inboundInfo.stopsQty}
									ibDuration={this.state.flight.inboundInfo.duration}
									ibJourneyMode={this.state.flight.inboundInfo.journeyMode}
									ibCarriers={this.state.flight.inboundInfo.carrierNames}

									priceInfo={this.state.flight.priceInfo}
								/>
							)
						}
					</ul>
      </div>
    )
  }
}


