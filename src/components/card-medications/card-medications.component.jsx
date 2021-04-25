import React from "react";
import { HiDotsVertical } from 'react-icons/hi';
import { IoMdAddCircleOutline } from "react-icons/io"
import { RiCapsuleLine } from "react-icons/ri"
import "./card-medications.styles.scss"

const CardMedications = () => {
    return (
        <div className="card-medications">
            <div className="medications-heading">
                <p>Current Medications</p>
                <p>
                    <IoMdAddCircleOutline /> &nbsp; &nbsp;
                    <HiDotsVertical />
                </p>
            </div>
            <div className="medicines">
                <p>
                    <RiCapsuleLine /> &nbsp; Desloratadine (Clarinex)
                </p>
                <p>
                    <RiCapsuleLine /> &nbsp; Ketorolac (Acular, Acuvail)
                </p>
                <p>
                    <RiCapsuleLine /> &nbsp; Azelastine (Astelin, Astepro)
                </p>
            </div>
        </div>
    )
}

export default CardMedications