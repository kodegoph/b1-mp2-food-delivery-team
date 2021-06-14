import Link from 'next/link'
import Image  from 'next/image'

const Navbar = ()  =>  {
    return (   
        <nav>
            <div className="p-3 mb-2 bg-primary text-white text-center d-flex justify-content-between">
            <div className="logo">
                <Image src="/logo.jpg"width={128} height={77} />
                 </div>
                 <div className="d-flex justify-content-between">
                 <Link href="/"><a className="text-dark p-md-4">Home</a></Link>
                 <Link href="/about"><a className="text-dark  p-md-4">About</a></Link>
                 <Link href="/admin"><a className="text-dark  p-md-4">Awesome Group Listing</a></Link>
                 </div>
                 </div>
         </nav>   
    );
}

export default Navbar;