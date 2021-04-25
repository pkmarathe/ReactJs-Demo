import React from "react";

import "./dashboard-main-two.styles.scss";

import CardNotes from "../card-notes/card-notes.component"
import CardResults from "../card-results/card-results.component"

const DashboardMainTwo = () => {
    return (
        <div className="dashboard-main-two">
            <CardNotes />
            <CardResults />
        </div>
    )
}

export default DashboardMainTwo;