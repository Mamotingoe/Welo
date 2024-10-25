import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import welo from "../../Assets/Image/sidebar/welo.png"
import dash from "../../Assets/Image/sidebar/dashboard.png"
import dash1 from "../../Assets/Image/sidebar/dashboard1.png"
import calendar from "../../Assets/Image/sidebar/calendar.png"
import calendar1 from "../../Assets/Image/sidebar/calendar1.png"
import clipboard from "../../Assets/Image/sidebar/clipboard-text.png"
import clipboard1 from "../../Assets/Image/sidebar/clipboard-text1.png"
import user from "../../Assets/Image/sidebar/user-octagon.png"
import user1 from "../../Assets/Image/sidebar/user-octagon1.png"
import bill from "../../Assets/Image/sidebar/bill.png"
import bill1 from "../../Assets/Image/sidebar/bill1.png"
import wallet from "../../Assets/Image/sidebar/wallet.png"
import wallet1 from "../../Assets/Image/sidebar/wallet1.png"
import question from "../../Assets/Image/sidebar/question.png"
import question1 from "../../Assets/Image/sidebar/question1.png"
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

const SideBar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const navigate = useNavigate()

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const [isModalOpens, setModalOpens] = useState(false);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  const [adminData, setAdminData] = useState({})

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("Admin"))

    if (admin) {
      setAdminData(admin)
    }
  }, [])

  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const handleLogout = () => {
    localStorage.clear()
    navigate("/healthworker")
  }

  return (
    <>
      <aside
        ref={sidebar}
        className={`absolute left-0 top-0 z-99 flex h-screen w-67 flex-col overflow-y-hidden duration-300 ease-linear dark:bg-boxdark 2xl:static xl:static lg:static 2xl:translate-x-0 xl:translate-x-0 lg:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        style={{ backgroundColor: "#fff" }}
      >
        {/* <!-- SIDEBAR HEADER --> */}
        <div className="flex items-center justify-center">
          <div className='py-3 ms-10'>
            <img src={welo} className='w-40 rounded-full' alt="" />
          </div>
          <div className="ms-8">
            <button
              ref={trigger}
              onClick={() => setSidebarOpen(!sidebarOpen)}
              aria-controls="sidebar"
              aria-expanded={sidebarOpen}
              className="lg:hidden block"
            >
              <svg
                className="fill-current"
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                  fill=""
                />
              </svg>
            </button>
          </div>
        </div>
        {/* <!-- SIDEBAR HEADER --> */}

        <div className="no-scrollbar flex flex-col justify-between overflow-y-auto duration-300 ease-linear h-full px-10 py-3">
          <div className="flex justify-start">
            <div>

              <Link to={"/healthworker/workerdashboard"} onClick={() => setSidebarOpen(!sidebarOpen)} >
                <span className={location.pathname == "/healthworker/workerdashboard" ? "flex items-center bg-[#EA5F5F] w-48 py-3 px-4 rounded-xl my-6" : "my-6 flex items-center w-48 py-3 px-4"}>
                  <img src={location.pathname == "/healthworker/workerdashboard" ? dash1 : dash} className="w-6" alt="" />
                  <p className={location.pathname == "/healthworker/workerdashboard" ? "text-[#fff] ms-3 fontNew font-medium" : "text-[#4B4B4B] ms-3 fontNew font-medium"}>Dashboard</p>
                </span>
              </Link>

              <Link to={"/healthworker/appointments"} onClick={() => setSidebarOpen(!sidebarOpen)} >
                <span className={location.pathname == "/healthworker/appointments" || location.pathname == "/healthworker/appointments/appointmentdetails" ? "flex items-center bg-[#EA5F5F] w-48 py-3 px-4 rounded-xl my-6" : "my-6 flex items-center w-48 py-3 px-4"}>
                  <img src={location.pathname == "/healthworker/appointments" || location.pathname == "/healthworker/appointments/appointmentdetails" ? clipboard1 : clipboard} className="w-6" alt="" />
                  <p className={location.pathname == "/healthworker/appointments" || location.pathname == "/healthworker/appointments/appointmentdetails" ? "text-[#fff] ms-3 fontNew font-medium" : "text-[#4B4B4B] ms-3 fontNew font-medium"}>Appointments</p>
                </span>
              </Link>

              <Link to={"/healthworker/earnings"} onClick={() => setSidebarOpen(!sidebarOpen)} >
                <span className={location.pathname == "/healthworker/earnings" ? "flex items-center bg-[#EA5F5F] w-48 py-3 px-4 rounded-xl my-6" : "my-6 flex items-center w-48 py-3 px-4"}>
                  <img src={location.pathname == "/healthworker/earnings" ? wallet1 : wallet} className="w-6" alt="" />
                  <p className={location.pathname == "/healthworker/earnings" ? "text-[#fff] ms-3 fontNew font-medium" : "text-[#4B4B4B] ms-3 fontNew font-medium"}>Earnings</p>
                </span>
              </Link>

              <Link to={"/healthworker/resources"} onClick={() => setSidebarOpen(!sidebarOpen)} >
                <span className={location.pathname == "/healthworker/resources" || location.pathname == "/healthworker/resources/resourcesdetails" ? "flex items-center bg-[#EA5F5F] w-48 py-3 px-4 rounded-xl my-6" : "my-6 flex items-center w-48 py-3 px-4"}>
                  <img src={location.pathname == "/healthworker/resources" || location.pathname == "/healthworker/resources/resourcesdetails" ? user1 : user} className="w-6" alt="" />
                  <p className={location.pathname == "/healthworker/resources" || location.pathname == "/healthworker/resources/resourcesdetails" ? "text-[#fff] ms-3 fontNew font-medium" : "text-[#4B4B4B] ms-3 fontNew font-medium"}>Resources</p>
                </span>
              </Link>

              <Link to={"/healthworker/support"} onClick={() => setSidebarOpen(!sidebarOpen)} >
                <span className={location.pathname == "/healthworker/support" ? "flex items-center bg-[#EA5F5F] w-48 py-3 px-4 rounded-xl my-6" : "my-6 flex items-center w-48 py-3 px-4"}>
                  <img src={location.pathname == "/healthworker/support" ? question1 : question} className="w-6" alt="" />
                  <p className={location.pathname == "/healthworker/support" ? "text-[#fff] ms-3 fontNew font-medium" : "text-[#4B4B4B] ms-3 fontNew font-medium"}>Support</p>
                </span>
              </Link>

            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
