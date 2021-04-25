import React from "react";
import { HiDotsVertical } from 'react-icons/hi';
import { AiOutlineHeart } from "react-icons/ai";
import { RiPulseFill } from "react-icons/ri"
import "./card-vitals.styles.scss"

const CardVitals = () => {
    return (
        <div className="card-vitals">
            <div className="vitals-heading">
                <p>Vitals</p>
                <p>
                    <HiDotsVertical />
                </p>
            </div>
            <div className="blood-pulse">
                <div className="blood">
                    <p> <AiOutlineHeart /></p>
                Blood Pressure <br />
                    <h1>121/75</h1>
                </div>
                <div className="pulse">
                    <p>
                        <RiPulseFill />

                    </p>
                Pulse <br />
                    <h1>67</h1>
                </div>
            </div>
        </div >
    )
}

export default CardVitals