import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";

export default function HomeFront(props) {
  return (
    <div className="nav-cat-list">
      <FontAwesomeIcon
        className="hed-ico"
        icon={faHouse}
        size="2xl"
        style={props.headerline == 1 ? { color: "#0866FF" } : {color: "#808080"}}
      />
    </div>
  );
}
