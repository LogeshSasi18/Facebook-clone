import './App.css';
import Header from './Header';
import Home from './Home'; 
import { useEffect, useRef, useState } from 'react';
import { Undermain } from './Router/Undermain';
import { Route, Routes } from 'react-router-dom';
import { Popupmenu } from './Header Components/Popupmenu';
import { useDispatch, useSelector } from 'react-redux';
import { bodystatus, bodystatus2 } from './Redux/Slice';
import Popupnotify from './Header Components/Popupnotify';

function App({}) {

  const notifystatus = useSelector((state)=>state.status.value2)
  const popstatus = useSelector((state)=>state.status.value)
  const dispatch = useDispatch()

  const bodyRef = useRef(null)
  useEffect (()=>{
      let handleclose = (e)=>{
        if(!bodyRef.current.contains(e.target)){
          dispatch(bodystatus(false))
          dispatch(bodystatus2(false))
        }
      }
      document.addEventListener("mousedown", handleclose)
  },[])  
  return (
    <> 
    <div>
      <div className='header-fixed'>
      <Header />
      </div>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='Friends' element={<Undermain />} />
          <Route path='video' element={<Undermain />} />
          <Route path='marketplace' element={<Undermain />} />
          <Route path='group' element={<Undermain />} />
          {/* <Route path='notification' element={<Popupnotify />} /> */}
      </Routes>
      {/* <Home /> */}
    </div>
    <div ref={bodyRef}>
      {popstatus && <Popupmenu />}
      {notifystatus && <Popupnotify />}
    </div>
    </>
  );
}

export default App;
