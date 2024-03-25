import React,{useState} from 'react';
import {NavLink, Link} from 'react-router-dom';
import {FiAlignRight,FiXCircle,FiChevronDown } from "react-icons/fi";
import logo from './Images/Proxi shield (2) (1).png'
import EmailLink from './EmailLink';
// import logo from '../../img/logo.png';
const Nav = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);
    const toggleClass = () => {
      setisMenu(isMenu === false ? true : false);
      setResponsiveclose(isResponsiveclose === false ? true : false);
  };
    let boxClass = ["main-menu menu-right menuq1"];
    if(isMenu) {
        boxClass.push('menuq2');
    }else{
        boxClass.push('');
    }
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
      setMenuSubMenu(isMenuSubMenu === false ? true : false);
    };
    let boxClassSubMenu = ["sub__menus"];
    if(isMenuSubMenu) {
        boxClassSubMenu.push('sub__menus__Active');
    }else {
        boxClassSubMenu.push('');
    }
    return (
    <>
      <div className="container_fluid color_format_back ">
            <div className="row">
                <div className="col-md-3">
                    
                    <center><img src={logo} width="200" height={80} className="" alt='something'/></center>
                </div>
                <div className="col-md-9 d-none d-md-block pe-3">
                <ul>
                        <li className="d-inline-block ml-2 mt-2 text-white"><i className="fa-solid fa-envelope mr-2"></i><EmailLink email="proxishieldpune@gmail.com" /></li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa-solid fa-phone mr-2"></i>Call: 8805081326</li>
                        <li className="d-inline-block ml-4 mt-2 text-white">Marathi | English</li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa fa-facebook mr-2"></i></li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa fa-twitter mr-2"></i></li>
                        <li className="d-inline-block ml-4 mt-2 text-white"><i className="fa fa-youtube mr-2"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <header className="header__middle">
        <div className="n1 container ">
            <div className="row">
                {/* Add Logo  */}
                <div className="header__middle__logo">
                    {/* <NavLink exact active='is-active' to="/">
                        <img src={logo} alt="logo" /> 
                    </NavLink> */}
                </div>
                <div className="header__middle__menus">
                    <nav className="main-nav " >
                    {/* Responsive Menu Button */}
                    {isResponsiveclose === true ? <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiXCircle />   </span>
                    </> : <> 
                        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} > <FiAlignRight />   </span>
                    </>}
                    <ul className={boxClass.join(' ')}>
                        <li  className="menu-item " >
                            <NavLink exact="true" active='is-active' onClick={toggleClass} to={`/`}> HOME</NavLink> 
                        </li>
                        <li  className="menu-item" >
                            <NavLink exact='true' active='is-active' onClick={toggleClass} to={`/Company`}> COMPANY </NavLink> 
                        </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> PRODUCTS <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} active='is-active'  to={`/Waterproofing`}>Waterproofing </NavLink> </li>
                                <li><NavLink onClick={toggleClass} active='is-active' to={`/Flooring`}> Flooring & Coating </NavLink> </li>
                                <li><NavLink onClick={toggleClass} active='is-active' to={`/Repair`}> Repair & Joint Sealants </NavLink> </li>                                

                                <li><NavLink onClick={toggleClass} active='is-active' to={`/Grouts`}> Grouts & Anchors </NavLink> </li>

                                <li><NavLink onClick={toggleClass} active='is-active' to={`/Building`}> Building & Joint Seaiats </NavLink> </li>
                                <li><NavLink onClick={toggleClass} active='is-active' to={`/Admixture`}> Concrete Admixture  </NavLink> </li>
                                


                            </ul>
                        </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> APPLICATION <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} active='is-active'  to={`/Waterproofing`}>Waterproofing </NavLink> </li>
                                <li><NavLink onClick={toggleClass} active='is-active' to={`/Flooring`}> Flooring & Coating </NavLink> </li>
                                <li><NavLink onClick={toggleClass} active='is-active' to={`/Repair`}> Repair & Joint Sealants </NavLink> </li>                               
                                <li><NavLink onClick={toggleClass} active='is-active' to={`/Admixture`}> Admixture & surface Treatments </NavLink> </li>
                                


                            </ul>
                        </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> DOWNLOADS <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} active='is-active'  to={`/Technicaldatasheets`}>Technical Data Sheets </NavLink> </li>
                                
                            </ul>
                        </li>
                        
                        <li className="menu-item " ><NavLink onClick={toggleClass} active='is-active' to={`/Contact`}> CONTACT </NavLink> </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#">SUPPORT <FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} active='is-active'  to={`/Saleresponsive`}>Sales Representive </NavLink> </li>

                            </ul>
                        </li>
                        <li onClick={toggleSubmenu} className="menu-item sub__menus__arrows" > <Link to="#"> MEDIA<FiChevronDown /> </Link>
                            <ul className={boxClassSubMenu.join(' ')} > 
                                <li> <NavLink onClick={toggleClass} active='is-active'  to={`/Event`}>Events </NavLink> </li>
                                <li><NavLink onClick={toggleClass} active='is-active' to={`/Videolib`}>Video Library </NavLink> </li>
                        
                            </ul>
                        </li>

                    </ul>
                    </nav>     
                </div>   
            </div>
	    </div>
    </header>
    </>
    )
}
export default Nav;