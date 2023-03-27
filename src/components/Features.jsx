import React from 'react'
import styles from '../style';
import { FeatureBox,FeatureCard } from '../components'


const Features = () => (



    <section className='px-4'>
            <div className="max-w-screen-xl items-start ">


        <div className="flex flex-col  pt-16 items-start mb-8 ">
                <FeatureBox title="Sick of blindly throwing your advertising budget at billboards and hoping for the best?" />
        </div>
      
        <div className="flex  overflow-x-auto items-start">

            <div className="w-full h-full md:w-1/2 lg:w-1/3 ">
            <FeatureCard
                title="Find billboards"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."/>
            </div>

            <div className="w-full h-full md:w-1/2 lg:w-1/3 px-4 ">
            <FeatureCard
                title="Search and compare"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
            />
            </div>

            <div className="w-full h-full md:w-1/2 lg:w-1/3px-4 ">
            <FeatureCard
                title="Measure your ROI"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
            />
            </div>

            <div className="w-full h-full md:w-1/2 lg:w-1/3 px-4 ">
            <FeatureCard
                title="Campaign performance in real-time"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
            />
            </div>

        </div>
    </div>
            
    </section>

    





)





export default Features