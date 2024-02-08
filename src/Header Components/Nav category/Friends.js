import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function Friends(props) {
  return (
    <Link to="Friends">
      <div className="nav-cat-list">
        <FontAwesomeIcon
        className="hed-ico"
          icon={faUserGroup}
          size="2xl"
          style={props.headerline == 2 ? { color: "#0866FF" } : {color: "#808080"}}
        />
      </div>
    </Link>
  );
}
