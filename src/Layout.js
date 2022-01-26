import React from 'react';
import { Link } from 'react-router-dom';

function Layout() {
  return <div>

<nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* Left navbar links */}
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" data-widget="pushmenu" to="/" role="button"><i className="fas fa-bars" /></Link>
      </li>
      {/* <li className="nav-item d-none d-sm-inline-block">
        <a href="index3.html" className="nav-link">Home</a>
      </li>
      <li className="nav-item d-none d-sm-inline-block">
        <a href="#" className="nav-link">Contact</a>
      </li> */}
    </ul>
    {/* Right navbar links */}
    <ul className="navbar-nav ml-auto">
      {/* Navbar Search */}
      <li className="nav-item">
        <Link className="nav-link" data-widget="navbar-search" to="/" role="button">
          <i className="fas fa-search" />
        </Link>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search" />
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>
      {/* Messages Dropdown Menu */}
      <li className="nav-item dropdown">
        <Link className="nav-link" data-toggle="dropdown" to="/">
          <i className="far fa-comments" />
          <span className="badge badge-danger navbar-badge">3</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <Link to="/" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img src="dist/img/user1-128x128.jpg" alt="User Avatar" className="img-size-50 mr-3 img-circle" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Brad Diesel
                  <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">Call me whenever you can...</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End */}
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  John Pierce
                  <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">I got your message bro</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End */}
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            {/* Message Start */}
            <div className="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" className="img-size-50 img-circle mr-3" />
              <div className="media-body">
                <h3 className="dropdown-item-title">
                  Nora Silvester
                  <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                </h3>
                <p className="text-sm">The subject goes here</p>
                <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
              </div>
            </div>
            {/* Message End */}
          </Link>
          <div className="dropdown-divider" />
          <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      {/* Notifications Dropdown Menu */}
      <li className="nav-item dropdown">
        <Link className="nav-link" data-toggle="dropdown" to="/">
          <i className="far fa-bell" />
          <span className="badge badge-warning navbar-badge">15</span>
        </Link>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span className="dropdown-item dropdown-header">15 Notifications</span>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            <i className="fas fa-envelope mr-2" /> 4 new messages
            <span className="float-right text-muted text-sm">3 mins</span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            <i className="fas fa-users mr-2" /> 8 friend requests
            <span className="float-right text-muted text-sm">12 hours</span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item">
            <i className="fas fa-file mr-2" /> 3 new reports
            <span className="float-right text-muted text-sm">2 days</span>
          </Link>
          <div className="dropdown-divider" />
          <Link to="/" className="dropdown-item dropdown-footer">See All Notifications</Link>
        </div>
      </li>
      <li className="nav-item">
        <Link className="nav-link" data-widget="fullscreen" to="/" role="button">
          <i className="fas fa-expand-arrows-alt" />
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" data-widget="control-sidebar" data-slide="true" to="/" role="button">
          <i className="fas fa-th-large" />
        </Link>
      </li>
      {/* Sign Out Dropdown Menu */}
      <li className="nav-item dropdown">
        <Link className="nav-link" data-toggle="dropdown" to="/">
          <i class="fas fa-sign-out-alt" />
        </Link>
        <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <div className="dropdown-divider" />
          <Link to="/login" onClick={()=>removeStorageData()} className="dropdown-item">
            <i className="fas fa-envelope mr-2" />Sign Out</Link>
          <div className="dropdown-divider" />
          
        </div>
      </li>
    </ul>
  </nav>
  <aside className="main-sidebar sidebar-dark-primary elevation-4">
                {/* Brand Logo */}
                <a href="index3.html" className="brand-link">
                    <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                    <span className="brand-text font-weight-light">Girnar</span>
                </a>
                {/* Sidebar */}
                <div className="sidebar">
                    {/* Sidebar user panel (optional) */}
                    {/* <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                        <div className="image">
                            <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                        </div> */}
                        {/* <div className="info">
                            <a href="#" className="d-block">Admin</a>
                        </div> */}
                    {/* </div> */}
                    {/* SidebarSearch Form */}
                    {/* <div className="form-inline">
                        <div className="input-group" data-widget="sidebar-search">
                            <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
                            <div className="input-group-append">
                                <button className="btn btn-sidebar">
                                    <i className="fas fa-search fa-fw" />
                                </button>
                            </div>
                        </div>
                    </div> */}
                    {/* Sidebar Menu */}
                    <nav className='mt-2'>
                        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                            {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                            <li class="nav-item menu-open">
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        <Link to="" className="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Dashboard</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                            {/* <li class="nav-header">Customer Management</li> */}
                            <li class="nav-item">
                                <Link to="/" class="nav-link">
                                    <i class="nav-icon far fa-envelope"></i>
                                    <p>
                                    Customer Management
                                        <i class="fas fa-angle-left right"></i>
                                    </p>
                                </Link>
                                <ul class="nav nav-treeview">
                                    <li class="nav-item">
                                        {/* <Link to="parts" className="nav-link">
                                            <i class="far fa-circle nav-icon"></i>
                                            <p>Parts</p>
                                        </Link> */}

                                        <Link to="inquiry" className="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                            <p>Inquiry</p>
                                        </Link>
                                        <Link to="quotation" className="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                            <p>Quotation</p>
                                        </Link>
                                        <Link to="po_generation" className="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                            <p>PO Generation</p>
                                        </Link>
                                        <Link to="inspection_report" className="nav-link">
                                        <i class="far fa-circle nav-icon"></i>
                                            <p>Inspection Report</p>
                                        </Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                    {/* /.sidebar-menu */}
                </div>
                {/* /.sidebar */}
            </aside>
  </div>;
}

export default Layout;
