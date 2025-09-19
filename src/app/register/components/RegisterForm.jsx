"use client"

import registerUser from '@/app/actions/auth/registerUser';
import React from 'react'
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";

export default function RegisterForm() {
    const handleSubmit = async(e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const payload = { name, email, password }
        const result = await registerUser(payload);
        console.log(result);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    name='name'
                    placeholder="Your name"
                    className="input input-bordered w-full"
                />
                <input
                    type="email"
                    name='email'
                    placeholder="Your email"
                    className="input input-bordered w-full"
                />
                <input
                    type="password"
                    name='password'
                    placeholder="Confirm Password"
                    className="input input-bordered w-full"
                />

                <input type='submit' className="btn w-full bg-red-500 hover:bg-red-600 text-white rounded-lg" />

            </form>

            {/* Or divider */}
            <div className="flex items-center my-6">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="px-2 text-sm text-gray-500">Or Sign Up with</span>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            {/* Social Logins */}
            <div className="flex justify-center gap-4 mb-4">
                <button className="btn btn-outline btn-circle">
                    <FaFacebook className="text-blue-600" />
                </button>
                <button className="btn btn-outline btn-circle">
                    <FaLinkedin className="text-blue-500" />
                </button>
                <button className="btn btn-outline btn-circle">
                    <FaGoogle className="text-red-500" />
                </button>
            </div>

            {/* Already have an account */}
            <p className="text-center text-sm text-gray-600">
                Already have an account?{" "}
                <a href="/login" className="text-red-500 font-medium">
                    Login
                </a>
            </p>
        </div>
    )
}
