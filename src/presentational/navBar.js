import React from "react";
import {Nav, Navbar} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBeer} from "@fortawesome/free-solid-svg-icons";
import {faHamburger} from "@fortawesome/free-solid-svg-icons";
import {faCartArrowDown} from "@fortawesome/free-solid-svg-icons";
import "./../App.css"
import Cooking from "../images/cooking.png";

const NavBarTop = ()=>{

    return(

            <Navbar  sticky={"top"} expand={"md"} className={"pt-md-5"}>
                <Navbar.Brand className={" d-block d-sm-none"}>
                    <FontAwesomeIcon icon={faBeer} style={{marginRight:"10px"}}/>
                    MyRecipe
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="top-nav" />
                <Navbar.Collapse id={"top-nav"}>
                    <Nav className={"flex-column text-left"}>
                        <Navbar.Brand className={" d-none d-sm-block mb-md-5"}>
                            <FontAwesomeIcon icon={faBeer} style={{marginRight:"10px"}}/>
                            MyRecipe
                        </Navbar.Brand>
                        <div className={" d-none d-sm-block text-center"}>
                            <img src={Cooking} className={"img-fluid pt-2 mb-4"} alt={"book"} />
                        </div>
                        <p className={"text-secondary mt-5 mb-4 ml-md-2 mr-2 pTag"}>MENU</p>
                        <Nav.Link href={"/"} className={"navbarCustom d-inline"}>
                            <FontAwesomeIcon icon={faHamburger} className={"mr-2"}/>
                            Recipes
                        </Nav.Link>
                        <Nav.Link href={"/cart"} className={"navbarCustom d-inline mt-md-2"}>
                            <FontAwesomeIcon icon={faCartArrowDown} className={"mr-2"}/>
                            Cart
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

    );
};
export default NavBarTop;

