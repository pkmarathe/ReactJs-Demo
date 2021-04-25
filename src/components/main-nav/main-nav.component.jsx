import React from "react";
import { FaChevronRight, FaArrowsAlt, FaClock, FaUser, FaCalendar, FaPhone } from 'react-icons/fa';
import { AiOutlineSetting } from "react-icons/ai"

import "./main-nav.styles.scss"

const MainNav = () => {
    return (
        <div className="main-nav">
            <div className="main-nav-div-1">
                <FaChevronRight />
                <FaArrowsAlt />
                <FaClock />
                <FaUser />
                <FaCalendar />
                <FaPhone />
                <AiOutlineSetting />
            </div>
        </div>
    )
}

export default MainNav;