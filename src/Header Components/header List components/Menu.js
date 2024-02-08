import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { statuschange } from "../../Redux/Slice";


export default function Menu() {

  const dispatch = useDispatch()
  return (
    <div className="hlc-border h1">
      <div className="hlc-fa-as" onClick={()=>dispatch(statuschange())}>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size="2xl"
          style={{ color: "#000" }}
        />
        <span>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size="2xl"
            style={{ color: "#000", padding: "0 1px" }}
          />
        </span>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          size="2xl"
          style={{ color: "#000" }}
        />
      </div>
        <div className="hlc-fa-as1">
        <FontAwesomeIcon className="fap" icon={faPlus} style={{ color: "#000" }} onClick={()=>dispatch(statuschange())}/>
        </div>
      <div className="header-hover1">
        <p>Menu</p>
      </div>
    </div>
  );
}
