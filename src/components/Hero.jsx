import React from 'react'
import styles from '../style';


const Hero = () => (

  <section id="home" className={`  flex md:flex-row flex-col  ${styles.paddingY}`}>

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-col items-start py-[6px] px-4 rounded-[10px] mb-2">
            <div className=" flex flex-row justify-between items-center w-full">
              <h1 className="flex-1  font-poppins font-normal text-7xl text-orange-500">
                Your giant billboards don't give <br /> any stats<span className="text-white">.but we do</span> 

              </h1>
            </div>

            <div className="py-8">

            <button className="  sm:flex hidden bg-gray-800 hover:bg-white text-orange-500 font-poppins ss:text-[32px] text-[16px] py-2 px-4 rounded">
            CHECK HOW IT WORKS
            </button>

            </div>


        
      </div>
    </div>

    
  </section>

)





export default Hero