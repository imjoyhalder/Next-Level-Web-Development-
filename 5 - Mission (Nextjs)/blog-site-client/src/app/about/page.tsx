
export default async function AboutPage() {
    await new Promise((resolve)=> setTimeout(resolve, 3000))
    throw new Error("something went wrong")
    return (
        <div className="text-4xl">this is the about page</div>
    )
}
