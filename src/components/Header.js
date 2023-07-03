import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Header = () => {
     const [btnName , setBtnName] = useState("login")
     const onlineStatus = useOnlineStatus();
   
    return(
        <div className="header">
          <div className="logo-container">
            <img className="logo" src={LOGO_URL}/>
          </div>
          <div className="res-name">
            SWIGGY
          </div>
          <div className="nav-items">
            <ul>
              <li>Status: {
                   onlineStatus ? "online🟢" : "offline🔴" 
                }</li>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/grocery">Grocery</Link>
                </li>
                <li>Cart</li>
                <button className="login" onClick={ () => {
                  btnName === "login" 
                  ? setBtnName("Logout")   
                  : setBtnName("login");
                }}>{btnName} </button>
            </ul>
          </div>
        </div>
    )
}

export default Header;