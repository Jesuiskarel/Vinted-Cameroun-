import React from 'react'
import { Link } from 'react-router-dom';

const Ressources = () => {

    const docItems = [
        {link: "All Document", path: ""},
        {link: "Finance & Economie", path: ""},
        {link: "Rapports commerciaux", path: ""},
        {link: "Rapports de la ville", path: ""},
        {link: "Routes & Transports", path: ""},
        {link: "Travaux publics", path: ""},
    ];

  return (
    <>
        <div className='h-[139px] bg-[#283A58] flex items-center justify-center'>
            <h1 className='text-center text-white text-[32px]'>Ressources</h1>
        </div>
        <div className='flex justify-between mx-20 mt-20'>
            <div className='bg-[#F7F1F0] bg-opacity-[100%] w-[306px] h-[414px]'>
                <h1 className='pl-5 pt-5 text-[24px]'>Document filter</h1>
                <ul className="text-[16px] font-medium pt-5 pl-10">
                        {
                            docItems.map(({link, path}) => <li key={link}>
                            <Link to={path} className="hover:text-[#F4A261] nav">
                                {link}
                            </Link>
                        </li>)
                        }
                    </ul>
            </div>
            <div>

            </div>
        </div>
    </>
  )
}

export default Ressources