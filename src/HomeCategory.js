import React, { useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp,faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./CSS/All.css"
import "./CSS/HomeCategory.css"
import AccountCat from "./All Category/AccountCat"
import MemoriesCat from "./All Category/MemoriesCat";
import MarketplaceCat from "./All Category/MarketplaceCat";
import FeedsCat from "./All Category/FeedsCat";
import EventsCat from "./All Category/EventsCat";
import VideoCat from "./All Category/VideoCat";
import SavedCat from "./All Category/SavedCat";
import GroupsCat from "./All Category/GroupsCat";
import FriendsCat from "./All Category/Friendscat";
import AdsManagerCat from "./All Category/AdsmanagerCat";
import Blood from "./All Category/Blood";
import Climatescience from "./All Category/Climatescience";
import Facebookpay from "./All Category/Facebookpay";
import Gaming from "./All Category/Gaming";
import Messanger from "./All Category/Messanger";
import Pages from "./All Category/Pages";
import Recent from "./All Category/Recent";
import Shortcut from "./All Category/Shortcut";

export default function HomeCategory() {

  const inputRef =  useRef(null)
  const Ref =  useRef(null)
  const setlist = ()=>{
    inputRef.current.style.display = "block";
    Ref.current.style.display = "none"
  }
  const removelist = ()=>{
    inputRef.current.style.display = "none"
    Ref.current.style.display = "block"
  }
  return (
    <div className="full-container">
      <AccountCat />
      <FriendsCat />
      <EventsCat />
      <MemoriesCat />
      <GroupsCat />
      <SavedCat />
      <VideoCat />
      <MarketplaceCat />
      <FeedsCat />
      <AdsManagerCat />
      <div ref={Ref} onClick={setlist} className='sl-df cat-border'>
        <div className="df">
        <FontAwesomeIcon className='pad-sl pad-space' icon={faChevronDown} />
        <h4 className='fs-cat'>  See more</h4>
        </div>
      </div>
      <div className="db" ref={inputRef}>
      <Blood />
      <Climatescience />
      <Facebookpay />
      <Gaming />
      <Messanger />
      <Pages />
      <Recent />
      <div ref={inputRef} onClick={removelist} className='sl-df cat-border'>
      <FontAwesomeIcon className='pad-sl pad-space' icon={faChevronUp} />
      <h4 className='fs-cat'>  See Less</h4>
      </div>
      </div>
      <div className="bb-tm"></div>
        <h3 className="ff-h3">Your shortcuts</h3>
          <Shortcut />
          <p className="ff-p">Privacy  · Terms  · Advertising  · Ad choices</p>
          <p className="ff-p">Cookies  more Meta © 2024</p>
    </div>
  );
}
