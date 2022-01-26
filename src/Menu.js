import React,{useEffect, useState} from 'react'
import { Link } from "react-router-dom";
function Menu() {
    // const [property,setProperty]=useState();
    // useEffect(()=>{
    //     const interval = setInterval(() => {
    //         var dataproperty = localStorage.getItem("property")
    //         setProperty(dataproperty);
    //       }, 10);
    //       return () => clearInterval(interval);
         
    // },[property]) 
    return (
            // <div style={{display:property}}>
 <div>
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
        </div>

    )
}

export default Menu
