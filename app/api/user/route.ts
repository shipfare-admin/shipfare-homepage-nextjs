import {cookies} from "next/headers";

export async function GET() {
    cookies()
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    return Response.json({ data })
}