import React from 'react'
import recentad from "../Img/recent-removebg-preview.png"

export default function Recent() {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={recentad} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>RecentAd Activity</h4>
    </div>
  )
}
