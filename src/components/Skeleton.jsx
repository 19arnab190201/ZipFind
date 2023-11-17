// Skeleton.js
import React from "react";
import "./Skeleton.css";
import pin from "../assets/pin.svg";

const SidebarSkeleton = () => {
  return (
    <div className='sidebar-skeleton'>
      <div
        className='logo'
        style={{
          padding: "20px",
          paddingBottom: "0",
        }}>
        <img src={pin} alt='' />
        <h3>
          <span>Zip</span>Find
        </h3>
      </div>
      <div className='skeleton-item sidebar-card'></div>
      <div className='skeleton-item sidebar-title'></div>
      <div className='skeleton-item sidebar-place'></div>
      <div className='skeleton-item sidebar-place'></div>
      <div className='skeleton-item sidebar-place'></div>
      <div className='skeleton-item sidebar-place'></div>
    </div>
  );
};

const MainContentSkeleton = () => {
  return (
    <div className='main-content-skeleton'>
      <div className='skeleton-item skeleton-input'></div>
      <div className='skeleton-item skeleton-map'>
        <div className='map-skeleton-component'>
          <svg
            className='animated-svg'
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='#000'>
            <path
              d='M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4m7-4v16m8-12v16'
              stroke-width='2'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
          <div className='container'>
            <div className='dot rotateX'></div>
            <div className='pulse rotateX'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skeleton = () => {
  return (
    <div className='loading-container'>
      <SidebarSkeleton />
      <MainContentSkeleton />
    </div>
  );
};

export default Skeleton;
