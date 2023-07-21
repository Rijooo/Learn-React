import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlinestatus";

const Header = () => {
     const [btnName , setBtnName] = useState("login")
     const onlineStatus = useOnlineStatus();
   
    return(
        <div className="flex justify-between bg-pink-200 shadow-md px-10">
          <div className="logo-container">
            <img className=" w-44" src={LOGO_URL}/>
          </div>
          <div className=" flex items-center">
            SWIOTO
          </div>
          <div className="flex items-center ">
            <ul className="flex p-5 m-10 ">
              <li className=" px-3">Status: {
                   onlineStatus ? "online🟢" : "offline🔴" 
                }</li>
                <li className=" m-3 px-3 bg-pink-500 hover:bg-pink-700 align-middle">
                <Link to="/">Home</Link>
                </li>
                <li className=" m-3 px-3   bg-pink-500 hover:bg-pink-700 active:bg-pink-500 ">
                  <Link to="/about">About</Link>
                </li>
                <li className="flex items-center w-80px] m-3 px-3 bg-pink-500 hover:bg-pink-700 ">
                <Link to="/contact">Contact</Link>
                </li>
                <li className=" m-3 px-3  bg-pink-500 hover:bg-pink-700 ">
                  <Link to="/grocery">Grocery</Link>
                </li>
                <li className=" m-3 px-3  bg-pink-500 hover:bg-pink-700 ">Cart</li>
                <button className="login m-3 bg-pink-500 hover:bg-pink-700 px-3" onClick={ () => {
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