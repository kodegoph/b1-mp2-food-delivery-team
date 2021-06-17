import Sidebar from "../Sidebar";
import Footer from "../Footer";



const Layout = ({ children }) => {
  return (
    <div className="bg-color">
      <Sidebar />
      {/* page content */}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
