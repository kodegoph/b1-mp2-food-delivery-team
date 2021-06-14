import  Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const errorNotFound = () => {
    
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => {
            router.push('/')        
        },3000)
    },[])

    return (
        <div className="text-center">
            <h1>Ooops...</h1>
            <h2>That page cannot be found</h2>
            <p>Go back to the <Link href="/"><a className="text-decoration-underline">Homepage</a></Link></p>     
        </div>
    );
}

export default errorNotFound;