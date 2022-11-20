import React from 'react'
import Avatar from "@mui/material/Avatar";
import "./Sidebar.css"

function Sidebar() {

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
        <p>{topic}</p>
  </div>
  )

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Osvaldo x</h2>
        <h4>osvaldox@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who views you</p>
          <p className="sidebar__statNum">2,547</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNum">2,444</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem('reactjs')}
        {recentItem('programming')}
        {recentItem('software engineering')} 
        {recentItem('design')}
        {recentItem('developer')} 
      </div>
    </div>
  );
}

      export default Sidebar