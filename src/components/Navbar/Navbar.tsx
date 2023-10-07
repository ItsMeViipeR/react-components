import React, {FC, ReactNode} from "react";

import "./Navbar.css";
import "@/components/fontawesome/css/all.css";

interface NavbarProps {
    name: string;
    icon?: string;
    children: ReactNode
}

export const Navbar: FC<NavbarProps> = ({name, icon, children}) => {
    return (
        <>
            <header id={"navbar"}>
                <nav className={"navbar-container container"}>
                    <a href="/" className={"home-link"}>
                        {icon &&
                            <div className={"navbar-logo"}>
                                <img src={icon} alt={name} className={"navbar-logo"}/>
                            </div>
                        } {name}
                    </a>
                    <button type={"button"} id={"navbar-toggle"} aria-controls={"navbar-menu"} aria-label={"Toogle menu"} aria-expanded={"false"} onClick={() => {
                        const navbarToggle = document.querySelector("#navbar-toggle")!;
                        let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

                        const toggleNavbarVisibility = () => {
                            isNavbarExpanded = !isNavbarExpanded;
                            navbarToggle.setAttribute("aria-expanded", isNavbarExpanded.toString());
                        }

                        toggleNavbarVisibility();
                    }}>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <div id="navbar-menu" aria-labelledby={"navbar-toggle"}>
                        <ul className={"navbar-links"}>
                            {React.Children.map(children, child => {
                                const element = React.cloneElement(child as React.ReactElement);

                                return (
                                    <li className={"navbar-item"}>
                                        {React.Children.map(element.props.children, child => {
                                            const element = React.cloneElement(child as React.ReactElement);

                                            return (
                                              <a href={element.props.href} className={"navbar-link"}>{element.props.children}</a>
                                            )
                                        })}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    )
}