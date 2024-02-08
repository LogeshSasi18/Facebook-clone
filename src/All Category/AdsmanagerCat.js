import React from 'react'
import ads from "../Img/adsmanager.png"

export default function AdsManagerCat (){
  return (
    <div className='df cat-border'>
      <img className='pad-space' src={ads} alt='image' width={35} height="auto"/>
      <h4 className='fs-cat'>AdsManager</h4>
    </div>
  )
}
