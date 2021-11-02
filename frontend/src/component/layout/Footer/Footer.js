import React from 'react'
import playstore from "../../../images/playstore.png"
import appStore from "../../../images/Appstore.png"
import "./Footer.css"
const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>Download App</h4>
                <p>Download App for Android and IOS</p>
                <img src={playstore} alt="playstore"/>
                <img src={appStore} alt="appstore"/>
            </div>

            <div className="midFooter">
                <h1>Ecommerce</h1>
                <p>High Quality is our first priority</p>
                <p>Copyrights 2021 &copy; DuyChau</p>

            </div>

            <div className="rightFooter">
            <h4>Contact Us</h4>
                <a href="https://www.facebook.com/parentsbabyshop">Facebook</a>
                <p>Hotline1: ............</p>
                <p>Hotline2: ............</p>
            </div>
        </footer>
    )
}

export default Footer
