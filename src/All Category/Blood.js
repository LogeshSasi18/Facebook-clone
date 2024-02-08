import React from 'react'
import blood from "../Img/blood-removebg-preview.png"

export default function Blood() {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={blood} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>Blood Donations</h4>
    </div>
  )
}
