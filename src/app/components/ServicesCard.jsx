import Image from 'next/image'
import React from 'react'
import { BsArrowRight } from 'react-icons/bs';

export default function ServicesCard({ service }) {
    return (
        <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
            {/* Image Section */}
            <div className="relative w-full h-48">
                <Image
                    src={service.img}
                    alt={service.title}
                    fill
                    className="rounded-t-lg object-cover p-6"
                />
            </div>

            {/* Content Section */}
            <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-red-500">
                        Price : ${service.price}
                    </p>
                    <button className="text-red-500 hover:text-red-700 transition-colors duration-300">
                        <BsArrowRight className="h-6 w-6" />
                    </button>
                </div>
            </div>
        </div>
    )
}
