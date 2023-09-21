"use client"

import { POST } from "@/app/api/users/route"
import { url } from "inspector"
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    userName: string
    /*  userNameRequired: string */
    email: string
    /*  emailRequired: string */
}

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        const request = await fetch("/api/users", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const response = await request.json();

        console.log(response)
    };

    return (
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
            <input className="rounded-md text-black" placeholder="user name" {...register("userName", { required: true })} />
            {/*  <input {...register("userNameRequired", { required: true })} /> */}
            {errors.userName && <span>Este campo es requerido</span>}

            <input className="rounded-md text-black" placeholder="email" {...register("email", { required: true })} />
            {/*  <input {...register("emailRequired", { required: true })} /> */}
            {errors.email && <span> Este campo es requerido</span>}

            <input type="submit" className="bg-gray-500 p-3 rounded-md" />
        </form>
    )
}