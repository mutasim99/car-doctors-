'use client'
import axios from 'axios';
import { useSession } from 'next-auth/react';
import React, { useState } from 'react'

export default function CheckoutForm({ data }) {
    const [loading, setLoading] = useState(false)
    const { data: session } = useSession()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const number = form.number.value;
        const address = form.address.value;

        const serviceId = data?._id;
        const serviceName = data?.title
        const serviceImage = data?.img
        const price = data.price
        const bookingPayload = { name, email, price, number, address, serviceId, serviceName, serviceImage }
        try {
            setLoading(true)
            const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/service`, bookingPayload)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }




    }

    return (
        <div className="w-full p-4 md:p-8 my-10">
            <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl border border-blue-200">
                <form onSubmit={handleSubmit}>
                    {/* Name field */}
                    <div className="mb-6">
                        <input
                            type="text"
                            id="name"
                            name='name'
                            defaultValue={session?.user?.name}
                            readOnly
                            placeholder="Your Name"
                            className="w-full p-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none cursor-not-allowed"
                            required
                        />
                    </div>

                    {/* Date and Email fields */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <input
                                type="date"
                                id="date"
                                placeholder="Date"
                                className="w-full p-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none"
                                required
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                id="email"
                                name='email'
                                defaultValue={session?.user?.email}
                                readOnly
                                placeholder="Your Email"
                                className="w-full p-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none cursor-not-allowed "
                                required
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {/* Price field */}
                        <div className="mb-6">
                            <input
                                type="text"
                                id="price"
                                defaultValue={data?.price}
                                readOnly
                                placeholder="Total Price"
                                className="w-full p-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none cursor-not-allowed"
                            />
                        </div>
                        {/* number field */}
                        <div className="mb-6">
                            <input
                                type="number"
                                id="number"
                                name='number'
                                placeholder="Please enter you contact Number"
                                className="w-full p-4 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500 outline-none"
                            />
                        </div>
                    </div>


                    {/* Address field */}
                    <div className="mb-8">
                        <textarea
                            id="address"
                            name='address'
                            placeholder="Your Address"
                            rows="4"
                            className="w-full p-4 border border-gray-300 rounded-md resize-none focus:ring-red-500 focus:border-red-500 outline-none"
                            required
                        ></textarea>
                    </div>

                    {/* Submit button */}
                    <button
                        type="submit"
                        className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-6 rounded-md transition-colors duration-300 text-lg"
                    >
                        {loading?'confirming...':"Order Confirm"}
                    </button>
                </form>
            </div>
        </div>
    )
}
