import React, { useState } from 'react'
import logo from './Vinted Cameroun.png'
import LoginModal from './LoginModal';

const Header = () => {

    const [activeMenu,setActiveMenu]= useState(null);
    const toggleMenu = (menu) =>{
        setActiveMenu(activeMenu === menu ? null : menu);
    };

    const langItems = [
        {sousMenus: "FR"},
        {sousMenus: "EN"}
    ];

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);


  return (
    <header className='bg-black place-items-center sticky top-0 z-40'>
        <div className="container relative h-full place-content-center px-[20px]">
                <div className="flex h-[44px] w-full  place-items-center place-content-between">
                    <div className="flex w-[150px]">
                        <a href="/home">
                            <img src={logo} className="w-full" alt=''/>
                        </a>
                    </div>
                    <div className='flex h-[30px] bg-[#575757] rounded-l-full rounded-r-full'>
                        <div className='flex justify-center place-items-center place-content-center'>
                            <button className='text-white px-[11px] flex place-items-center'>
                                <span>
                                    Articles
                                </span>
                                <span className='pl-1'>
                                    <svg viewBox='0 0 16 16'width='16px' height='16px'>
                                        <path d="M8 12 2 6h12z" fill='#FFFFFF'></path>
                                    </svg>
                                </span>
                            </button>
                            <div className="w-[1px] h-[25px] bg-[#A7A7A7] border-0"></div>
                        </div>
                        <div className="flex px-[11px] w-[500px] place-items-center">
                            <div className='pr-1'>
                                <svg viewBox='0 0 16 16' width="16px" height="16px" fill='#FFFFFF'>
                                    <path d='M7 11.5a4.5 4.5 0 1 1 .01-9.01A4.5 4.5 0 0 1 7 11.5zm4.74-.82a6 6 0 1 0-1.06 1.06l3.25 3.25L15 13.93l-3.25-3.25z'></path>
                                </svg>
                            </div>
                            <input type='text' placeholder='Rechercher des articles' className='text-white outline-none bg-[#575757] px-[2px] py-[1px] w-full h-[24px]'/>
                        </div>
                            {/* <img src={src} alt=""/> */}
                    </div>
                    <div className=" justify-center flex text-[12px]">
                    <button className="place-content-center mr-4 px-[8px] rounded-md h-[28px] border-2 border-[#017781] bg-white font-semibold text-[#017781]" onClick={openModal} >
                        <span>S'inscrire</span>
                        <span className="m-1">|</span>
                        <span>Se connecter</span>
                    </button>
                    <LoginModal isOpen={isModalOpen} onRequestClose={closeModal}/>
                    <a className="place-content-center px-[8px] rounded-md h-[28px] border-2 border-[#017781] bg-[#017781] font-semibold text-white hover:bg-white hover:text-[#017781]" href="#" >Vends tes articles</a>
                    <a href="/faqs" className='px-[10px] place-content-center'>
                        <svg viewBox='0 0 24 24' width='24' height='24'>
                            <g fill='none'>
                                <path d="M0 0h24v24H0z"></path>
                                <path fill="#FFFFFF" d="M12.75 14.506h-1.5v-1.139c0-1.077.598-2.064 1.522-2.514a1.78 1.78 0 0 0 .927-2.068 1.741 1.741 0 0 0-1.218-1.218 1.766 1.766 0 0 0-1.559.305 1.75 1.75 0 0 0-.685 1.395h-1.5c0-1.017.46-1.958 1.266-2.58a3.285 3.285 0 0 1 2.853-.574 3.244 3.244 0 0 1 2.297 2.297c.398 1.542-.31 3.1-1.723 3.79-.413.202-.68.66-.68 1.167v1.139ZM12 2c5.523 0 10 4.478 10 10 0 5.523-4.477 10-10 10-5.524 0-10-4.477-10-10C2 6.479 6.476 2 12 2Zm0 1.5c-4.687 0-8.5 3.814-8.5 8.5 0 4.687 3.813 8.5 8.5 8.5 4.686 0 8.499-3.813 8.499-8.5 0-4.686-3.813-8.5-8.5-8.5Zm-1.003 13.507a1 1 0 1 1 2.001 0 1 1 0 1 1-2 0Z"></path>
                            </g>
                        </svg>
                    </a>
                    <div className='flex text-white place-content-center pl-[4px]'>
                        
                        <button className='text-[14px] px-[11px] flex place-items-center' onClick={toggleMenu}>
                            <span>
                                FR
                            </span>
                            <span className='pl-1'>
                                <svg viewBox='0 0 16 16'width='16px' height='16px'>
                                    <path d="M8 12 2 6h12z" fill='#FFFFFF'></path>
                                </svg>
                            </span>
                        </button>

                    </div>
                    </div>

                    

                </div>
            </div>
    </header>
  )
}

export default Header