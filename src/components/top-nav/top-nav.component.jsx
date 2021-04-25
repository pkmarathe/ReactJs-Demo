import React from "react";
import { BiSearch, BiMessage } from "react-icons/bi"
import { IoMdNotificationsOutline } from "react-icons/io"
import "./top-nav.styles.scss"
import user from "../../assets/user.png"


const TopNav = () => {
    return (
        <div className="top-nav">
            <h1>PATIENT OVERVIEW</h1>
            <div className="top-nav-options">
                <p>
                    <BiSearch />
                </p>
                <p>
                    <BiMessage />
                    <span className="notification-badge">2</span>
                </p>
                <p>
                    <IoMdNotificationsOutline />
                    <span className="notification-badge">2</span>
                </p>
                <img className="img-nav-top" width="50px;" src={user} alt="" />
            </div>
        </div>
    )
}

export default TopNav;