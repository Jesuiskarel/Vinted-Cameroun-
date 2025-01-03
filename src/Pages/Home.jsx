import React from 'react'
import img1 from './hvf-desktop-narrow.jpg'


const Home = () => {
  return (
    <>
      <div className='backgroundImage items-center'>
        <div className='px-[20px] flex items-center h-screen'>
          <div className='w-[384px] shadow-lg bg-white p-[32px] rounded-lg'>
            <h1 className='text-[34px] leading-[43px] font-medium'>Prêt à faire <br /> du tri dans votre <br /> placard?</h1>
            <div className='h-[44px] bg-[#007782] px-4 rounded-lg justify-center flex mt-10'>
              <a href="" className='place-content-center text-[16px] text-white font-medium'>Vends Maintenant</a>
            </div>
            <div className='mt-4'>
              <a href="" className='underline text-[#007782]'>Découvrir comment ça marche</a>
            </div>
          </div>

        </div>
      </div>
      <div className='flex justify-center space-x-5 my-10 px-[20px]'>
        <div className='w-full h-[312px] relative overflow-hidden shadow-lg rounded-lg'>
          <img src={img1} alt="" className='absolute object-cover h-full w-full rounded-lg' />
          <div className='relative z-10 p-[32px] flex flex-col justify-between h-full'>
            <div>
              <p className='text-white text-[16px] font-375'>Nouveau</p>
              <p className='text-white text-[24px] font-medium'>Découvre la mode de Luxe</p>
            </div>
            <div className='rounded-lg h-[36px]'>
              <button href="" className='px-[11px] bg-white rounded-md h-full'>Acheter Maintenant</button>
            </div>
          </div>

        </div>
        <div className='w-full h-[312px] relative overflow-hidden shadow-lg rounded-lg'>
          <img src="https://static-assets.vinted.com/homepage/ivs-desktop-narrow.jpg" alt="" className='absolute object-cover h-full w-full rounded-lg' />
          <div className='relative z-10 p-[32px] flex flex-col justify-between h-full'>
            <div>
              <p className='text-[16px] font-375'>Vérification de l'article</p>
              <p className='text-[24px] font-medium'>Achète des pièces <br/> vérifiées par nos experts</p>
            </div>
            <div className='rounded-lg h-[36px]'>
              <button href="" className='px-[11px] bg-[#007782] text-white rounded-md h-full'>Explorer les articles des créateurs</button>
            </div>
          </div>

        </div>
      </div>
        
    </>
  )
}

export default Home