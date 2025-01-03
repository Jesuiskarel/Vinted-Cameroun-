import React from 'react';
import Modal from 'react-modal';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { FacebookProvider, LoginButton } from 'react-facebook';

Modal.setAppElement('#root');

const LoginModal = ({ isOpen, onRequestClose }) => {
  const responseFacebook = (response) => {
    console.log('Réponse Facebook:', response);
    onRequestClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Se connecter"
      className="bg-white rounded-lg w-96 relative z-50 flex flex-col"
      overlayClassName="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-40"
    >
      {/* Bouton de fermeture */}
      <div className='flex right-4 h-[52px] p-[4px]'>
        <div className='place-content-center'>
          <button 
            onClick={onRequestClose} 
            className="top-4 right-4 text-gray-500 hover:text-gray-700 px-[10px] absolute"
            aria-label="Fermer"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-6 w-6" 
              fill="black" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path d="M18.94 4 12 10.94 5.06 4 4 5.06 10.94 12 4 18.94 5.06 20 12 13.06 18.94 20 20 18.94 13.06 12 20 5.06z" />
            </svg>
          </button>
        </div>
      
      </div>

      <div className='px-[16px] pb-[24px]'>
        <h2 className="text-[24px] leading-[32px] font-medium text-center">Rejoins la communauté de la seconde main et vends sans frais</h2>

        <GoogleOAuthProvider clientId="">
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log('Réponse Google:', credentialResponse);
              onRequestClose();
            }}
            onError={(error) => console.log('Erreur Google:', error)}
            text='16px'
          />
        </GoogleOAuthProvider>

        <FacebookProvider appId="VOTRE_APP_ID_FACEBOOK"> {/* Remplacez par votre App ID Facebook */}
          <LoginButton
            onCompleted={responseFacebook}
            onError={(error) => console.log('Erreur Facebook:', error)}
            className="h-[44px] w-full border-2 rounded-md px-4 flex justify-center place-items-center"
          >
            <div className='p-[5px] mr-1'>
              <svg fill='none' viewBox='0 0 24 24' width="20" height="20">
                <path fill='#0866FF' d="M24 12.004c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.627 3.875 10.35 9.101 11.647v-7.98H6.627v-3.667H9.1v-1.58c0-4.084 1.849-5.977 5.858-5.977.76 0 2.073.149 2.61.298v3.324c-.284-.03-.776-.045-1.387-.045-1.967 0-2.728.745-2.728 2.683v1.297h3.92l-.674 3.667h-3.246v8.245C19.396 23.198 24 18.139 24 12.004Z"></path>
                <path fill='#fff' d='m16.7 15.671.673-3.667h-3.92v-1.297c0-1.938.761-2.683 2.728-2.683.611 0 1.104.015 1.387.044V4.745c-.537-.15-1.849-.299-2.61-.299-4.009 0-5.857 1.894-5.857 5.978v1.58H6.626v3.667h2.475v7.98a12.021 12.021 0 0 0 4.352.265V15.67H16.7Z'></path>
              </svg>
            </div>
            <span className='text-[16px] font-medium'>
              Continuer avec Facebook
            </span>
          </LoginButton>
        </FacebookProvider>
        <div className='place-items-center mt-4 text-[#636363] text-[16px]'>
          <div className='flex space-x-1 leading-6'>
            <p>Ou inscris toi avec</p>
            <a href="" className='text-[#007782]'>ton adresse mail</a>
          </div>
          <div className='flex space-x-1'>
            <p>Tu as déjà un compte ?</p>
            <a href="" className='text-[#007782]'>Se connecter</a>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;