import React from 'react'

export default function SocialLogIn() {
    return (
        <div className="flex justify-center gap-4 mb-4">
            <button className="btn btn-outline btn-circle">
                <FaGithub className="text-blue-600" />
            </button>
            <button className="btn btn-outline btn-circle">
                <FaGoogle className="text-red-500" />
            </button>
        </div>
    )
}
