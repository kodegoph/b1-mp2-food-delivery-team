import Sidebar from "../Sidebar";
import Footer from "../Footer";

<<<<<<< HEAD


=======
>>>>>>> f0b966a0061297398d50079a8487d3a1f8be8ed8
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
