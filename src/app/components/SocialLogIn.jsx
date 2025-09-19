'use client'
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { FaGoogle, FaGithub } from "react-icons/fa";
import { toast } from 'react-toastify';
export default function SocialLogIn() {
    const session = useSession();
    const router = useRouter();
    const handleSocialLogIn = (providerName) => {
        signIn(providerName)
    }

    useEffect(() => {
        if (session?.status === 'authenticated') {
            router.push('/')
            toast.success('loggedIn successfully')
        }
    }, [session?.status])
    return (
        <div className="flex justify-center gap-4 mb-4">
            <button onClick={() => handleSocialLogIn('google')} className="btn btn-outline btn-circle">
                <FaGoogle className="text-blue-600" />
            </button>
            <button onClick={() => handleSocialLogIn('github')} className="btn btn-outline btn-circle">
                <FaGithub className="text-red-500" />
            </button>
        </div>
    )
}
