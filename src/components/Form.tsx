"use client"
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
    userName: string
    email: string
}

export default function Form({ users, setUsers }: { users: any, setUsers: any }) {


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

        const newUsers = [...users, { ...data, _id: response.user._id }]

        setUsers(newUsers)

    };

    return (
        <form className="flex flex-col gap-3 justify-center" onSubmit={handleSubmit(onSubmit)}>
            <input className="rounded-md text-black" placeholder="user name" {...register("userName", { required: true })} />
            {errors.userName && <span>Este campo es requerido</span>}

            <input className="rounded-md text-black" placeholder="email" {...register("email", { required: true })} />
            {errors.email && <span> Este campo es requerido</span>}

            <input type="submit" className="bg-gray-500 p-3 rounded-md" />
        </form>
    )
}