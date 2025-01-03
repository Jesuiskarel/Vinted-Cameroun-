import React from 'react'
import { Link } from 'react-router-dom';

const Footer = () => {
    const navItems1 = [
        {link: "A Propos de Vinted Cameroun", path: "about"},
        {link: "Carrière"},
        {link: "Le développement durable"},
        {link: "Presse"},
        {link: "Publicités"},
    ];

    const navItems2 = [
        {link: "Comment ça marche ?"},
        {link: "Vérification de l'article"},
        {link: "Applications mobiles"},
        {link: "Tableau de bord"},
    ];

    const navItems3 = [
        {link: "Centre d'aide"},
        {link: "Vendre"},
        {link: "Acheter"},
        {link: "Confiance et Sécurité"},
    ];

    const navItems4 = [
        {link: "Politique de Confidentialité"},
        {link: "Politique de cookies"},
        {link: "Ne pas vendre mes informations personnelles"},
        {link: "Termes et Conditions"},
        {link: "Notre plateforme"},
    ];


  return (
    <footer className="stickfy top-0 z-50 py-3 bg-[#F2F2F2] text-black text-[18px] px-[20px] pb-[16px]">
    <div className="container relative flex justify-between space-x-20">
        <div className='space-y-4 px-[10px]'>
            <span className='font-medium'>
                Vinted Cameroun
            </span>
            <ul className="text-[16px] flex flex-col space-y-4 text-[#757575]">
                {
                    navItems1.map(({link, path}) => <a key={link} href={path} className="hover:underline">{link}</a>)
                }
            </ul>
        </div>
        <div className='space-y-4'>
            <span className='font-medium'>
                Découvrir
            </span>
            <ul className="text-[16px] flex flex-col space-y-4 text-[#757575]">
                {
                    navItems2.map(({link, path}) => <a key={link} href={path} className="hover:underline">{link}</a>)
                }
            </ul>
        </div>
        <div className='space-y-4'>
            <span className='font-medium'>
                Aide
            </span>
            <ul className="text-[16px] flex flex-col space-y-4 text-[#757575]">
                {
                    navItems3.map(({link, path}) => <a key={link} href={path} className="hover:underline">{link}</a>)
                }
            </ul>
        </div>
    </div>
    <div className="mt-10 h-[1px] bg-[#757575]"></div>
    <div className='p-[12px] h-[98px] place-content-center flex justify-between'>
        <ul className='flex items-center mt-[10]'>
            <li className='my-3 mr-5'>
                <a href="">
                    <img src="https://marketplace-web-assets.vinted.com/assets/icons/social-media/facebook.svg" alt="" />
                </a>
            </li>
            <li className='my-3 mr-5'>
                <a href="">
                    <img src="https://marketplace-web-assets.vinted.com/assets/icons/social-media/linkedin.svg" alt="" />
                </a>
            </li>
            <li className='my-3 mr-5'>
                <a href="">
                    <img src="https://marketplace-web-assets.vinted.com/assets/icons/social-media/instagram.svg" alt="" />
                </a>
            </li>
        </ul>
        <ul className='flex items-center'>
            <li className='my-3 ml-5'>
                <a href="">
                    <img src="https://marketplace-web-assets.vinted.com/assets/app-badges/ios/fr.svg" alt="" />
                </a>
            </li>
            <li className='my-3 ml-5'>
                <a href="">
                    <img src="https://marketplace-web-assets.vinted.com/assets/app-badges/android/fr.svg" alt="" />
                </a>
            </li>            
        </ul>

    </div>
    <div className="h-[1px] bg-[#757575] "></div>
    <div className='place-content-center'>
        <ul className='flex text-[15px] text-[#757575] mt-[10px] h-[48px] items-center'>
            {
                navItems4.map(({link, path}) => <a key={link} href={path} className="hover:underline p-[12px]">{link}</a>)
            }
        </ul>
    </div>

    
</footer>
  )
}

export default Footer