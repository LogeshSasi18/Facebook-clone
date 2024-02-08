import React from 'react'
import feeds from "../Img/feeds.png";

export default function FeedsCat() {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={feeds} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>Feeds</h4>
    </div>
  )
}
