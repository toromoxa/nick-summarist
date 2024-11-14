import React from 'react';
import { CiBookmark } from 'react-icons/ci';
import { HiOutlineSearch } from 'react-icons/hi';
import { PiHouseLine } from "react-icons/pi";
import { RiBallPenLine } from 'react-icons/ri';


const SideBar = () => {
  return (
    <div>
      <div className='sidebar__overlay opacity-0 pointer-events-none fixed top-0 left-0 w-full h-full bg-[#3a4649] z-10 transition-opacity ease-in-out duration-500'></div>
      <div className="sidebar hidden lg:block bg-[#f7faf9] w-[200px] min-w-[200px] fixed top-0 left-0 h-[100vh] z-[1000] transition-all ease-in-out duration-300">
        <div className="sidebar__logo flex items-center justify-center h-[60px] pt-4 max-w-40 mx-auto">
          <img src="logo.png" alt="" className='w-full h-10' />
        </div>
        <div className="sidebar__wrapper flex flex-col justify-between h-[calc(100vh - 60px)] pb-5 overflow-y-auto">
          <div className="sidebar__top flex mt-10">
            <a href="/ForYou" className="sidebar__link--wrapper flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer">
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper">
                <PiHouseLine className='w-6 h-6' />
              </div>
              <div className="sidebar__link--text">For you</div>
            </a>
            <a href="/Library" className="sidebar__link--wrapper flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer">
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper">
                <CiBookmark  className='w-6 h-6' />
              </div>
              <div className="sidebar__link--text">My Library</div>
            </a>
            <div className="sidebar__link--wrapper cursor-not-allowed flex items-center h-[56px] text-[#032b41] mb-2">
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper">
                <RiBallPenLine className='w-6 h-6' />
              </div>
              <div className="sidebar__link--text">Highlights</div>
            </div>
            <div className="sidebar__link--wrapper cursor-not-allowed flex items-center h-[56px] text-[#032b41] mb-2">
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper">
                <HiOutlineSearch className='w-6 h-6' />
              </div>
              <div className="sidebar__link--text">Search</div>
            </div>
          </div>
          <div className="sidebar__bottom"></div>
        </div>
      </div>
    </div>
  )
}

export default SideBar