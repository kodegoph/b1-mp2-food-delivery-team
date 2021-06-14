import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar-wrapper" data-simplebar="true">
      <div className="sidebar-header">
        <div>
          <img
            src="assets/images/logo-icon.png"
            className="logo-icon"
            alt="logo icon"
          />
        </div>
        <div>
          <h4 className="logo-text">Amdash</h4>
        </div>
        <div className="toggle-icon ms-auto">
          <i className="bx bx-arrow-to-left"></i>
        </div>
      </div>

      <ul className="metismenu" id="menu">
        <li>
          <a href="javascript:;" className="has-arrow">
            <div className="parent-icon">
              <i className="bx bx-home-circle"></i>
            </div>
            <div className="menu-title">Dashboard</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="index.html">
                <i className="bx bx-right-arrow-alt"></i>Default
              </a>
            </li>
            <li>
              {" "}
              <a href="index2.html">
                <i className="bx bx-right-arrow-alt"></i>Alternate
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" className="has-arrow">
            <div className="parent-icon">
              <i className="bx bx-category"></i>
            </div>
            <div className="menu-title">Application</div>
          </a>
          <ul>
            <li>
              {" "}
              <Link href="/statistics">
                <a>
                  <i className="bx bx-right-arrow-alt"></i>Statistics
                </a>
              </Link>
            </li>
            <li>
              {" "}
              <Link href="/chat">
                <a>
                  <i className="bx bx-right-arrow-alt"></i>Chat
                </a>
              </Link>
            </li>
            <li>
              {" "}
              <a href="app-file-manager.html">
                <i className="bx bx-right-arrow-alt"></i>File Manager
              </a>
            </li>
            <li>
              {" "}
              <a href="app-contact-list.html">
                <i className="bx bx-right-arrow-alt"></i>Contatcs
              </a>
            </li>
            <li>
              {" "}
              <a href="app-to-do.html">
                <i className="bx bx-right-arrow-alt"></i>Todo List
              </a>
            </li>
            <li>
              {" "}
              <a href="app-invoice.html">
                <i className="bx bx-right-arrow-alt"></i>Invoice
              </a>
            </li>
            <li>
              {" "}
              <a href="app-fullcalender.html">
                <i className="bx bx-right-arrow-alt"></i>Calendar
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-label">UI Elements</li>
        <li>
          <a href="widgets.html">
            <div className="parent-icon">
              <i className="bx bx-cookie"></i>
            </div>
            <div className="menu-title">Widgets</div>
          </a>
        </li>
        <li>
          <a href="javascript:;" className="has-arrow">
            <div className="parent-icon">
              <i className="bx bx-cart"></i>
            </div>
            <div className="menu-title">eCommerce</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="ecommerce-products.html">
                <i className="bx bx-right-arrow-alt"></i>Products
              </a>
            </li>
            <li>
              {" "}
              <a href="ecommerce-products-details.html">
                <i className="bx bx-right-arrow-alt"></i>Product Details
              </a>
            </li>
            <li>
              {" "}
              <a href="ecommerce-add-new-products.html">
                <i className="bx bx-right-arrow-alt"></i>Add New Products
              </a>
            </li>
            <li>
              {" "}
              <a href="ecommerce-orders.html">
                <i className="bx bx-right-arrow-alt"></i>Orders
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              <i className="bx bx-bookmark-heart"></i>
            </div>
            <div className="menu-title">Components</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="component-alerts.html">
                <i className="bx bx-right-arrow-alt"></i>Alerts
              </a>
            </li>
            <li>
              {" "}
              <a href="component-accordions.html">
                <i className="bx bx-right-arrow-alt"></i>Accordions
              </a>
            </li>
            <li>
              {" "}
              <a href="component-badges.html">
                <i className="bx bx-right-arrow-alt"></i>Badges
              </a>
            </li>
            <li>
              {" "}
              <a href="component-buttons.html">
                <i className="bx bx-right-arrow-alt"></i>Buttons
              </a>
            </li>
            <li>
              {" "}
              <a href="component-cards.html">
                <i className="bx bx-right-arrow-alt"></i>Cards
              </a>
            </li>
            <li>
              {" "}
              <a href="component-carousels.html">
                <i className="bx bx-right-arrow-alt"></i>Carousels
              </a>
            </li>
            <li>
              {" "}
              <a href="component-list-groups.html">
                <i className="bx bx-right-arrow-alt"></i>List Groups
              </a>
            </li>
            <li>
              {" "}
              <a href="component-media-object.html">
                <i className="bx bx-right-arrow-alt"></i>Media Objects
              </a>
            </li>
            <li>
              {" "}
              <a href="component-modals.html">
                <i className="bx bx-right-arrow-alt"></i>Modals
              </a>
            </li>
            <li>
              {" "}
              <a href="component-navs-tabs.html">
                <i className="bx bx-right-arrow-alt"></i>Navs & Tabs
              </a>
            </li>
            <li>
              {" "}
              <a href="component-navbar.html">
                <i className="bx bx-right-arrow-alt"></i>Navbar
              </a>
            </li>
            <li>
              {" "}
              <a href="component-paginations.html">
                <i className="bx bx-right-arrow-alt"></i>Pagination
              </a>
            </li>
            <li>
              {" "}
              <a href="component-popovers-tooltips.html">
                <i className="bx bx-right-arrow-alt"></i>Popovers & Tooltips
              </a>
            </li>
            <li>
              {" "}
              <a href="component-progress-bars.html">
                <i className="bx bx-right-arrow-alt"></i>Progress
              </a>
            </li>
            <li>
              {" "}
              <a href="component-spinners.html">
                <i className="bx bx-right-arrow-alt"></i>Spinners
              </a>
            </li>
            <li>
              {" "}
              <a href="component-notifications.html">
                <i className="bx bx-right-arrow-alt"></i>Notifications
              </a>
            </li>
            <li>
              {" "}
              <a href="component-avtars-chips.html">
                <i className="bx bx-right-arrow-alt"></i>Avatrs & Chips
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              <i className="bx bx-repeat"></i>
            </div>
            <div className="menu-title">Content</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="content-grid-system.html">
                <i className="bx bx-right-arrow-alt"></i>Grid System
              </a>
            </li>
            <li>
              {" "}
              <a href="content-typography.html">
                <i className="bx bx-right-arrow-alt"></i>Typography
              </a>
            </li>
            <li>
              {" "}
              <a href="content-text-utilities.html">
                <i className="bx bx-right-arrow-alt"></i>Text Utilities
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              {" "}
              <i className="bx bx-donate-blood"></i>
            </div>
            <div className="menu-title">Icons</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="icons-line-icons.html">
                <i className="bx bx-right-arrow-alt"></i>Line Icons
              </a>
            </li>
            <li>
              {" "}
              <a href="icons-boxicons.html">
                <i className="bx bx-right-arrow-alt"></i>Boxicons
              </a>
            </li>
            <li>
              {" "}
              <a href="icons-feather-icons.html">
                <i className="bx bx-right-arrow-alt"></i>Feather Icons
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-label">Forms & Tables</li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              <i className="bx bx-message-square-edit"></i>
            </div>
            <div className="menu-title">Forms</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="form-elements.html">
                <i className="bx bx-right-arrow-alt"></i>Form Elements
              </a>
            </li>
            <li>
              {" "}
              <a href="form-input-group.html">
                <i className="bx bx-right-arrow-alt"></i>Input Groups
              </a>
            </li>
            <li>
              {" "}
              <a href="form-layouts.html">
                <i className="bx bx-right-arrow-alt"></i>Forms Layouts
              </a>
            </li>
            <li>
              {" "}
              <a href="form-validations.html">
                <i className="bx bx-right-arrow-alt"></i>Form Validation
              </a>
            </li>
            <li>
              {" "}
              <a href="form-wizard.html">
                <i className="bx bx-right-arrow-alt"></i>Form Wizard
              </a>
            </li>
            <li>
              {" "}
              <a href="form-text-editor.html">
                <i className="bx bx-right-arrow-alt"></i>Text Editor
              </a>
            </li>
            <li>
              {" "}
              <a href="form-file-upload.html">
                <i className="bx bx-right-arrow-alt"></i>File Upload
              </a>
            </li>
            <li>
              {" "}
              <a href="form-date-time-pickes.html">
                <i className="bx bx-right-arrow-alt"></i>Date Pickers
              </a>
            </li>
            <li>
              {" "}
              <a href="form-select2.html">
                <i className="bx bx-right-arrow-alt"></i>Select2
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              <i className="bx bx-grid-alt"></i>
            </div>
            <div className="menu-title">Tables</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="table-basic-table.html">
                <i className="bx bx-right-arrow-alt"></i>Basic Table
              </a>
            </li>
            <li>
              {" "}
              <a href="table-datatable.html">
                <i className="bx bx-right-arrow-alt"></i>Data Table
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-label">Pages</li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              <i className="bx bx-lock"></i>
            </div>
            <div className="menu-title">Authentication</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="authentication-signin.html" target="_blank">
                <i className="bx bx-right-arrow-alt"></i>Sign In
              </a>
            </li>
            <li>
              {" "}
              <a href="authentication-signup.html" target="_blank">
                <i className="bx bx-right-arrow-alt"></i>Sign Up
              </a>
            </li>
            <li>
              {" "}
              <a
                href="authentication-signin-with-header-footer.html"
                target="_blank"
              >
                <i className="bx bx-right-arrow-alt"></i>Sign In with Header &
                Footer
              </a>
            </li>
            <li>
              {" "}
              <a
                href="authentication-signup-with-header-footer.html"
                target="_blank"
              >
                <i className="bx bx-right-arrow-alt"></i>Sign Up with Header &
                Footer
              </a>
            </li>
            <li>
              {" "}
              <a href="authentication-forgot-password.html" target="_blank">
                <i className="bx bx-right-arrow-alt"></i>Forgot Password
              </a>
            </li>
            <li>
              {" "}
              <a href="authentication-reset-password.html" target="_blank">
                <i className="bx bx-right-arrow-alt"></i>Reset Password
              </a>
            </li>
            <li>
              {" "}
              <a href="authentication-lock-screen.html" target="_blank">
                <i className="bx bx-right-arrow-alt"></i>Lock Screen
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="user-profile.html">
            <div className="parent-icon">
              <i className="bx bx-user-circle"></i>
            </div>
            <div className="menu-title">User Profile</div>
          </a>
        </li>
        <li>
          <a href="timeline.html">
            <div className="parent-icon">
              {" "}
              <i className="bx bx-video-recording"></i>
            </div>
            <div className="menu-title">Timeline</div>
          </a>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              <i className="bx bx-error"></i>
            </div>
            <div className="menu-title">Errors</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="errors-404-error.html" target="_blank">
                <i className="bx bx-right-arrow-alt"></i>404 Error
              </a>
            </li>
            <li>
              {" "}
              <a href="errors-500-error.html" target="_blank">
                <i className="bx bx-right-arrow-alt"></i>500 Error
              </a>
            </li>
            <li>
              {" "}
              <a href="errors-coming-soon.html" target="_blank">
                <i className="bx bx-right-arrow-alt"></i>Coming Soon
              </a>
            </li>
            <li>
              {" "}
              <a href="error-blank-page.html" target="_blank">
                <i className="bx bx-right-arrow-alt"></i>Blank Page
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="faq.html">
            <div className="parent-icon">
              <i className="bx bx-help-circle"></i>
            </div>
            <div className="menu-title">FAQ</div>
          </a>
        </li>
        <li>
          <a href="pricing-table.html">
            <div className="parent-icon">
              <i className="bx bx-diamond"></i>
            </div>
            <div className="menu-title">Pricing</div>
          </a>
        </li>
        <li className="menu-label">Charts & Maps</li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              <i className="bx bx-line-chart"></i>
            </div>
            <div className="menu-title">Charts</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="charts-apex-chart.html">
                <i className="bx bx-right-arrow-alt"></i>Apex
              </a>
            </li>
            <li>
              {" "}
              <a href="charts-chartjs.html">
                <i className="bx bx-right-arrow-alt"></i>Chartjs
              </a>
            </li>
            <li>
              {" "}
              <a href="charts-highcharts.html">
                <i className="bx bx-right-arrow-alt"></i>Highcharts
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              <i className="bx bx-map-alt"></i>
            </div>
            <div className="menu-title">Maps</div>
          </a>
          <ul>
            <li>
              {" "}
              <a href="map-google-maps.html">
                <i className="bx bx-right-arrow-alt"></i>Google Maps
              </a>
            </li>
            <li>
              {" "}
              <a href="map-vector-maps.html">
                <i className="bx bx-right-arrow-alt"></i>Vector Maps
              </a>
            </li>
          </ul>
        </li>
        <li className="menu-label">Others</li>
        <li>
          <a className="has-arrow" href="javascript:;">
            <div className="parent-icon">
              <i className="bx bx-menu"></i>
            </div>
            <div className="menu-title">Menu Levels</div>
          </a>
          <ul>
            <li>
              {" "}
              <a className="has-arrow" href="javascript:;">
                <i className="bx bx-right-arrow-alt"></i>Level One
              </a>
              <ul>
                <li>
                  {" "}
                  <a className="has-arrow" href="javascript:;">
                    <i className="bx bx-right-arrow-alt"></i>Level Two
                  </a>
                  <ul>
                    <li>
                      {" "}
                      <a href="javascript:;">
                        <i className="bx bx-right-arrow-alt"></i>Level Three
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li>
          <a href="javascript:;" target="_blank">
            <div className="parent-icon">
              <i className="bx bx-folder"></i>
            </div>
            <div className="menu-title">Documentation</div>
          </a>
        </li>
        <li>
          <a href="https://themeforest.net/user/codervent" target="_blank">
            <div className="parent-icon">
              <i className="bx bx-support"></i>
            </div>
            <div className="menu-title">Support</div>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
