/** @format */

import Link from "next/link";
import Image from "next/image";

import Picture from "../public/assets/images/k-shuttle.svg";
const Sidebar = () => {
  return (
    <aside
      className="position-fixed side-menu bg-light vh-100"
      data-bs-scroll="true"
      data-bs-backdrop="false"
      tabIndex="-1"
      id="offcanvasScrolling"
      aria-labelledby="offcanvasScrollingLabel"
    >
      <div className="container h-100">
        <div className="row h-100">
          <div className="col pt-3 d-flex align-items-center justify-content-between h-100 flex-column">
            <div>
              <Image
                src={Picture}
                alt="logo"
                className="img-logo"
                width={24}
                height={19}
                layout={"responsive"}
              />
              <div className="d-flex dashboard-icon dash-icons d-flex align-items-center flex-column  overall-dashboard">
                <Link href="/">
                  <a
                    className="p-3 d-flex justify-content-md-end dasboard-icon"
                    href=""
                  >
                    <i className="bx bxs-dashboard pt-1 me-2"></i>
                    <h6 className="d-none d-md-block">Dashboard</h6>
                  </a>
                </Link>
                <Link href="/booking">
                  <a
                    className="p-3 d-flex justify-content-end dasboard-icon"
                    href=""
                  >
                    <i className="bx bx-compass me-2 pt-1"></i>
                    <h6 className="d-none d-md-block">Track Order</h6>
                  </a>
                </Link>
                <Link href="/calendar">
                  <a
                    className="p-3 d-flex justify-content-md-end dasboard-icon"
                    href=""
                  >
                    <i className="bx bxs-calendar-alt me-2 pt-1"></i>
                    <h6 className="d-none d-md-block">Scheduler</h6>
                  </a>
                </Link>
                <Link href="/customers">
                  <a className="p-3 d-flex justify-content-md-end" href="">
                    <i className="bx bx-user me-2"></i>
                    <h6 className="d-none d-md-block">Customers</h6>
                  </a>
                </Link>

                <a
                  className="p-3 d-flex justify-content-md-end dasboard-icon"
                  href=""
                >
                  <i className="bx bx-wrench pt-1 me-2"></i>
                  <h6 className="d-none d-md-block">Settings</h6>
                </a>
              </div>
            </div>
            <Link href="/login">
              <a
                className="p-3 d-flex justify-content-md-end dasboard-icon"
                href=""
              >
                <i className="bx bx-log-out pt-1 me-2"></i>
                <h6 className="d-none d-md-block">Logout</h6>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
