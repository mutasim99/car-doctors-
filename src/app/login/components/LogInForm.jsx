"use client"


import Link from 'next/link';
import { signIn } from "next-auth/react"
import React from 'react'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import SocialLogIn from '@/app/components/SocialLogIn';

export default function LogInForm() {
    const router = useRouter()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        toast('logging In')
        try {
            const response = await signIn('credentials', {
                email,
                password,
                callbackUrl: '/',
                redirect: false
            })
            if (response.ok) {
                router.push('/');
                form.reset();
                toast.success('logIn successfully')
            } else {
                toast.error('Authentication FAILED')
            }
        } catch (error) {
            console.log(error);
            alert('Authentication failed')
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">
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
            <SocialLogIn></SocialLogIn>

            {/* Already have an account */}
            <p className="text-center text-sm text-gray-600">
                Don't have an account?{" "}
                <Link href="/register" className="text-red-500 font-medium">
                    register
                </Link>
            </p>
        </div>
    )
}
