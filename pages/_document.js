import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            rel="icon"
            href="assets/images/favicon-32x32.png"
            type="image/png"
          />
          <link
            href="assets/plugins/notifications/css/lobibox.min.css"
            rel="stylesheet"
          />
          <link
            href="assets/plugins/vectormap/jquery-jvectormap-2.0.2.css"
            rel="stylesheet"
          />
          <link
            href="assets/plugins/simplebar/css/simplebar.css"
            rel="stylesheet"
          />
          <link
            href="assets/plugins/perfect-scrollbar/css/perfect-scrollbar.css"
            rel="stylesheet"
          />
          <link
            href="assets/plugins/metismenu/css/metisMenu.min.css"
            rel="stylesheet"
          />

          <link href="assets/css/pace.min.css" rel="stylesheet" />
          <script src="assets/js/pace.min.js"></script>

          {/* <link href="assets/css/bootstrap.min.css" rel="stylesheet" /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500&display=swap"
            rel="stylesheet"
          />
          <link href="assets/css/app.css" rel="stylesheet" />
          <link href="assets/css/icons.css" rel="stylesheet" />

          <link rel="stylesheet" href="assets/css/dark-theme.css" />
          <link rel="stylesheet" href="assets/css/semi-dark.css" />
          <link rel="stylesheet" href="assets/css/header-colors.css" />
        </Head>
        <body onload="info_noti()">
          <Main />
          <div className="switcher-wrapper">
            <div className="switcher-btn">
              {" "}
              <i className="bx bx-cog bx-spin"></i>
            </div>
            <div className="switcher-body">
              <div className="d-flex align-items-center">
                <h5 className="mb-0 text-uppercase">Theme Customizer</h5>
                <button
                  type="button"
                  className="btn-close ms-auto close-switcher"
                  aria-label="Close"
                ></button>
              </div>
              <hr />
              <h6 className="mb-0">Theme Styles</h6>
              <hr />
              <div className="d-flex align-items-center justify-content-between">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="lightmode"
                    checked
                  />
                  <label className="form-check-label" for="lightmode">
                    Light
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="darkmode"
                  />
                  <label className="form-check-label" for="darkmode">
                    Dark
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="semidark"
                  />
                  <label className="form-check-label" for="semidark">
                    Semi Dark
                  </label>
                </div>
              </div>
              <hr />
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  id="minimaltheme"
                  name="flexRadioDefault"
                />
                <label className="form-check-label" for="minimaltheme">
                  Minimal Theme
                </label>
              </div>
              <hr />
              <h6 className="mb-0">Header Colors</h6>
              <hr />
              <div className="header-colors-indigators">
                <div className="row row-cols-auto g-3">
                  <div className="col">
                    <div
                      className="indigator headercolor1"
                      id="headercolor1"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator headercolor2"
                      id="headercolor2"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator headercolor3"
                      id="headercolor3"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator headercolor4"
                      id="headercolor4"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator headercolor5"
                      id="headercolor5"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator headercolor6"
                      id="headercolor6"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator headercolor7"
                      id="headercolor7"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator headercolor8"
                      id="headercolor8"
                    ></div>
                  </div>
                </div>
              </div>
              <hr />
              <h6 className="mb-0">Sidebar Colors</h6>
              <hr />
              <div className="header-colors-indigators">
                <div className="row row-cols-auto g-3">
                  <div className="col">
                    <div
                      className="indigator sidebarcolor1"
                      id="sidebarcolor1"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator sidebarcolor2"
                      id="sidebarcolor2"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator sidebarcolor3"
                      id="sidebarcolor3"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator sidebarcolor4"
                      id="sidebarcolor4"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator sidebarcolor5"
                      id="sidebarcolor5"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator sidebarcolor6"
                      id="sidebarcolor6"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator sidebarcolor7"
                      id="sidebarcolor7"
                    ></div>
                  </div>
                  <div className="col">
                    <div
                      className="indigator sidebarcolor8"
                      id="sidebarcolor8"
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <script src="assets/js/bootstrap.bundle.min.js"></script>
          {/* <script src="assets/js/jquery.min.js"></script>
          <script src="assets/plugins/simplebar/js/simplebar.min.js"></script>
          <script src="assets/plugins/metismenu/js/metisMenu.min.js"></script>
          <script src="assets/plugins/perfect-scrollbar/js/perfect-scrollbar.js"></script>
          <script src="assets/plugins/vectormap/jquery-jvectormap-2.0.2.min.js"></script>
          <script src="assets/plugins/vectormap/jquery-jvectormap-world-mill-en.js"></script>
          <script src="assets/plugins/chartjs/js/Chart.min.js"></script>
          <script src="assets/plugins/chartjs/js/Chart.extension.js"></script>
          <script src="assets/plugins/sparkline-charts/jquery.sparkline.min.js"></script>
          <script src="assets/plugins/notifications/js/lobibox.min.js"></script>
          <script src="assets/plugins/notifications/js/notifications.min.js"></script>
          <script src="assets/js/index.js"></script>
          <script src="assets/js/app.js"></script> */}
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
