import Document, {Html, Head, Main, NextScript} from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    {/* <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
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
                    <link
                        rel="stylesheet"
                        href="assets/css/header-colors.css"
                    />
                </Head>
                <body onload="info_noti()">
                    <Main />
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
