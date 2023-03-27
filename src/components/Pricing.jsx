import React from 'react'
import styles from '../style';
import { FeatureBox } from '../components'


const Pricing = () => (

  
  <div class="antialiased w-full h-full  text-gray-400 font-inter p-10">
      <div class="container px-4 mx-auto">

        <div>

          <div id="title" class="text-start  my-10">
          <h1 className="flex-1  font-poppins    text-8xl text-white">
                Yes! it is <span className="text-orange-500">Cheap</span> 

              </h1>
          </div>


          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-evenly  gap-10 pt-10">

            <div id="plan"class="   px-8 py-4 bg-[#14161C]  overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in   hover:border-2 hover:border-orange-500 rounded-lg" >

                <div id="title" class="w-full py-5 text-start">
                        <h1 class="font-poppings font-medium  text-5xl text-orange-500">Agency package </h1>
                        <h1 class="font-poppings font-medium text-white text-5xl mt-2"> 3$ <span className='text-3xl  text-orange-500 '>/per month</span> </h1>
                </div>

                <div id="content" class=" ">
                        <div id="contain" class="leading-8 font-poppings text-center mb-10 text-lg font-light">
                            <div id="choose" class="w-full mt-10 px-6 ">
                                <button className="  sm:flex hidden bg-gray-800 hover:bg-white text-orange-500 font-poppins ss:text-[16px] text-[8px] py-2 px-4 rounded">
                                    CHECK HOW IT WORKS
                                </button>
                            </div>
                        </div>
                </div>
            </div>


            <div id="plan"class="   px-8 py-4 bg-[#14161C]  overflow-hidden w-full transform hover:shadow-2xl hover:scale-105 transition duration-200 ease-in   hover:border-2 hover:border-orange-500 rounded-lg" >

                <div id="title" class="w-full py-5 text-start">
                        <h1 class="font-poppings font-medium  text-5xl text-orange-500">Individual  package </h1>
                        <h1 class="font-poppings font-medium text-white text-5xl mt-2"> 1$ <span className='text-3xl  text-orange-500 '>/per month</span> </h1>
                </div>

                <div id="content" class=" ">
                        <div id="contain" class="leading-8 font-poppings text-center mb-10 text-lg font-light">
                            <div id="choose" class="w-full mt-10 px-6 ">
                                <button className="  sm:flex hidden bg-gray-800 hover:bg-white text-orange-500 font-poppins ss:text-[16px] text-[8px] py-2 px-4 rounded">
                                    CHECK HOW IT WORKS
                                </button>
                            </div>
                        </div>
                </div>
            </div>

            




          </div>
        </div>
      </div>
    </div>

)





export default Pricing