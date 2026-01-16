"use client"

import { useEffect } from "react";

const ErrorPage = ({error, reset}: {error: Error & {digest: string}, reset: ()=>void}) => {
    useEffect(()=>{

    })
    return (
        <div>
            <h1>Something went wrong</h1>
            <button onClick={reset}> Reset</button>
        </div>
    );
};

export default ErrorPage;