import clientPromise from "@/auth/adapter";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const client = await clientPromise;
    const db = client.db();
    const { userName, email } = await request.json();

    if (!userName || !email) return NextResponse.json({ error: "Los campos Email y Nombre de usuario son requeridos" }, { status: 400 })

    const user = await db.collection("users").findOne({ email })
    if (user) return NextResponse.json({ error: "El usuario ya existe" }, { status: 400 })

    try {
        const newUser = await db.collection("users").insertOne({ userName, email })
        return NextResponse.json({ user: { _id: newUser.insertedId } })
    } catch (error) {
        return NextResponse.json({ error: "algo salio mal" }, { status: 500 })
    }
}