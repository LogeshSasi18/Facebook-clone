import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookMessenger } from "@fortawesome/free-brands-svg-icons";

export default function Message() {
  const [mcount,setMcount] = useState(0)
  const mgsclick = (val)=>{
    setMcount(val)
  }
  return (
    <div className="h2" onClick={()=>mgsclick(1)}>
      <div className="hlc-border">
        <FontAwesomeIcon
          className="hlc-fa-as2"
          icon={faFacebookMessenger}
          size="2xl"
          style={{ color: "#000" }}
        />
      </div>
      <div className="header-hover2">
        <p>Message</p>
        {/* <span {mcount ? {className:""} : null}></span> */}
      </div>
    </div>
  );
}
