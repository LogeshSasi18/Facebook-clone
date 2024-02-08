import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsis, faMagnifyingGlass,faPlus } from "@fortawesome/free-solid-svg-icons";
import mgsData from "./Data/MessageData"

export default function Mgscontact({ sendMessage }) {


  const messageStr = mgsData.map((val,index)=>{
    return(
    <div className="df m-modify" key={index} onClick={()=> handlemsg(val)}>
      <img className="chat-img" src={val.Avatar} alt={val.Name} width={30} height={30} />
      <h4 className="chat-h4">{val.Name}</h4>
    </div>
    )
  })
  const handlemsg = (val)=>{
    sendMessage(val);
  }

  return (
    <div className="container-cpage">
      <div className="df">
        <div className="mgs-1">
          <h4 className="mgs-h4">Contacts</h4>
        </div>
        <div className="mgs-2">
          <FontAwesomeIcon
          className="fn-pad"
            icon={faMagnifyingGlass}
            style={{ color: "gray" }}
          />
          <FontAwesomeIcon icon={faEllipsis} className="more-opt" />
        </div>
      </div>
      <div className="message-grid">
        {messageStr}
      </div>
        <div className="bb-tm bb-tm-tt mgs-h4">Group conversations</div>
        <div className="df m-modify">
        <img className="chat-img" src="https://www.imageshine.in/uploads/gallery/HD-Whatsapp-Friends-DP.png" alt="image" width={32} height="auto" />
        <h4 className="chat-h4">12 - B boys 2016-2019</h4>
      </div>
      <div className="df m-modify">
        <FontAwesomeIcon className="faplus-icon" icon={faPlus} style={{color: "#696969",}} />
        <h4 className="chat-h4">Create New Group</h4>
      </div>
    </div>
  );
}
