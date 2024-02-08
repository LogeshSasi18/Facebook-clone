import React from 'react'
import saved from "../Img/saved.png"

export default function SavedCat() {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={saved} alt='image' width={36} height="36px"/>
      <h4 className='fs-cat'>Saved</h4>
    </div>
  )
}