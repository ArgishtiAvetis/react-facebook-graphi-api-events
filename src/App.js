import React, { Component } from 'react';
import './App.css';

const API ='access_token=1311179578951111|S1M2skQbrQPml1dhgufNbw2XCfw'
var events = [];
//var eventsPhoto = [];

var pagesArray = [
  'colorsworldwideinc',
  'omgdessertgoals'
];

class App extends Component {

  constructor() {
    super();

    this.state = {
      events: events,
      //eventsPhoto: eventsPhoto
    }
  }

  getEvents(pages) {
    for (let n = 0, l = pages.length; n < l; n++) {
      let finalURL = `https://graph.facebook.com/${pages[n]}/events?${API}`;
      fetch(finalURL)
      .then((res) => res.json())
      .then((data) => {
        //alert(data.data[2].description);
        for(let i = 0; i < data.data.length; i++) {
            events.push(data.data[i]);

        }

        this.setState({
          events: events
        })
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

  componentDidMount() {
    this.getEvents(pagesArray);

  }

  render() {

    return (
      <div className="container">
        <h1>FACEBOOK EVENTS</h1>
        {this.state.events.map((events, idx) =>
          <div key={idx} className="well">
            <h2>{events.name}</h2>
            <span><b>Location: </b>{(events.place.location != null) ? events.place.location.street : ''}, {(events.place.location != null) ? events.place.location.city : ''}</span>
            <br />
            <span><b>Start time: </b>{events.start_time}</span>
            <img src={events.photo} alt={events.name} />
            <p>
              {events.description}
            </p>
            <hr />
          </div>
        )}
      </div>
    );
  }
}

export default App;
