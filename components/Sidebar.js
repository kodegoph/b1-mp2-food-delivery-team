import Link from "next/link";
import Image from "next/Image";

import Picture from "../public/assets/images/k-shuttle.svg";
const Sidebar = () => {
    return (
        <aside
            className="position-fixed side-menu bg-light vh-100"
            data-bs-scroll="true"
            data-bs-backdrop="false"
            tabIndex="-1"
            id="offcanvasScrolling"
            aria-labelledby="offcanvasScrollingLabel">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col pt-3 d-flex align-items-center justify-content-between h-100 flex-column">
                        <div className="text-center">
                            <a href="">
                                <Image
                                    src={Picture}
                                    alt="logo"
                                    className="img-logo"
                                    width={24}
                                    height={19}
                                    layout={"responsive"}
                                />
                            </a>
                            <div className="dashboard-icon dash-icons d-flex align-items-center flex-column  overall-dashboard">
                                <Link href="/">
                                    <a
                                        className="p-3 d-flex justify-content-md-end dasboard-icon"
                                        href="">
                                        <h6 className="d-none d-md-block me-2 text-dark  dasboard-icon">
                                            Dashboard
                                        </h6>
                                        <i className="bx bxs-dashboard pt-1 text-dark  dasboard-icon"></i>
                                    </a>
                                </Link>
                                <Link href="/booking">
                                    <a
                                        className="p-3 d-flex justify-content-md-end dasboard-icon"
                                        href="">
                                        <h6 className="d-none d-md-block me-2 text-dark">
                                            Track Order
                                        </h6>
                                        <i className="bx bx-compass text-dark pt-1 text-dark"></i>
                                    </a>
                                </Link>
                                <Link href="/calendar">
                                    <a
                                        className="p-3 d-flex justify-content-md-end dasboard-icon"
                                        href="">
                                        <h6 className="d-none d-md-block me-2 text-dark">
                                            Scheduler
                                        </h6>
                                        <i className="bx bxs-calendar-alt pt-1 text-dark"></i>
                                    </a>
                                </Link>
                                <Link href="/customers">
                                    <a
                                        className="p-3 d-flex justify-content-md-end"
                                        href="">
                                        <h6 className="d-none d-md-block me-2 text-dark">
                                            Customers
                                        </h6>
                                        <i className="bx bx-user text-dark"></i>
                                    </a>
                                </Link>

                                <a
                                    className="p-3 d-flex justify-content-md-end dasboard-icon"
                                    href="">
                                    <h6 className="d-none d-md-block me-2 text-dark">
                                        Settings
                                    </h6>
                                    <i className="bx bx-wrench pt-1 text-dark"></i>
                                </a>
                            </div>
                        </div>
                        <Link href="/login">
                            <a
                                className="p-3 d-flex justify-content-md-baseline"


                                href="">
                                <h6 className="d-none d-md-block me-2 text-dark">
                                    Logout
                                </h6>

                                <i className="bx bx-log-out"></i>

                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
