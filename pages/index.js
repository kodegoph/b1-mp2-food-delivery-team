import Head from 'next/head'
import Link from 'next/link'

export default  function Home (){
    return(
        <>
        <Head>
            <title>Dashboard | Login</title>
        </Head>
        <div>
            
            <h1>Homepage</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <Link href="/admin">
                <a>See the awsomeness listing</a>
            </Link>
            
        </div>
        </>
    )

}