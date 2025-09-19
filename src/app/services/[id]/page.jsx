import { collectionName, dbConnect } from '@/lib/dbConnect'
import { ObjectId } from 'mongodb';
import { FaDownload, FaCheckCircle } from "react-icons/fa";
import { MdMiscellaneousServices } from "react-icons/md";
import Image from 'next/image';
import React from 'react'
import bannerImg from '../../../../public/assets/images/checkout/checkout.png'

export default async function ServiceDetails({ params }) {
    const p = await params
    const servicesCollection = await dbConnect(collectionName.serviceCollection);
    const data = await servicesCollection.findOne({ _id: new ObjectId(p.id) });

    return (
        <div className='mt-10'>
            {/* Banner section */}
            <section className='flex justify-center'>
                <figure className='relative'>
                    <Image
                        src={bannerImg}
                        width={1100}
                        height={300}
                        className="object-cover rounded-lg"
                        alt='banner'
                    >
                    </Image>
                    <div className="absolute inset-0 banner-overlay"></div>
                    <div className='absolute inset-0 flex items-center justify-start ml-4'>
                        <h2 className='text-2xl font-bold text-white '>Service Details</h2>
                    </div>
                </figure>
            </section>
            {/* main content with sidebar */}
            <section className='grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10'>
                {/* middle content */}
                <div className='lg:col-span-2 space-y-6 max-w-11/12 mx-auto'>
                    <div className='w-full'>
                        <Image
                            src={data.img}
                            width={1200}
                            height={600}
                            className="w-full h-[400px] object-cover rounded-lg"
                            alt={data.title}
                        ></Image>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold">{data.title}</h3>
                        <p className="text-gray-600 mt-2">{data.description}</p>
                    </div>
                    {/* Features sections */}
                    <div className='grid grid-cols-2 gap-4'>
                        {
                            data.facility.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="p-4 border rounded-lg shadow-sm bg-base-100 flex items-start gap-3"
                                >
                                    <FaCheckCircle className="text-green-500 mt-1" />
                                    <div>
                                        <h4 className="font-semibold">{feature.name}</h4>
                                        <p className="text-sm text-gray-600">{feature.details}</p>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
                <aside className='space-y-6'>
                    {/* service list */}
                    <div className="bg-base-100 shadow-md rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <MdMiscellaneousServices /> Services
                        </h4>
                        <ul className="space-y-2">
                            <li className="btn btn-outline btn-sm w-full">Full Car Repair</li>
                            <li className="btn btn-outline btn-sm w-full">Engine Repair</li>
                            <li className="btn btn-outline btn-sm w-full">Equipment Service</li>
                            <li className="btn btn-outline btn-sm w-full">Oil Change</li>
                            <li className="btn btn-outline btn-sm w-full">Battery Charge</li>
                        </ul>
                    </div>
                    {/* Download section */}
                    <div className="bg-base-100 shadow-md rounded-lg p-4">
                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                            <FaDownload /> Download
                        </h4>
                        <button className="btn btn-sm btn-primary w-full">Our Brochure</button>
                        <button className="btn btn-sm btn-secondary w-full mt-2">
                            Company Details
                        </button>
                    </div>
                    {/* Price */}
                    <div className="bg-base-100 shadow-md rounded-lg p-4 text-center">
                        <h4 className="text-xl font-semibold">Price</h4>
                        <p className="text-2xl font-bold text-primary mt-2">
                            ${data.price}
                        </p>
                        <button className="btn btn-error w-full mt-4">Proceed Checkout</button>
                    </div>
                </aside>
            </section>
        </div>
    )
}
