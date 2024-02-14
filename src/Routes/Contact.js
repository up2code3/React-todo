import React from "react";
import style from "../components/mainStyle.module.css"; 

const Contact = () => {
    return (
        <div className={`${style.body} `}>
            <h1>Contact</h1>
            <p> For more info contact: <a href="mailto:the_position3030@yahoo.com">the_position3030@yahoo.com</a> </p>
            <img
            src="https://www.the-sun.com/wp-content/uploads/sites/6/2023/01/colorful-supermarket-aisle-withe-no-791693291-2.jpg?w=620"
            className={`${style.cartPic}`}
            alt="ShopCartPic"
            />
        </div>
    )
};

export default Contact;