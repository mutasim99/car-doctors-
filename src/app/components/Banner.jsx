import React from 'react'
import bannerImage from '../../../public/assets/images/banner/5.jpg'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className="relative max-w-11/12 mx-auto mt-10 h-[600px]"> 
            <Image
                src={bannerImage}
                alt="bannerImg"
                fill
                priority
                className="object-cover rounded-lg"
            />
            <div className="absolute inset-0 banner-overlay"></div>
            <div className="absolute inset-0 flex items-center justify-start text-white p-8">
                <div className="max-w-xl text-center md:text-left">
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                        Affordable Price For Car Servicing
                    </h1>
                    <p className="mt-4 text-lg">
                        There Are Many Variations Of Passages Of Available, But The Majority Have Suffered Alteration In Some Form
                    </p>
                    <div className="mt-8 flex gap-4 justify-center md:justify-start">
                        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-md transition-colors">
                            Discover More
                        </button>
                        <button className="bg-transparent border-2 border-white text-white font-bold py-3 px-6 rounded-md hover:bg-white hover:text-red-500 transition-colors">
                            Latest Project
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
