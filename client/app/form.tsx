'use client'

import { serverURI } from "@/lib/utils";
import { useState } from "react";
import { toast } from "sonner";




const Form = () => {
    const [loading, setLoading] = useState(false)
    const login = async (e: any) => {
        setLoading(true)
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        try {
            /* const res = await axios.post(`/login`, { email, password })
            console.log(res.data)
            if (res.data.success) toast.success(res.data.message || 'Login successful') */
            const res = await fetch(`${serverURI}/login`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })

            })
            const data = await res.json()
            if (data.success) toast.success(data.message || 'Login successful')
            setLoading(false)
        } catch (err: any) {
            setLoading(false)
            console.log(err.message)
        }
    }
    return (
        <form onSubmit={login} className="bg-gray-900/80 backdrop-blur p-8 rounded-xl mx-auto w-full md:max-w-lg m-1 mt-24 sm:mt-0">
            <div className="flex flex-col space-y-3 mt-2">
                <label htmlFor="email">Email</label>
                <input
                    className="p-2 px-4 rounded-lg"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="someone@gmail.com"
                    defaultValue="someone@gmail.com"
                />
            </div>
            <div className="flex flex-col space-y-3 mt-2">
                <label htmlFor="password">Password</label>
                <input
                    className="p-2 px-4 rounded-lg"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    defaultValue="Pa$$w0rd!"

                />
            </div>
            <button disabled={loading} type="submit" className="w-full bg-sky-500 text-gray-200 py-2 mt-4 rounded-lg active:scale-95 transition-transform disabled:bg-sky-400 disabled:cursor-not-allowed">
                {loading ? "Processing..." : "Login"}
            </button>
        </form>
    )
}

export default Form