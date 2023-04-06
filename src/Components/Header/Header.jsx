import React from "react";
import ActiveLink from "../ActiveLink/ActiveLink";
import './Header.css';
const Header = () => {
  return (
    <div className="header">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/about">About </ActiveLink>
      <ActiveLink to="/contact">Contact</ActiveLink >
      <ActiveLink to="/friends">friends</ActiveLink>
      <ActiveLink to="/posts">Posts</ActiveLink>
    </div>
  );
};

export default Header;
