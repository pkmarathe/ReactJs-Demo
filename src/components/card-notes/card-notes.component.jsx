import React from "react";
import { HiDotsVertical } from 'react-icons/hi';
import { IoMdAddCircleOutline } from "react-icons/io"

import "./card-notes.styles.scss"

const CardNotes = () => {
    return (
        <div className="card-notes">
            <div className="notes-heading">
                <p>Notes</p>
                <p>
                    <IoMdAddCircleOutline /> &nbsp; &nbsp;
                    <HiDotsVertical />
                </p>
            </div>
            <br />
            <p>06/01/2020</p>
            <p>
                Patients having severe sinusits about two to three months
                ago with facial discomfort, nasal congestion, eye pain, and postnasal
                drip symptioms
            </p>
            <br />
            <p>
                Probable environmental inhalant allergies, probable food
                allergies, and history of asthama
            </p>
        </div>
    )
}

export default CardNotes