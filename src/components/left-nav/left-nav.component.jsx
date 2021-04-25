import React from "react";
import user from "../../assets/user.png"
import "./left-nav.styles.scss"

const LeftNav = () => {
    return (
        <div className="left-nav">
            <div className="left-nav-top">
                <div className="left-nav-top-1">
                    <img width="50px" src={user} alt="" />
                </div>
                <div className="left-nav-top-2">
                    <h3>John Smith</h3>
                    <h4>ID: 4872650</h4>
                </div>
            </div>
            <div className="left-nav-options">
                <h3 className="active">OVERVIEW</h3>
                <h3>HISTORY</h3>
                <h3>MEDICATIONS</h3>
                <h3>ALLERGIES</h3>
                <h3>RESULTS</h3>
                <h3>VACCINES</h3>
                <h3>MESSAGES</h3>
                <h3>CALLS</h3>
                <h3>FILES</h3>
                <h3>BILLING</h3>
            </div>
        </div>
    )
}

export default LeftNav;