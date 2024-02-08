import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import ffb from "../../Img/fface.png"
import { faMagnifyingGlass, faBars } from "@fortawesome/free-solid-svg-icons";

export default function Fbearch() {
  return (
    <>
      <div className="div-fb df-jc">
        <div>
        <img className="facebook ffb" src={ffb} alt="facebook" width={115} height={23}/>
        </div>
        <div className="df-pdd">
        <span className="facebook hed-top1 ">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            className="iicon"
            style={{ color: "black" }}
          />
        </span>
        <FontAwesomeIcon icon={faBars} size="xl" className="facebook iicon" style={{ color: "black" }} />
        </div>
      </div>
      <div className="fb-search">
        <FontAwesomeIcon
          className="fb-icon"
          icon={faFacebook}
          size="2xl"
          style={{ color: "#0866FF" }}
        />
        <span className="search-icon">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size="lg"
            style={{ color: "#727374" }}
          />
        </span>
        <FontAwesomeIcon icon={faBars} size="xl" className="faplus" />
        <input
          type="text"
          placeholder="Search FaceBook"
          className="fb-head-search"
        />
      </div>
    </>
  );
}
