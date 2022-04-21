import React from "react";
import { FaUserAlt, FaWallet, FaClipboardList, FaAddressBook } from "react-icons/fa";
import "./profilemenu.scss";
import { Link } from "react-router-dom";

const ProfileMenu = () => {
  return (
    <div className="profile-menu">
      <ul className="profile-menu-item">
        <li>
        <Link to="/Profile" className="profile-menu-item-list">
               <FaUserAlt className="profile-icons" /> <p className="menu-list">My Profile</p>
              </Link>
        </li>
        <li >
            <Link to="/Wallet" className="profile-menu-item-list">
          <FaWallet className="profile-icons" /> <p className="menu-list">My Wallet</p>
          </Link>
        </li>
        <li >
            <Link to="/Orders" className="profile-menu-item-list">
          <FaClipboardList className="profile-icons" /> <p className="menu-list">My Orders</p>
          </Link>
        </li>
        <li >
            <Link to="/Address" className="profile-menu-item-list">
          <FaAddressBook className="profile-icons" /> <p className="menu-list">My Address</p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileMenu;
