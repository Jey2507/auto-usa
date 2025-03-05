import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "../Navigation/Navigation.module.css"
import Logo from "../../assets/images/logo.png";
import { useState } from "react";

const getNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };


export default function Navigation() { 
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prevState => !prevState);
    return (
      <>
      <header className={css.navBox}>
          <div className={css.logoBox}>
            {/* <img className={css.imageLogo} src={Logo} alt="logo" /> */}
            <h2 className={css.logoText}><span className={css.spanLogoText}>R</span>oyal Business Solution</h2>
          </div>
          <nav className={css.navbar}>
              <NavLink to="/" className={getNavLinkClass}>Home</NavLink> 
              <NavLink to="/imigration" className={getNavLinkClass}>Immigration</NavLink>  
              <NavLink to="/business" className={getNavLinkClass}>Online Business</NavLink>
              <NavLink to="/marketing" className={getNavLinkClass}>Marketing</NavLink>
              <NavLink to="/auto" className={getNavLinkClass}>Auto</NavLink>
          </nav>
          <button onClick={toggleMenu} className={css.burger}>
            <svg className={css.svgBurger} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 28 28" fill="none">
                <path d="M3.5 6H24.5M3.5 14H24.5M3.5 22H24.5" stroke="#D12C44" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button> 
        </header>

        <div onClick={toggleMenu} className={clsx(css.navHeader, { [css.navOpen]: isOpen, [css.navClosed]: !isOpen })}>
          <ul className={css.listHeader}>
            <li>
            <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
            </li>
            <li>
            <NavLink to="/imigration" className={getNavLinkClass}>Immigration</NavLink>
            </li>
            <li>
            <NavLink to="/business" className={getNavLinkClass}>Online Business</NavLink>
            </li>
            <li>
            <NavLink to="/marketing" className={getNavLinkClass}>Marketing</NavLink>
            </li>
            <li>
            <NavLink to="/auto" className={getNavLinkClass}>Auto</NavLink>
            </li>
          </ul>
        </div>
      </>   
    )
}
