import React from 'react'

const EventPage = () => (
  <div>
    <iframe
      width="100%"
      height="450"
      frameBorder="0"
      style={{ border: '0' }}
      src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ3TuAfPvT1IkRR2qwJvcxUpQ&key=AIzaSyByKiSswQhQtBA-amrIC7Oqvv2vJuUeMy4"
      allowFullScreen
    />
    <div>Venue: The Brighton Convention & Events Centre</div>
    <div>Address: 2155 McNicoll Avenue, Toronto, ON M1V 5P1, Canada</div>
    <div>Breakfast: 9am</div>
    <div>Start Time: shortly after breakfast</div>
    <div>Lunch: Noon</div>
  </div>
)

export default EventPage
