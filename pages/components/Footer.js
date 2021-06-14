import Link from 'next/link'

const Footer = () => {
    return (
        <>
            
                <div className="p-1 mb-2 bg-secondary text-white ">
                    <div className="col-md-6 text-center">
                        <span>Copyright © 2019, All Right Reserved Seobin</span>
                    </div>
                    <div className="col-md-6 ">
                        <div className="copyright-menu d-flex space-between">
                            <ul>
                                <li>
                                <Link href="/"><a>Home</a></Link>
                                </li>
                                <li>
                                <Link href="/about"><a>Terms</a></Link>
                                </li>
                                <li>
                                    <a href="#">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="#">Contact</a>
                                </li>
                            </ul>
                        </div>    
            </div>
        </div>
    
        </>
    );
}

export default Footer;