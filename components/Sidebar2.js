import Image from "next/Image";


const Sidebar = () => {
    return (
        <>
        <div className="sidebar" data-color="white">
               <Image
                  src={Picture}
                    alt="logo"
                    className="img-logo"
                    width={24}
                    height={19}
                    layout={"responsive"}
                   />
            <div className="sidebar-wrapper" id="sidebar-wrapper">
                <ul className="nav">
                <li className="active">
                    <a href="./dashboard.html">
                    <i className="now-ui-icons design_app"></i>
                    <p>Dashboard</p>
                    </a>
                </li>
                <li>
                    <a href="./icons.html">
                    <i className="now-ui-icons education_atom"></i>
                    <p>Icons</p>
                    </a>
                </li>
                <li>
                    <a href="./map.html">
                    <i className="now-ui-icons location_map-big"></i>
                    <p>Maps</p>
                    </a>
                </li>
                <li>
                    <a href="./notifications.html">
                    <i className="now-ui-icons ui-1_bell-53"></i>
                    <p>Notifications</p>
                    </a>
                </li>
                <li>
                    <a href="./user.html">
                    <i className="now-ui-icons users_single-02"></i>
                    <p>User Profile</p>
                    </a>
                </li>
                <li>
                    <a href="./tables.html">
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    <p>Table List</p>
                    </a>
                </li>
                <li>
                    <a href="./typography.html">
                    <i className="now-ui-icons text_caps-small"></i>
                    <p>Typography</p>
                    </a>
                </li>
                <li className="active-pro">
                    <a href="./upgrade.html">
                    <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                    <p>Upgrade to PRO</p>
                    </a>
                </li>
                        </ul>
                    </div>
                    </div>
                    <div className="main-panel" id="main-panel"/>
                    <nav
                        className="
                        navbar navbar-expand-lg navbar-transparent
                        bg-primary
                        navbar-absolute
                        "
                            >
                <div className="container-fluid">
                <div className="navbar-wrapper">
                    <div className="navbar-toggle">
                    <button type="button" className="navbar-toggler">
                        <span className="navbar-toggler-bar bar1"></span>
                        <span className="navbar-toggler-bar bar2"></span>
                        <span className="navbar-toggler-bar bar3"></span>
                    </button>
                    </div>
                    <a className="navbar-brand" href="#pablo">Dashboard</a>
                </div>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navigation"
                    aria-controls="navigation-index"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                    <span className="navbar-toggler-bar navbar-kebab"></span>
                </button>
                <div
                    className="collapse navbar-collapse justify-content-end"
                    id="navigation"
                >
                    <form>
                    <div className="input-group no-border">
                        <input
                        type="text"
                        value=""
                        className="form-control"
                        placeholder="Search..."
                        />
                        <div className="input-group-append">
                        <div className="input-group-text">
                            <i className="now-ui-icons ui-1_zoom-bold"></i>
                        </div>
                        </div>
                    </div>
                    </form>
                    <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#pablo">
                        <i className="now-ui-icons media-2_sound-wave"></i>
                        <p>
                            <span className="d-lg-none d-md-block">Stats</span>
                        </p>
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a
                        className="nav-link dropdown-toggle"
                        id="navbarDropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                        >
                        <i className="now-ui-icons location_world"></i>
                        <p>
                            <span className="d-lg-none d-md-block">Some Actions</span>
                        </p>
                        </a>
                        <div
                        className="dropdown-menu dropdown-menu-right"
                        aria-labelledby="navbarDropdownMenuLink"
                        >
                        <a className="dropdown-item" href="#">Action</a>
                        <a className="dropdown-item" href="#">Another action</a>
                        <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#pablo">
                        <i className="now-ui-icons users_single-02"></i>
                        <p>
                            <span className="d-lg-none d-md-block">Account</span>
                        </p>
                        </a>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
            </>
            );
            };
            export default Sidebar;