import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { nstatus } from "../../Redux/Slice";

export default function Notifications() {
  
  const dispatch = useDispatch() 
  return (<>
    <div className="h3" onClick={()=>dispatch(nstatus())}>
      <div className="hlc-border">
        <FontAwesomeIcon
          className="hlc-fa-as2"  
          icon={faBell}
          size="2xl"
          style={{ color: "#000" }}
        />
      </div>
      <div className="header-hover3">
        <p>Notification</p>
      </div>
    </div>
      <p className="sup-p-hl">7+</p>
  </>
  );
}
