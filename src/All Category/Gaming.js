import React from 'react'
import gamingvideo from "../Img/gam_vid-removebg-preview.png"

export default function Gaming() {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={gamingvideo} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>Gaming Video</h4>
    </div>
  )
}
