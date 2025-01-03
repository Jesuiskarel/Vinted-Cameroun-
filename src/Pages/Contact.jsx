import React from 'react'

const Contact = () => {
  return (
    <>
      <div className='mx-20 flex justify-between my-20'>
        <div className=''>
          <h1 className='text-[32px] pb-5'>Nous Contacter</h1>
          <p>Nous vous remercions de prendre le temps de nous contacter. Veuillez remplir le formulaire ci-dessous</p>
          <div className='mt-10 space-y-10'>
            <p>Adresse:</p>
            <p>Téléphone:</p>
            <p>Mail:</p>
          </div>
          <div className='mt-10'>
            <h1 className='text-[20px] mb-5'>Heure d'ouverture</h1>
            Lundi – Vendredi : 7:30 – 15:30
          </div>
        </div>
        <div className='space-y-5'>
          <h1 className='text-[26px]'>Laissez votre Message</h1>
          <div className='flex justify-center space-x-3'>
            <input type="text" className='border w-[329px] h-[49px] pl-5' />
            <input type="text" className='border w-[329px] h-[49px] pl-5' />
          </div>
          <div className='space-y-5'>
            <input type="text" className='border w-full h-[50px] pl-5' />
            <textarea type="text" className='border w-full h-[159px]' />
          </div>
          <div className='w-[333px] rounded-md py-2 px-3 border-2 bg-[#283A58] border-[#283A58] text-white text-center'>
            <p>Envoyer votre message</p>
            {/* <a className="rounded-md py-2 px-3 border-2 bg-[#283A58] text-white  " href="#" >Envoyer votre message</a> */}
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact