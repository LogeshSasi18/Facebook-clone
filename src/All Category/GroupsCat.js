import React from 'react'
import groups from "../Img/groups.png"

export default function GroupsCat () {
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={groups} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>Groups</h4>
    </div>
  )
}
