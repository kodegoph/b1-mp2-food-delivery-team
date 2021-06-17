import Sidebar from "../Sidebar";
import Footer from "../Footer";

<<<<<<< HEAD


=======
>>>>>>> a0ec9602f31bfad9049ab4befbf2daece3f427d8
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
