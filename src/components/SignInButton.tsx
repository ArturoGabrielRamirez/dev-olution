"use client";

import { signIn, signOut, useSession } from 'next-auth/react'

const SigninButton = () => {

    const { data: session } = useSession()
    if (session && session.user) {
        return (
            <div className='flex gap-4 items-center'>
                <h2 className='text-xl'>Bienvenido {session.user.email}</h2>
                <button className='bg-red-600 p-4 rounded-md text-xl' onClick={() => signOut()}>Cerrar Sesion</button>
            </div>
        )
    }
    return (
        <div>
            <button className='bg-cyan-400 p-4 rounded-md text-xl' onClick={() => signIn()}>Iniciar Sesion</button>
        </div>
    )
}
export default SigninButton