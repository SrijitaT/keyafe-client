import React, { useState, useEffect } from "react";
import "./header.styles.scss";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";

export default function Header() {
  const user = useSelector((state) => state.user);
  let [hidden, setHidden] = useState(true);
 
  let listener = null
  const [scrollState, setScrollState] = useState("header")

  useEffect(() => {
    listener = document.addEventListener("scroll", e => {
      var scrolled = document.scrollingElement.scrollTop
      if (scrolled >= 60) {
        console.log(scrolled);
          setScrollState("header active")
      } else {
       
          setScrollState("header")
        
      }
    })
    return () => {
      document.removeEventListener("scroll", listener)
    }
  }, [])

  return (
      <Navbar className={scrollState} expand="sm"  variant="light" sticky="top">
        <NavbarBrand className="logo-container">
          <Link to="/">
            <img
              className="logo"
              src="/images/logo/keyafe.png"
              alt="logo"
            />
          </Link>
        </NavbarBrand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto nav-menu">
            <Nav.Link  href="shops">
              <Link className="option" to="/shop">
                SHOP
              </Link>
            </Nav.Link>
            <Nav.Link  href="contact-us">
              <Link className="option" to="/contact">
                CONTACT
              </Link>
            </Nav.Link>
            <Nav.Link  href="sign-in">
              {user && user.currentUser ? (
                <div className="option">
                  Welcome {user.currentUser.displayName}
                </div>
              ) : (
                <Link className="option" to="/signIn">
                  SIGN IN
                </Link>
              )}
            </Nav.Link>
            <Nav.Link>
              <CartIcon
                className="option"
                hidden={hidden}
                setHidden={setHidden}
              />
              {!hidden ? <CartDropdown setHidden={setHidden} /> : null}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
 
  );
}
