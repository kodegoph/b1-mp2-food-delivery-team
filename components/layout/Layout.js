import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Sidebar />
      {/* page content */}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
