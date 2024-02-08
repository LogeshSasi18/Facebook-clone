import React from 'react'
import "../CSS/Notify.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis } from '@fortawesome/free-solid-svg-icons'
import Notifydata from '../Data/Notifydata'

export default function Popupnotify() {

    const Notifylist = Notifydata.map((val)=>{
        return(<>
        <div className='df notify-data'>    
            <img className='pn-img' src={val.Avatar} alt={val.Name} width={45} height={45}/>
            <p className='pn-p1'>{val.Name}<p className='pn-p2'>{val.content}</p></p>
            <p className="pn-dot"></p>
        </div>
        </>)
    }) 
  return (
    <div className='pn-container'>
        <div className='pn-grid'>
            <div className='df-jc'>
                <h1 className='pn-h1'>Notifications</h1>
                <FontAwesomeIcon className="faEllipsis-top" icon={faEllipsis} />
            </div>
            <div className='df second-pn'>
                <h3 className='pn-h3'>All</h3>
                <h3 className='pn-fs'>Unread</h3>
            </div>
            <div className=''>
                {Notifylist}
            </div>
        </div>
    </div>
  )
}
