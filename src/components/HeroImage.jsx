import React from 'react'
import styles from '../style';


const Hero = () => (

  <section id="home" className={`  flex md:flex-row flex-col  ${styles.paddingY}`}>

    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-col items-start py-[6px] px-4 rounded-[10px] mb-2">
        <img src="public/features.png" alt="" />
      </div>
    </div>

    
  </section>

)





export default Hero