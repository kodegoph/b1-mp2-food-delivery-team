import Header from "../Header";
import Sidebar from "../Sidebar";
import Footer from "../Footer";

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Header />
      {/* page content */}
      {children}

      <div className="overlay toggle-icon"></div>
      <a href="javaScript:;" className="back-to-top">
        <i className="bx bxs-up-arrow-alt"></i>
      </a>

      <Footer />
    </div>
  );
};

export default Layout;
