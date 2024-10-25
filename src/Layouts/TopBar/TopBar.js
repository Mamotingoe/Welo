import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import notification from "../../Assets/Image/corporate/notification.png"
import side from "../../Assets/Image/corporate/side.png"
import profile from "../../Assets/Image/corporate/profile 2.png"
import Popover from "../../Base-Component/Popover/Popover";
import message from "../../Assets/Image/corporate/messages.png"
import notifications from "../../Assets/Image/Healthworker/notification.png"
import Menu from "../../Base-Component/Menu/Menu";
import Dialog from "../../Base-Component/Dialog/Dialog";

function TopBar(props) {

    const location = useLocation()
    const navigate = useNavigate()
    const [isModalOpens, setModalOpens] = useState(false);
    const [isLogOut, setIsLogOut] = useState(false)

    const [notificationData, setNotificationData] = useState([
        {
            image: notifications,
            text: "WelO sent you a request for an HIV Clinic for Anglo American Company.",
            time: "20 min. ago"
        },
        {
            image: notifications,
            text: "WelO sent you a request for an HIV Clinic for Anglo American Company.",
            time: "20 min. ago"
        },
        {
            image: notifications,
            text: "WelO sent you a request for an HIV Clinic for Anglo American Company.",
            time: "20 min. ago"
        },
        {
            image: notifications,
            text: "WelO sent you a request for an HIV Clinic for Anglo American Company.",
            time: "20 min. ago"
        },
        {
            image: notifications,
            text: "WelO sent you a request for an HIV Clinic for Anglo American Company.",
            time: "20 min. ago"
        },
    ])

    const handleLogout = () => {
        localStorage.clear()
        navigate("/healthworker")
    }

    const handleSubmit = () => {
        navigate("/healthworker/messages")
    }

    return (
        <>
            <header className="sticky top-0 z-9 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
                <div className="flex flex-grow items-center justify-between lg:justify-between py-4 px-4 shadow-2 md:px-8">
                    <div className="flex items-center justify-between gap-2 sm:gap-4">
                        {/* <!-- Hamburger Toggle BTN --> */}
                        <button
                            aria-controls="sidebar"
                            onClick={(e) => {
                                e.stopPropagation();
                                props.setSidebarOpen(!props.sidebarOpen);
                            }}
                            className="z-99 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark 2xl:hidden xl:hidden lg:hidden"
                        >
                            <span className="relative block h-5.5 w-5.5 cursor-pointer">
                                <span className="du-block absolute right-0 h-full w-full">
                                    <span
                                        className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!w-full delay-300"
                                            }`}
                                    ></span>
                                    <span
                                        className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "delay-400 !w-full"
                                            }`}
                                    ></span>
                                    <span
                                        className={`relative top-0 left-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!w-full delay-500"
                                            }`}
                                    ></span>
                                </span>
                                <span className="absolute right-0 h-full w-full rotate-45">
                                    <span
                                        className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!h-0 !delay-[0]"
                                            }`}
                                    ></span>
                                    <span
                                        className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${!props.sidebarOpen && "!h-0 !delay-200"
                                            }`}
                                    ></span>
                                </span>
                            </span>
                        </button>
                        <div className="sm:flex items-center fontNew hidden">
                            <p className="xl:text-xl lg:text-lg md:text-base font-semibold capitalize">{location.pathname.split("/")[2]}</p>
                            {
                                location.pathname.split("/")[3] ?
                                    <img src={side} className="w-2 mx-3 opacity-25" alt="" />
                                    : ""
                            }
                            {
                                location.pathname.split("/")[3] ?
                                    <p className="text-gray-400 capitalize">{location.pathname.split("/")[3]}</p>
                                    : ""
                            }
                        </div>
                    </div>

                    <div className="flex items-center">
                        <img src={message} onClick={handleSubmit} className="w-10 cursor-pointer" alt="" />
                        <Popover className="relative">
                            <Popover.Button className="outline-0">
                                <div>
                                    <img src={notification} className="w-10 mx-6 cursor-pointer" alt="" />
                                </div>
                            </Popover.Button>
                            <Popover.Panel id="notifyside" className="lg:w-[450px] w-[280px] h-[500px] overflow-x-hidden px-6 mt-7">
                                <div className="cursor-pointer">
                                    {
                                        notificationData.map((items, index) => {
                                            return (
                                                <div key={index} className="flex justify-around items-center fontNew py-2">
                                                    <img src={items.image} className="w-14 h-14 rounded-full" alt="" />
                                                    <div className="ps-3">
                                                        <p className="m-0 text-black font-medium">{items.text}</p>
                                                        <p className="text-sm text-gray-500">{items.time}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </Popover.Panel>
                        </Popover>
                        <div>
                            <Menu>
                                <Menu.Button className="block">
                                    <img src={profile} className="w-10 h-10 rounded-full" alt="" />
                                </Menu.Button>
                                <Menu.Items className="w-56 mt-px bg-white mt-6 fontNew">
                                    <Menu.Item
                                        className="hover:bg-[#EA5F5F] hover:text-white text-[#303438] flex justify-between items-center py-3"
                                        onClick={() => { navigate("/healthworker/profile") }}
                                    >
                                        <div className="flex items-center">
                                            <p className="ms-3">Profile</p>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item
                                        className="hover:bg-[#EA5F5F] hover:text-white text-[#303438] flex justify-between items-center py-3"
                                        onClick={() => { navigate("/healthworker/setting") }}
                                    >
                                        <div className="flex items-center">
                                            <p className="ms-3">Settings</p>
                                        </div>
                                    </Menu.Item>
                                    <Menu.Item
                                        className="hover:bg-[#EA5F5F] hover:text-white text-[#303438] flex justify-between items-center py-3"
                                        onClick={() => { setIsLogOut(true) }}
                                    >
                                        <div className="flex items-center">
                                            <p className="m-0 ms-3">Log out</p>
                                        </div>
                                    </Menu.Item>
                                </Menu.Items>
                            </Menu>
                        </div>
                    </div>
                </div>
            </header>

            <Dialog
                open={isLogOut}
                onClose={() => setIsLogOut(false)}
                size="2xl"
            >
                <Dialog.Panel>
                    <Dialog.Description className="rounded-none border-2 border-white">
                        <div className='flex justify-center text-center my-4 sm:px-16 px-4 fontNew'>
                            <div>
                                <h1 className='text-xl font-semibold text-black mt-6'>Log Out?</h1>
                                <p className='text-sm text-gray-500 my-3'>Are you certain you wish to proceed with <br /> logging out?</p>
                                <div className='mt-13 mb-5'>
                                    <button className='bg-[#F4F5FA] py-[14px] sm:w-36 w-30 text-sm rounded-xl sm:mx-3 mx-2' onClick={() => setIsLogOut(false)}>Close</button>
                                    <button className='bg-[#EA5F5F] py-[14px] sm:w-36 w-30 text-sm rounded-xl sm:mx-3 mx-2 text-white' onClick={() => { navigate("/welo_admin") }}>Yes, Log Out</button>
                                </div>
                            </div>
                        </div>
                    </Dialog.Description>
                </Dialog.Panel>
            </Dialog>
        </>
    );
}

export default TopBar;
