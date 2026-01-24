"use client"
import { getBlog } from "@/actions/blog.actions"
import { useEffect, useState } from "react"

// export const dynamic = "force-dynamic"

export default function AboutPage() {

    const [data, setData] = useState()

    useEffect(() => {
        (async () => {
            const { data } = await getBlog()
            setData(data)
        })()
    }, [])
    console.log(data);

    return (
        <div className="text-4xl">this is the about page</div>
    )
}
