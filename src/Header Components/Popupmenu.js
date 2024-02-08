import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faFlag,faBullhorn,faPeopleGroup,faSquarePlus,faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faMagnifyingGlass, faPenToSquare, faStar,faBookOpen } from "@fortawesome/free-solid-svg-icons";
import Social from "../Data/Social"
import Entertainment from "../Data/Entertinement";


export const Popupmenu = () => {
    const Sociallist = Social.map((val, index)=>{
        return(
          <div className="df pad-wid-soc" key={index}>
          <div className="pad-img-soc">
            <img src={val.img} alt={val.Name} width={36} height={36}/>
          </div>
          <div className="soc-cont">
            <h3 className="social-h3">{val.Name}</h3>
            <p className="social-p">{val.content}</p>
          </div>
          </div>
        ) 
      })
      const Entertainmentlist = Entertainment.map((val, index)=>{
        return(
          <div className="df pad-wid-soc" key={index}>
          <div className="pad-img-soc">
            <img src={val.img} alt={val.Name} width={36} height={36}/>
          </div>
          <div className="soc-cont">
            <h3 className="social-h3">{val.Name}</h3>
            <p className="social-p">{val.content}</p>
          </div>
          </div>
        ) 
      })
  return (
    <div className="menu-container">
        <div className="menu-grid">
          <h2 className="m-h2">Menu</h2>
          <div className="multi-menu df">
            <div className="first-menu">
              <span className="menu-search-icon">
              <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" style={{color: "#727374",}} />
              </span>
              <input className="menu-search" type="text" placeholder="Search menu" />
              <h2 className="social-list">Social</h2>
              <div className="soc-border">{Sociallist}</div>
              <h2 className="social-list">Entertainment</h2>
              <div className="soc-border">{Entertainmentlist}</div>
            </div>
            <div className="second-menu">
              <h2 className="menu-create">Create</h2>
              <div className="second-menu-box df">
              <FontAwesomeIcon className="smb-fa" icon={faPenToSquare} style={{color: "#141415",}} />
              <p className="smb-p">Post</p>
              </div>
              <div className="second-menu-box df">
              <FontAwesomeIcon className="smb-fa" icon={faBookOpen} style={{color: "#19191a",}} />
              <p className="smb-p">Story</p>
              </div>
              <div className="second-menu-box df">
              <FontAwesomeIcon className="smb-fa" icon={faYoutube} style={{color: "#0c0d0d",}} />
              <p className="smb-p">Reels</p>
              </div>
              <div className="second-menu-box df">
              <FontAwesomeIcon className="smb-fa" icon={faStar} style={{color: "#0d0d0d",}} />
              <p className="smb-p">Life event</p>
              </div>
              <p className="ss-btm-2"></p>
              <div className="second-menu-box df">
              <FontAwesomeIcon className="smb-fa" icon={faFlag} style={{color: "#0c0d0d",}} />
              <p className="smb-p">Page</p>
              </div>
              <div className="second-menu-box df">
              <FontAwesomeIcon className="smb-fa" icon={faBullhorn} style={{color: "#161718",}} />
              <p className="smb-p">Ad</p>
              </div>
              <div className="second-menu-box df">
              <FontAwesomeIcon className="smb-fa" icon={faPeopleGroup} style={{color: "#070808",}} />
              <p className="smb-p">Group</p>
              </div>
              <div className="second-menu-box df">
              <FontAwesomeIcon className="smb-fa" icon={faSquarePlus} style={{color: "#070808",}} />
              <p className="smb-p">Event</p>
              </div>
              <div className="second-menu-box df">
              <FontAwesomeIcon className="smb-fa" icon={faBagShopping} style={{color: "#19191a",}} />
              <p className="smb-p">Marketplace Listing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}
