import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Groups(props) {
  return (
    <div className="nav-cat-list navcatlist">
      <FontAwesomeIcon
        className="hed-ico hed-menu-hid"
        icon={faPeopleGroup}
        size="2xl"
        style={props.headerline == 5 ? { color: "#0866FF" } : {color: "#808080"}}
      />
      <FontAwesomeIcon icon={faBars} size="2xl" className="hed-ico hed-menu-hid1" style={props.headerline == 5 ? { color: "#0866FF" } : {color: "#808080"}}/>
    </div>
  );
}

