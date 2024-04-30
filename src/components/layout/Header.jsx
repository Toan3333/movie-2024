import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-main flex justify-between items-center py-6 px-2">
          <div className="header-logo">
            <img src="/logo.png" className="w-36 h-12" alt="Logo" />
          </div>
          <div className="max-w-[455px] w-full relative flex items-center justify-center">
            <input
              type="text"
              className="w-full px-4 h-12 font-medium bg-dryGray rounded text-black text-sm placeholder:text-border"
              placeholder="Search Movie Name from here"
            />
            <div className="absolute right-0 h-12 w-12 rounded flex items-center justify-center bg-subMain text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6">
                <path
                  fillRule="evenodd"
                  d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <ul className="flex items-center gap-14 text-small font-semibold text-white">
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "text-subMain" : "hover:text-subMain text-small"
                }>
                Movie
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us"
                className={({ isActive }) =>
                  isActive ? "text-subMain" : "hover:text-subMain text-small"
                }>
                About Us
              </NavLink>
            </li>

            <li>
              <a href="#" className="hover:text-subMain">
                Contact Us
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-7 h-7">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </a>
            </li>
            <li>
              <a href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7">
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
