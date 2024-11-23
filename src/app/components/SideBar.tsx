"use client";

import { useRouter } from "next/navigation";
import { logout } from "@/lib/firebaseAuth";
import React from "react";
import { CiBookmark } from "react-icons/ci";
import { HiOutlineSearch } from "react-icons/hi";
import { LuHelpCircle, LuLogOut } from "react-icons/lu";
import { PiHouseLine } from "react-icons/pi";
import { RiBallPenLine } from "react-icons/ri";
import { RxGear } from "react-icons/rx";

const SideBar: React.FC = () => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/"); // Redirect to the home page after logout
    } catch (error) {
      console.error("Logout failed:", error);
      alert("An error occurred while logging out. Please try again.");
    }
  };

  return (
    <div>
      <div className="sidebar__overlay opacity-0 pointer-events-none fixed top-0 left-0 w-full h-full bg-[#3a4649] z-10 transition-opacity ease-in-out duration-500"></div>
      <div className="sidebar hidden md:block bg-[#f7faf9] w-[200px] min-w-[200px] fixed top-0 left-0 h-[100vh] z-[1000] transition-all ease-in-out duration-300">
        <div className="sidebar__logo flex items-center justify-center h-[60px] pt-4 max-w-40 mx-auto">
          <img src="logo.png" alt="" className="w-full h-10" />
        </div>
        <div className="sidebar__wrapper flex flex-col justify-between h-[90%] pb-3 overflow-y-auto">
          <div className="sidebar__top flex flex-col mt-10">
            <a
              href="/ForYou"
              className="sidebar__link--wrapper hover:bg-[#f0efef] flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
            >
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4 bg-transparent"></div>
              <div className="sidebar__icon--wrapper mr-2">
                <PiHouseLine className="w-6 h-6" />
              </div>
              <div className="sidebar__link--text">For you</div>
            </a>
            <a
              href="/Library"
              className="sidebar__link--wrapper hover:bg-[#f0efef] flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
            >
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper mr-2">
                <CiBookmark className="w-6 h-6" />
              </div>
              <div className="sidebar__link--text">My Library</div>
            </a>
            <div className="sidebar__link--wrapper hover:bg-[#f0efef] cursor-not-allowed flex items-center h-[56px] text-[#032b41] mb-2">
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper mr-2">
                <RiBallPenLine className="w-6 h-6" />
              </div>
              <div className="sidebar__link--text">Highlights</div>
            </div>
            <div className="sidebar__link--wrapper hover:bg-[#f0efef] cursor-not-allowed flex items-center h-[56px] text-[#032b41] mb-2">
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper mr-2">
                <HiOutlineSearch className="w-6 h-6" />
              </div>
              <div className="sidebar__link--text">Search</div>
            </div>
          </div>
          <div className="sidebar__bottom">
            <a
              href="/ForYou"
              className="sidebar__link--wrapper hover:bg-[#f0efef] flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
            >
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper mr-2">
                <RxGear className="w-6 h-6" />
              </div>
              <div className="sidebar__link--text">Settings</div>
            </a>
            <div className="sidebar__link--wrapper hover:bg-[#f0efef] cursor-not-allowed flex items-center h-[56px] text-[#032b41] mb-2">
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper mr-2">
                <LuHelpCircle className="w-6 h-6" />
              </div>
              <div className="sidebar__link--text">Help & Support</div>
            </div>
            <a
              href="/ForYou"
              className="sidebar__link--wrapper hover:bg-[#f0efef] flex items-center h-[56px] text-[#032b41] mb-2 cursor-pointer"
            >
              <div className="sidebar__link--line active:bg-[#2bd97c] w-[6px] h-full mr-4"></div>
              <div className="sidebar__icon--wrapper mr-2">
                <LuLogOut className="w-6 h-6" />
              </div>
              <button onClick={handleLogout} className="sidebar__link--text">
                Log Out
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
