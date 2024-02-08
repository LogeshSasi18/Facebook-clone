import React, { useState } from 'react'
import "./CSS/All.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faVideo, faMinus, faXmark, faChevronDown, faCirclePlus, faFileImage, faNoteSticky, faFaceSmile, faThumbsUp  } from '@fortawesome/free-solid-svg-icons';
import Mgscontact from './Mgscontect'
import HomeCategory from './HomeCategory'
import HomeMain from './HomeMain';

export default function Home() {

    const [received,setReceived] = useState([])
    const [chatbox, setChatbox] = useState()

    const getMessage = (val)=>{
        setReceived(val)
        setChatbox(true)
    }
    const chatClick = (val)=>{
        setChatbox(val)
    }
    
  return (
    <>
    <div className='container2'>
        <div className='grid-home'>
            <div>
                <HomeCategory />
            </div>
            <div className='hm-gri'>
                <HomeMain />
            </div>
            <div className='mgs-container'>
                <Mgscontact sendMessage={getMessage}/>
            </div>
            {chatbox ?
            <div className='chat-box'>
                <div className='chat-nav df'>
                    <div className='df chat-grid1'>
                        <img src={received.Avatar} alt='img' width={30} height="auto" />
                        <h4 className="chat-Name">{received.Name}</h4>
                        <FontAwesomeIcon className='fa-downarrow' icon={faChevronDown} style={{color: "#74C0FC",}} />
                    </div>
                    <div className='df-jc chat-grid2'>
                        <FontAwesomeIcon className='chat-hover' icon={faPhone} style={{color: "#0084FF",}} />
                        <FontAwesomeIcon className='chat-hover' icon={faVideo} style={{color: "#0084FF",}} />
                        <FontAwesomeIcon className='chat-hover' icon={faMinus} style={{color: "#0084FF",}} />
                        <FontAwesomeIcon onClick={()=>chatClick(false)} className='chat-icon chat-hover' icon={faXmark} style={{color: "#0084FF",}} />
                    </div>
                </div>
                <div className='chat-body'>
                    <img className='cb-img' src={received.Avatar} alt='img' width={65} height="auto" />
                    <h4 className="cb-Name">{received.Name}</h4>
                    <p className='ccn'>Facebook</p>
                    <p className='ccn'>You're friends on Facebook</p>
                    <p className='ccn'>Lives in Theni, India</p>
                </div>
                <div className='cb-end df-jc'>
                    <FontAwesomeIcon className='end-cb-icon' icon={faCirclePlus} style={{color: "#0084FF",}} />
                    <FontAwesomeIcon className='end-cb-icon' icon={faFileImage} style={{color: "#0084FF",}} />
                    <FontAwesomeIcon className='end-cb-icon' icon={faNoteSticky} style={{color: "#0084FF",}} />
                    <p className='gif'>GIF</p>
                    <input className='cb-chat-box' type='text' placeholder='Aa'/>
                    <FontAwesomeIcon className='smiley-icon' icon={faFaceSmile} style={{color: "#0084FF",}} />
                    <FontAwesomeIcon className='end-cb-icon' icon={faThumbsUp} style={{color: "#0084FF",}} />
                </div>
            </div>
            : <></>
            }
        </div>
    </div>
    </>
  )
}
