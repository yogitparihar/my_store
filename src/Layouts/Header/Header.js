import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./Header.css";
import logo from "../../Assets/Images/logo.png";
import bell from "../../Assets/Images/bell.svg";
import chat from "../../Assets/Images/chat.svg";
const Header = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0 m-0 navigation">
          <Navbar collapseOnSelect expand="lg">
            <Navbar.Brand href="#home">
              <img src={logo} alt='logo' />
            </Navbar.Brand>
            <Nav>
              <div className="navigation-icon">
                <a href="#">
                  <img src={chat} alt='chat' />
                </a>
                <a href="#">
                  <img src={bell} alt='bell' />
                </a>
              </div>

              <div className="profile rounded-circle">
              </div>
            </Nav>
          </Navbar>
        </div>
      </div>
    </div>
  );
};
export default Header;
