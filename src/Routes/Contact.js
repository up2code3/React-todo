import React from "react";
import style from "../components/mainStyle.module.css"; 

const Contact = () => {
    return (
        <div className={`${style.body} `}>
            <h1>Contact</h1>
            <p> For more info contact: <a href="mailto:the_position3030@yahoo.com">the_position3030@yahoo.com</a> </p>
            <img
            src="https://assets.bonappetit.com/photos/6491b45d047251c7e5ee269b/16:9/w_1280,c_limit/GettyImages-107806725.jpg"
            className={`${style.cartPic}`}
            alt="ShopCartPic"
            />
        </div>
    )
};

export default Contact;