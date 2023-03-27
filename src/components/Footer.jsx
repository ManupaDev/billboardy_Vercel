import React from 'react'
import styles from '../style';



const Footer = () => {
   
  
    return (

        <footer className="flex justify-between items-center justify-center py-6 px-4">
        <h1 class="font-poppings font-normal leading-none  text-5xl text-white">Take Billboardy <br/>for a Spin! </h1>
        <div className="flex items-center space-x-4">

            <div id="choose" class="w-full mt-10 px-6 ">
            <button className="  sm:flex hidden bg-gray-800 hover:bg-white text-orange-500 font-poppins whitespace-nowrap ss:text-[32px] text-[16px] py-2 px-4 rounded">
            CHECK HOW IT WORKS
            </button>
            </div>

            <div id="choose" class="w-full mt-10 px-6 ">
                
            <button className="  sm:flex hidden bg-gray-800 hover:bg-white text-orange-500 font-poppins  whitespace-nowrap ss:text-[32px] text-[16px] py-2 px-4 rounded">
            LinkedIn
            </button>

            </div>


        </div>
      </footer>
    );


  }
  
  export default Footer