import React from 'react'
import memories from "../Img/memories.png"
 
export default function MenoriesCat() {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={memories} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>Memories</h4>
    </div>
  )
}
