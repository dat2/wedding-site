import React from 'react'
import './event.less'

const EventPage = () => (
  <div id="event">
    <div><span className="event-title">Venue:</span> The Brighton Convention & Events Centre</div>
    <div><span className="event-title">Address:</span> 2155 McNicoll Avenue, Toronto, ON M1V 5P1, Canada (Midland and McNicoll)</div>
    <div><span className="event-title">Breakfast:</span> 9am</div>
    <div><span className="event-title">Lunch:</span> Noon</div>
    <iframe
      width="100%"
      height="450"
      frameBorder="0"
      style={{ border: '0' }}
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3TuAfPvT1IkRR2qwJvcxUpQ&key=AIzaSyByKiSswQhQtBA-amrIC7Oqvv2vJuUeMy4"
      allowFullScreen
    />
  </div>
)

export default EventPage
