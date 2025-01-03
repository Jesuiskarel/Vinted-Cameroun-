import { nom } from 'react-router-dom'
import React, { useState } from 'react';

const Navbar = () =>{

    const [activeMenu,setActiveMenu]= useState(null);
    const toggleMenu = (menu) =>{
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const navItems = [
        { nom: "Femmes", sousMenus: ["Robes", "Hauts", "Pantalons"]},
        { nom: "Hommes", sousMenus:["Hauts","Pantalons"]},
        { nom: "Enfants", sousMenus:["Hauts","Pantalons"]},
        { nom: "Maison", sousMenus:["Hauts","Pantalons"]},
        { nom: "Electronique", sousMenus:["Hauts","Pantalons"]},
        { nom: "A Propos"},
        { nom: "Notre Plateforme"},
    ];


    return(
        <nav className="h-[52px] place-content-center border bg-[#2699FB] text-white font-bold sticky top-11 z-40">
            <div className='flex space-x-6 justify-center px-[20px]'>
                {navItems.map((menu,index) => (
                    <div key={index} nom={menu.nom} sousMenus={menu.sousMenus}>
                        <button onClick={()=>toggleMenu(index)} className='px-[16px]'>
                            {menu.nom}
                        </button>
                        {activeMenu === index &&(
                            <div className='mt-4 absolute bg-white text-black rounded shadow-lg w-48 z-50'>
                                {menu.sousMenus.map((sousMenu,sousIndex)=>(
                                    <div key={sousIndex} className='px-4 py-2 hover:bg-gray-200 cursor-pointer'>
                                        {sousMenu}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </nav>
    );
}

export default Navbar;

 
