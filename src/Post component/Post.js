import React from "react";
import "../CSS/All.css"
import Postdata from "../Data/Postdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faXmark,faThumbsUp, faHeart, faComment, faShare } from "@fortawesome/free-solid-svg-icons";

export default function Post() {

  const postlist = Postdata.map((data, index)=>{
    return(
    <div className="create-post">
      <div className="df-jc header-post" key={index}>
        <span className="df">
          <img
            className="ph-img"
            src={data.img}
            alt={data.namedata}
            width={40}
            height={40}
          />
          <div>
            <h3 className="ph-h3">{data.namedata}</h3>
            <p className="ph-p">{data.postupdate}</p>
          </div>
        </span>
        <span className="df fa-ph">
            <FontAwesomeIcon className="fa-posticon" icon={faEllipsis} style={{color: "#65676B",}} />
            <FontAwesomeIcon className="fa-posticon" icon={faXmark} size="lg" style={{color: "#65676B",}} />
        </span>
      </div>
      <p className="ppc">{data.postcontent}</p>
      <p className="text-a-ph ppc">{data.posttag}</p>
      <div className="body-post">
        <img className="hw"
          src={data.mainimg}
          alt={data.namedata}
          width="100%"
        />
      </div>
      <div className="footer-post">
        <div className="df-jc f-first">
          <div className="l-h-icon df">
            <FontAwesomeIcon className="l-h-icon-a" icon={faThumbsUp} style={{color: "#fff",}} />
            <FontAwesomeIcon className="l-h-icon-b" icon={faHeart} style={{color: "#fff",}} />
            <p className="lsc-p">{data.likescount}</p>
          </div>
          <div className="c-s-icon df-jc">
            <p className="count-cm-sh">{data.comment}</p>
            <FontAwesomeIcon className="cmd" icon={faComment} style={{color: "gray",}} />
            <p className="count-cm-sh">{data.share}</p>
            <FontAwesomeIcon className="cmd" icon={faShare} style={{color: "gray",}} />
          </div>
        </div>
        <div className="lsc-section df-jc">
          <div className="foot-lsc df">
            <FontAwesomeIcon className="ff-icon" icon={faThumbsUp} style={{color: "#65676B",}} />
            <h3 className="ff-lc-h3">Like</h3>
          </div>
          <div className="foot-lsc df">
            <FontAwesomeIcon className="ff-icon" icon={faComment} style={{color: "#65676B",}} />
            <h3 className="ff-lc-h3">Comment</h3>
          </div>
          <div className="foot-lsc df">
            <FontAwesomeIcon className="ff-icon" icon={faShare} style={{color: "#65676B",}} />
            <h3 className="ff-lc-h3">Share</h3>
          </div>
        </div>
      </div>  
    </div>
    )
  })
  return (
    <div className="hp">
      {postlist}
    </div>
  );
}
