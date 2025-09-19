import { collectionName, dbConnect } from '@/lib/dbConnect';
import React from 'react';
import ServicesCard from './ServicesCard';
import Link from 'next/link';

const Services = async () => {
    const serviceCollection = await dbConnect(collectionName.serviceCollection)
    const data = await serviceCollection.find({}).toArray();

    return (
        <div className='max-w-11/12 mx-auto mt-12'>
            <div className='flex flex-col justify-center items-center space-y-2'>
                <h4 className='text-xl font-bold text-red-500'>Services</h4>
                <h3 className='text-2xl font-semibold'>Our Service Area</h3>
                <p className='text-gray-600'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
                {
                    data.map((service) =>
                        <Link key={service._id} href={`/services/${service._id}`}>
                            <ServicesCard service={service}></ServicesCard>
                        </Link>
                    )
                }
            </div>
        </div>
    );
};

export default Services;