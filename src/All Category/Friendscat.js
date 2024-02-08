import React from 'react'
import "../CSS/HomeCategory.css"
import down from "../Img/friends.png"

export default function FriendsCat() {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={down} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>Friends</h4>
    </div>
  )
}
