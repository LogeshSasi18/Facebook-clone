import React, { useState } from "react";
import "./CSS/Header.css";
import Friends from "./Header Components/Nav category/Friends";
import Video from "./Header Components/Nav category/Video";
import Marketplace from "./Header Components/Nav category/Marketplace";
import Groups from "./Header Components/Nav category/Groups";
import Fbearch from "./Header Components/Fbsearch/Fbearch";
import Menu from "./Header Components/header List components/Menu";
import Message from "./Header Components/header List components/Message";
import Notifications from "./Header Components/header List components/Notifications";
import Account from "./Header Components/header List components/Account";
import HomeFront from "./Header Components/Nav category/HomeFront";
import { Link } from "react-router-dom";


export default function Header() {
  const [headerline, setHeaderline] = useState(1)

  const setHeader = (val)=>{
    const listitems = val + 1
    setHeaderline(listitems)
  }
  return (
    <>
      <div className="container btm-line">
        <div className="grid">
          <div className="grid-box fb-wid1">
            <Fbearch />
          </div>
          <div className="grid-box fb-wid2">
            <Link className="btm-none" to="/" style={headerline == 1 ? {borderBottom: "3px solid", color: "#0866FF"} : null} onClick={()=>setHeader(0)}><HomeFront headerline={headerline}/></Link>
            <Link to="friends" style={headerline == 2 ? {borderBottom: "3px solid", color: "#0866FF"} :null} onClick={()=>setHeader(1)}><Friends headerline={headerline}/></Link>
            <Link to="video" style={headerline == 3 ? {borderBottom: "3px solid", color: "#0866FF"} : null} onClick={()=>setHeader(2)}><Video headerline={headerline}/></Link>
            <Link to="marketplace" style={headerline == 4 ? {borderBottom: "3px solid", color: "#0866FF"} : null} onClick={()=>setHeader(3)}><Marketplace headerline={headerline}/></Link>
            <Link to="group" style={headerline == 5 ? {borderBottom: "3px solid", color: "#0866FF"} : null} onClick={()=>setHeader(4)}><Groups headerline={headerline}/></Link>
          </div>
          <div className="grid-box fb-wid3">
            <Menu />
            <Message />
            <Notifications /> 
            <Account />
          </div>
        </div>
      </div>
    </>
  );
}
