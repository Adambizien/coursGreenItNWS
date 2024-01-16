import React, { useState } from 'react'

function Home() {
  
  return (

    <>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.2.1/flowbite.min.css" rel="stylesheet" />
    <div className="bg-black relative ">
      <img
        src="https://frederic.monsitevert.fr/assets/619b732d79056c47c50c2e12/2023/05/17/08/31/38/capture-d-ecran-2020-11-25-a-12.12.12-(1)-(1)-(1).min80.jpg"
        alt="Votre image alt"
        className="w-full h-[400px] object-cover" />
      <div className="overlay bg-black bg-opacity-50 absolute top-0 left-0 w-full h-[400px]"></div>
      <div className="absolute top-0 left-0 w-full h-[400px] flex flex-col justify-center items-center">
        <h1 className='text-3xl font-bold text-green-400'>Undercity</h1>
      </div>
      <br />
      <br />
      <div className='flex'>
        <div className="text-center w-1/2 h-full ml-10">
          <h2 className='text-green-400 text-xl'>Nos partenaires</h2>
          <br />
          <p className='text-white text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">Voir plus</button>
        </div>
        <div className='w-1/4 mx-auto'>
          <img src="/undraw_collaborators_re_hont.svg" alt="Illustration" />
        </div>
      </div>
      <br />
      <div className='bg-slate-700  '>
        <br />
        <div className=' text-center'>
          <h2 className='text-green-400 text-xl'>Notre fonctionnement</h2>
          <br />
          <p className='text-white text-sm '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">En savoir plus</button>
        </div>
        <br />
      </div>
      <br />
      <div className='flex'>
        
        <div className='w-1/4 mx-auto'>
          <img src="/undraw_software_engineer_re_tnjc.svg" alt="Illustration" />
        </div>
        <div className="text-center w-1/2 h-full ml-10">
          <h2 className='text-green-400 text-xl'>A venir</h2>
          <br />
          <p className='text-white text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">Voir plus</button>
        </div>
      </div>
      <br />
      <div className='bg-slate-700  '>
        <br />
        <div className=' text-center'>
          <h2 className='text-green-400 text-xl'>Testez maintenant</h2>
          <br />
          <p className='text-white text-sm '>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <br />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">En savoir plus</button>
        </div>
        <br />
      </div>
      <br />
      <div className='flex'>
        <div className="text-center w-1/2 h-full ml-10">
          <h2 className='text-green-400 text-xl'>Quelques exemples</h2>
          <br />
          <p className='text-white text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <br />
          <button className="bg-blue-500 text-white px-4 py-2 mt-4">Voir plus</button>
        </div>
        <div className='w-1/4 mx-auto'>
          <img src="/undraw_product_explainer_8jbm.svg" alt="Illustration" />
        </div>
      </div>
     
<div id="default-carousel" class="relative w-full" data-carousel="slide">
   
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div class="pngegg"></div>
        </div>
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
          <div class="logo512"></div>
        </div>
    </div>
    
    <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    </div>
    
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

    </div>
    
    </>



  )
}

export default Home