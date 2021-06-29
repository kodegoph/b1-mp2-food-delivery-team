import Sidebar from "../Sidebar";
import Footer from "../Footer";
import { useState } from "react";


const Layout = ({ children }) => {
  const [sideOpen, setSideOpen] = useState(false);
  return (
    <div className="bg-color">
      <button onClick={() => setSideOpen(!sideOpen)} className="side-nav">
        <a>
          <i className='bx bx-menu'></i>
        </a>
      </button>
      <Sidebar sideOpen={sideOpen}/>
      {/* page content */}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
