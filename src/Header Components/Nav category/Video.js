import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

export default function Video(props) {
  return (
    <div className="nav-cat-list">
      <FontAwesomeIcon
      className="hed-ico"
        icon={faPlay}
        size="2xl"
        style={props.headerline == 3 ? { color: "#0866FF" } : {color: "#808080"}}
      />
    </div>
  );
}
