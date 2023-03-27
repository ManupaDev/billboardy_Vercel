import React from 'react'
import styles from './style'
import { Navbar,Hero,Features, Pricing,HeroImage, Footer } from './components';



const App = () => (

  <div className="bg-[#0F111A] w-full overflow-hidden">

    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} h-screen justify-center items-center `}>
      <div className={`${styles.boxWidth}`}>
        <Hero/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart} py-16 justify-center items-center `}>
      <div className={`${styles.boxWidth}`}>
        <Features/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}  py-32  justify-center items-center `}>
      <div className={`${styles.boxWidth}`}>
        <HeroImage/>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}  py-32  justify-center items-center `}>
      <div className={`${styles.boxWidth}`}>
        <Pricing/>
      </div>
    </div>

    <div className={`bg-[#14161C] ${styles.flexStart} py-16  justify-center items-center `}>
      <div className={`${styles.boxWidth}`}>
        <Footer/>
      </div>
    </div>


    





    </div>

)
  

  


export default App
