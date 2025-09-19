import React from 'react'
import bannerImg from '../../../../public/assets/images/checkout/checkout.png'
import Image from 'next/image';
import CheckoutForm from '@/app/components/Form/CheckoutForm';

export default async function CheckoutPage({ params }) {
    const p = await params
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/service/${p.id}`);
    const data = await res.json();
    console.log(data?.title);
    return (
        <div className='flex flex-col justify-center items-center max-w-11/12 mx-auto'>
            <div className="w-full flex items-center justify-center overflow-hidden mt-10">
                <Image
                    src={bannerImg}
                    width={1200}
                    height={300}
                    alt='banner img'
                    className='object-cover w-11/12 rounded-lg brightness-50'
                />
                <div className='absolute'>
                    <h2 className='text-2xl font-bold text-white'>{data?.title}</h2>
                </div>
            </div>
            <div className='w-full'>
                <CheckoutForm data={data}></CheckoutForm>
            </div>
        </div>
    )
}
