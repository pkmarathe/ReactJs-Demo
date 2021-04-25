import React from "react";
import "./dashboard-main-one.styles.scss";

import CardContact from "../card-contact/card-contact.component"
import CardMedications from "../card-medications/card-medications.component"
import CardVitals from "../card-vitals/card-vitals.component"

const DashboardMainOne = () => {
    return (
        <div className="dashboard-main-one">
            <CardContact />
            <div className="dashboard-main-one-sub">
                <CardMedications />
                <CardVitals />
            </div>
        </div>
    )
}

export default DashboardMainOne;