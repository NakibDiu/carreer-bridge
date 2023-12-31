import React, { useState } from "react";
import logo from "../../assets/assets/Logo/logo.png";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <div className="flex items-center justify-between px-6">
        <img src={logo} alt="logo" />
        {/* mobile */}
        <Bars3Icon
          className="h-8 w-8 text-cbSecondary cursor-pointer md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        />
        {/* large screen */}
        <ul className="hidden md:flex items-center gap-6 xl:gap-10">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/statistics">Statistics</NavLink>
          <NavLink to="/jobs/applied">Applied Jobs</NavLink>
          <NavLink to="/blogs">Blog</NavLink>
        </ul>
        <div className="hidden md:block">
          <Button>Start Applying</Button>
        </div>
      </div>
      {showMenu && (
        <div className="space-y-3 my-4 transition-opacity duration-2000 md:hidden">
          <ol className="space-y-2 flex flex-col">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/statistics">Statistics</NavLink>
            <NavLink to="/jobs/applied">Applied Jobs</NavLink>
            <NavLink to="/blogs">Blog</NavLink>
          </ol>
          <Button>Start Applying</Button>
        </div>
      )}
    </>
  );
};

export default Header;
