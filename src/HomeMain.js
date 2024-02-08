import React from 'react'
import story1 from "./Img/story1.png"
import story2 from "./Img/story2.png"
import story3 from "./Img/story5.png"
import story4 from "./Img/story4.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faVideo,faFileImage,faFaceSmile } from '@fortawesome/free-solid-svg-icons'
import Post from './Post component/Post'

export default function HomeMain (){
  return (
    <div className='df main-home-container'>
      <div className='mh-grid'>
        <div className='mh-grid-box df'>
          <img src={story1} alt='' className='s-img' width={146} height= "250px"/>
          <img src={story2} alt='' className='s-img' width={145} height={250}/>
          <img src={story3} alt='' className='s-img' width={145} height={250}/>
          <img src={story4} alt='' className='s-img' width={145} height={250}/>
          <div className='story-arrow1'><FontAwesomeIcon icon={faChevronRight} /></div>
        </div>
        <div className='story-arrow'><FontAwesomeIcon icon={faChevronRight} /></div>
        <div className='mh-grid-box wym'>
          <div className='wym1'>
            <div className='df'>
            <img src="https://scontent.fmaa2-1.fna.fbcdn.net/v/t1.6435-1/118003995_357747018574096_4983236902434559038_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=101&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=TCGhW6Y-kQEAX-7Mab-&_nc_ht=scontent.fmaa2-1.fna&oh=00_AfBCoNdJ2rGSTjaDPcZNdsfdd8GkTAM1vRrGt1kpdWOM1Q&oe=65E7EA9F" alt='' className='img-wym'/>
            <input className='wym-input' type='text' placeholder="What's on your mind, Logesh?" />
            </div>
          </div>
          <div className='df-jc-se wym-icons'>
            <div className='df pad-ct'>
              <FontAwesomeIcon className='fa-wym' icon={faVideo} style={{color: "#c70c0c",}} />
              <p className='p-wym'>Live videos</p>
            </div>
            <div className='df pad-ct'>
            <FontAwesomeIcon className='fa-wym' icon={faFileImage} style={{color: "#0ebe6c",}} />
              <p className='p-wym'>Photo/videos</p>
            </div>
            <div className='df pad-ct'>
            <FontAwesomeIcon className='fa-wym' icon={faFaceSmile} style={{color: "#FFD43B",}} />
              <p className='p-wym'>Feeling/activity</p>
            </div>
          </div>
        </div>
        <div className='mh-grid-box post-container'>
          <Post />
        </div>
      </div>
    </div>
  )
}
