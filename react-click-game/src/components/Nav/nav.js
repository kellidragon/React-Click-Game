import React from "react";
import "./style.css";

const Nav = (props) => (

<ul className="nav justify-content-center">
  <li className="nav-item">
    {props.children} 
  </li>
</ul>
)

export default Nav;