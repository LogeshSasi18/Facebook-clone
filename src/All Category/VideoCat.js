import React from 'react'
import video from "../Img/videos.png"

export default function VideoCat (){
  return (<>
  <div className='df cat-border'>
    <img className='pad-space' src={video} alt='image' width={35} height="auto"/>
    <h4 className='fs-cat'>Video</h4>
  </div>
  </> )
}
