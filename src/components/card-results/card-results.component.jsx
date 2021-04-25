import React from "react";
import { HiDotsVertical } from 'react-icons/hi';
import { CgNotes } from "react-icons/cg"

import "./card-results.styles.scss";

const CardResults = () => {
    return (
        <div className="card-results">
            <div className="results-heading">
                <p>Lab Results</p>
                <p>
                    <HiDotsVertical />
                </p>
            </div>
            <div className="lab-res">
                <div className="lab-result-ind">
                    <p>
                        <CgNotes /> &nbsp; &nbsp;
                        X-Ray - John Smith
                    </p>
                    <p>
                        06/01/2020
                    </p>
                </div>
                <div className="lab-result-ind">
                    <p>
                        <CgNotes /> &nbsp; &nbsp;
                        X-Ray - John Smith
                    </p>
                    <p>
                        06/01/2020
                    </p>
                </div>
                <div className="lab-result-ind">
                    <p>
                        <CgNotes /> &nbsp; &nbsp;
                        X-Ray - John Smith
                    </p>
                    <p>
                        06/01/2020
                    </p>
                </div>
                <div className="lab-result-ind">
                    <p>
                        <CgNotes /> &nbsp; &nbsp;
                        X-Ray - John Smith
                    </p>
                    <p>
                        06/01/2020
                    </p>
                </div>
            </div>
        </div >
    )
}

export default CardResults;