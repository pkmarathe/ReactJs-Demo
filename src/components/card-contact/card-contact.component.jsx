import React from "react";
import "./card-contact.styles.scss"
import user from "../../assets/user.png"


const CardContact = () => {
    return (
        <div className="card-contact">
            <div className="card-contact-one">
                <div className="card-contact-one-img">
                    <img width="100px" src={user} alt="" />
                    <h1>John Smith</h1>
                    <h2>Allergy</h2>
                    <div className="infos">
                        <div>
                            DOB <br />
                            03/13/1998
                        </div>
                        <div>
                            Age <br />
                            22y 4m
                        </div>
                    </div>
                    <div className="infos">
                        <div>
                            Weight <br />
                            168 lb
                        </div>
                        <div>
                            Height <br />
                            5'9''
                        </div>
                    </div>
                </div>
                <div className="card-contact-one-info"></div>
                <button className="send-message-btn">SEND MESSAGE</button>
            </div>
            <br /><br />
            <div className="card-contact-two">
                <div>
                    Home Address
                    <br />
                    123 Broadway, <br />
                    New York, NY, 10012
                </div>
                <div>Mobile Phone # <br /> 917 (543)-1234 </div>
                <div>Home Phone # <br /> 212 (123-1234</div>
                <div>Work Phone # <br /> 718 (702)-9876</div>
                <div>Email <br /> j.smith@gmail.com</div>
            </div>
        </div>
    )
}

export default CardContact