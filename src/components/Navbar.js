import { Link, useLocation } from 'react-router-dom';
import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
import { faHome, faList , faExclamationCircle , faCog} from '@fortawesome/free-solid-svg-icons';
import { icon } from '@fortawesome/fontawesome-svg-core';

const Navbar = () => {
    const location = useLocation()
    const[showSidebar,setShowSidebar]=useState(false)
    const links=[
         
                    {
                        name: "Home",
                        path: "/",
                        icon: faHome
                    },
                    {
                        name: "Recipes",
                        path: "/recipes",
                        icon: faList
                    },
                    {
                        name: "About",
                        path: "/about",
                        icon : faExclamationCircle 
                    },
                    {
                        name: "Settings",
                        path: "/settings",
                        icon : faCog
                    },
                ]

    function closeSidebar(params) {
        setShowSidebar(false)
    }
    return (
        <>
            <div className='navbar container'>
                <Link to="/" className='logo'> KamerF<span>oo</span>d</Link>
                <div className='nav-links'>
                    { links.map(link=>(
                        <Link className={location.pathname===link.path ? " active" : " " } to={link.path}  key={link.name}>{link.name}</Link>
                    ))}
                    
                </div>
                <div onClick={()=>setShowSidebar(!showSidebar)} className={showSidebar? 'sidebar-btn active' : 'sidebar-btn'}>
                    <div className='bar'> </div>
                    <div className='bar'> </div>
                    <div className='bar'> </div>
                </div>
            </div>
            {
                showSidebar && <Sidebar close={closeSidebar} links={links}/>
            }
           
        </> 
    );
};

export default Navbar;