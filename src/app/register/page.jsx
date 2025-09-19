import React from 'react'
import Image from "next/image";
import signupImg from '../../../public/assets/images/login/login.svg'
import RegisterForm from './components/RegisterForm';

export default function Register() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-5xl shadow-lg rounded-lg bg-white overflow-hidden">

                {/* Left Illustration */}
                <div className="hidden md:flex items-center justify-center bg-gray-50">
                    <Image
                        src={signupImg}
                        alt="signup illustration"
                        width={400}
                        height={400}
                        className="object-contain"
                    />
                </div>

                {/* Right Form */}
                <div className="flex flex-col justify-center px-8 py-10">
                    <h2 className="text-3xl font-semibold text-center mb-6">Sign Up</h2>
                    <RegisterForm />
                </div>
            </div>
        </div>
    )
}
