import {Metadata} from "next";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import {cookies} from "next/headers";

export const metadata: Metadata = {
    title: 'Pricing page',
    description: 'Pricing page description',
}

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }


    return res.json()
}


export default async function Pricing() {
    cookies()
    const users = await getData()
    return (
        <main>
            {Date.now()}
            <ul>
                {users.map((user: { id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined; }) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </main>
    )
}
