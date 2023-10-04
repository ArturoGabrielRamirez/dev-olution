"use client"

import React, { useState, useEffect } from "react"
import { toast } from "sonner"
import Form from "./Form";

interface User {
    _id: string;
    userName: string;
    email: string;
}

export default function UsersContainer() {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        if (users.length === 0) {
            fetch("/api/users")
                .then((res) => res.json())
                .then((data) => {
                    setUsers(data);
                })
                .catch((error) => {
                    toast.error(error);
                });
        }
    }, [users]);


    return (

        <div className="flex flex-col gap-4">
            <h3>Lista de usuarios registrados</h3>
            <div className={`grid grid-rows-${users.length} space-y-2`}>

                {users.map((user) => (
                    <div className="grid grid-cols-2 p-3" key={user._id}>
                        <div >
                            <h2>{user.userName}</h2>
                        </div>
                        <div>
                            <p>{user.email}</p>
                        </div>
                    </div>
                ))}
            </div>
            <Form users={users} setUsers={setUsers} />
        </div>


    );
}

