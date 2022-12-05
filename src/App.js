import logo from './img/darak-logo.png';
import index1 from './img/index_calendar.png';
import index2 from './img/index_gallery.png';
import index3 from './img/index_study.png';
import index4 from './img/index_member.png';
import index5 from './img/index_staff.png';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import Home from './screens/Home'
import Calendar from './screens/Calendar';
import Gallery from './screens/Gallery';
import Study from './screens/Study';
import Member from './screens/Member';
import Staff from './screens/Staff';
import { useState } from 'react';

function App() {
  const activeStyle = {
    color: 'black',
    fontWeight: 700,
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Link to = "/"><img src={logo} className="darak-logo" alt="logo"/></Link>
        <nav className="index">
          <div className="calendar-wrap">
            <NavLink to = "/Calendar" style={({isActive}) => (isActive ? activeStyle: {color: 'black'})}>
              <div className="calendar-image">
                <img src={index1} alt="calendar" width={160}/>
              </div>
              <div className="calendar-text">
                <p className='clendar'>캘린더</p>
              </div>              
            </NavLink>
          </div>
          <div className="gallery-wrap">
            <NavLink to = "/Gallery" style={({isActive}) => (isActive ? activeStyle: {color: 'black'})}>
              <div className="gallery-image">
                <img src={index2} alt="gallery" width={160}/>
              </div>
              <div className="gallery-text">
                <p>사진첩</p>
              </div>              
            </NavLink>
          </div>
          <div className="study-wrap">
            <NavLink to = "/Study" style={({isActive}) => (isActive ? activeStyle: {color: 'black'})}>
              <div className="study-image">
                <img src={index3} alt="study" width={160}/>
               </div>
              <div className="study-text">
                <p>스터디</p>
              </div>
            </NavLink>
          </div>
          <div className="member-wrap">
            <NavLink to = "/Member" style={({isActive}) => (isActive ? activeStyle: {color: 'black'})}>
              <div className="member-image">
                <img src={index4} alt="member" width={160}/>
              </div>
              <div className="member-text">
                <p>다락부원</p>                
              </div>
            </NavLink>
          </div>
          <div className="staff-wrap">
            <NavLink to = "/Staff" style={({isActive}) => (isActive ? activeStyle: {color: 'black'})}>
              <div className="staff-image">
                <img src={index5} alt="staff" width={160}/>
              </div>
              <div className="staff-text">
                <p>임원공간</p>
              </div>
            </NavLink>
          </div>
        </nav>
      </header>
      <div>
        <div className="board-wrap">
          <div className="board">
            <Routes>
              <Route path = "/" element = { <Home />} />
              <Route path = "/Calendar" element = { <Calendar />} />
              <Route path = "/Gallery" element = { <Gallery />} />
              <Route path = "/Study" element = { <Study />} />
              <Route path = "/Member" element = { <Member />} />
              <Route path = "/Staff" element = { <Staff />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  </Router>
  );
}

export default App;
