import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons";

export default function Marketplace(props) {
  return (
    <div className="nav-cat-list">
      <FontAwesomeIcon
        className="hed-ico"
        icon={faStore}
        size="2xl"
        style={props.headerline == 4 ? { color: "#0866FF" } : {color: "#808080"}}
      />
    </div>
  );
}
