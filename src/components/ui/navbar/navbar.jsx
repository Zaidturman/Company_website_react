import React from "react";
import MainButton from "../../buttons/mainbutton";
import '../../../css/navbar.css';
import Logo from "../../../assets/logo.png";
function NavBar (){
    return(
       <nav>
            <img src={Logo}/>
            <div>
                  <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Services</li>
                <li>Careers</li>
            </ul>
            <MainButton title={"contact us"}/>
            </div>
          
       </nav>
    );
}

export default NavBar;