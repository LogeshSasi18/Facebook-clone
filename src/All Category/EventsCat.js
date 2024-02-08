import React from 'react'
import events from "../Img/events.png"

export default function EventsCat() {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={events} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>Events</h4>
    </div>
  )
}
