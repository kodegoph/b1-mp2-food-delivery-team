import Link from "next/link";
import Image from "next/Image";

import Picture from "../public/assets/images/k-shuttle.svg";
const Sidebar = () => {
    return (
        <aside
            className="position-fixed side-menu vh-100"
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
                            <div className="dash-icons d-flex align-items-center flex-column">
                                <Link href="/">
                                    <a
                                        className="p-3 d-flex justify-content-md-end"
                                        href="">
                                        <h6 className="d-none d-md-block me-2">
                                            Dashboard
                                        </h6>
                                        <i className="bx bxs-dashboard"></i>
                                    </a>
                                </Link>
                                <Link href="/booking">
                                    <a
                                        className="p-3 d-flex justify-content-md-end"
                                        href="">
                                        <h6 className="d-none d-md-block me-2">
                                            Track Order
                                        </h6>
                                        <i className="bx bx-compass"></i>
                                    </a>
                                </Link>
                                <Link href="/calendar">
                                    <a
                                        className="p-3 d-flex justify-content-md-end"
                                        href="">
                                        <h6 className="d-none d-md-block me-2">
                                            Scheduler
                                        </h6>
                                        <i className="bx bxs-calendar-alt"></i>
                                    </a>
                                </Link>
                                <Link href="/customers">
                                    <a
                                        className="p-3 d-flex justify-content-md-end"
                                        href="">
                                        <h6 className="d-none d-md-block me-2">
                                            Customers
                                        </h6>
                                        <i className="bx bx-user"></i>
                                    </a>
                                </Link>

                                <a
                                    className="p-3 d-flex justify-content-md-end"
                                    href="">
                                    <h6 className="d-none d-md-block me-2">
                                        Settings
                                    </h6>
                                    <i className="bx bx-wrench"></i>
                                </a>
                            </div>
                        </div>
                        <Link href="/login">
                            <a
                                className="p-3 d-flex justify-content-md-baseline"
                                href="">
                                <h6 className="d-none d-md-block me-2">
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
