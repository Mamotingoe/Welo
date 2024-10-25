import React, { useRef, useState } from 'react'
import nodata from "../../Assets/Image/corporate/nodata.png"
import arrow1 from "../../Assets/Image/Healthworker/arrow-white.png"
import search from "../../Assets/Image/corporate/Search.png"
import { useNavigate } from 'react-router-dom';

function Appointments() {

    const navigate = useNavigate()
    const scrollRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);

    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isFlag, setIsFlag] = useState(0)
    const [pageNo, setPageNo] = useState(1)
    const [totalPage, setTotalPage] = useState(3)

    const [searchData, setSearchData] = useState("")

    const [requestList, setRequestList] = useState([
        {
            name: "Anglo American: HIV Clinic",
            date: "06 Mar, 2024",
            visit_time: "10:00 AM - 01:00 PM",
            employee: "100",
            site: "7620 Crist Estate, Prosaccomouth, Vermont.",
            fee: "R1200.00",
            status: 2
        },
        {
            name: "Anglo American: HIV Clinic",
            date: "06 Mar, 2024",
            visit_time: "10:00 AM - 01:00 PM",
            employee: "100",
            site: "7620 Crist Estate, Prosaccomouth, Vermont.",
            fee: "R1200.00",
            status: 2
        },
        {
            name: "Anglo American: HIV Clinic",
            date: "06 Mar, 2024",
            visit_time: "10:00 AM - 01:00 PM",
            employee: "100",
            site: "7620 Crist Estate, Prosaccomouth, Vermont.",
            fee: "R1200.00",
            status: 2
        },
        {
            name: "Anglo American: HIV Clinic",
            date: "06 Mar, 2024",
            visit_time: "10:00 AM - 01:00 PM",
            employee: "100",
            site: "7620 Crist Estate, Prosaccomouth, Vermont.",
            fee: "R1200.00",
            status: 2
        },

    ])

    const handleDetails = (data) => {
        navigate("/healthworker/appointments/appointmentdetails", { state: { Data: data } })
    }

    const renderPaginationButtonss = () => {
        const maxPagesToShow = 3;
        const buttons = [];
        const startPage = Math.max(1, pageNo - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPage, startPage + maxPagesToShow - 1);

        for (let i = startPage; i <= endPage; i++) {
            buttons.push(
                <button
                    key={i}
                    onClick={() => handlePageChange(i)}
                    className={i === pageNo ? 'px-4 py-[7px] mx-1 bg-[#EA5F5F1A] rounded-md text-[#EA5F5F]' : 'px-4 py-[7px] mx-1 text-[#EA5F5F]'}
                >
                    {i}
                </button>
            );
        }
        return buttons;
    };

    const handlePageChange = (page) => {
        setPageNo(page);
    };


    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    const startDragging = (e) => {
        setIsDragging(true);
        setStartX(e.pageX - scrollRef.current.offsetLeft);
        setScrollLeft(scrollRef.current.scrollLeft);
        document.body.style.userSelect = 'none'; // Disable text selection
    };

    const stopDragging = () => {
        setIsDragging(false);
        document.body.style.userSelect = ''; // Re-enable text selection
    };

    const onDragging = (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - scrollRef.current.offsetLeft;
        const walk = (x - startX) * 2; // scroll-fast
        scrollRef.current.scrollLeft = scrollLeft - walk;
    };
    return (
        <div className="grid grid-cols-12 gap-4 md:m-4 m-1 fontNew">
            <div className="col-span-12 lg:hidden block">
                <div className="flex items-center overflow-hidden w-full relative">
                    <button
                        className="bg-transparent border-2 border-[#EA5F5F] text-[#EA5F5F] text-xl w-7 h-7 flex items-center justify-center rounded-full cursor-pointer px-3"
                        onClick={() => scroll('left')}
                    >
                        {'<'}
                    </button>
                    <div
                        className="flex overflow-x-auto scroll-smooth whitespace-nowrap scrollbar-hide"
                        ref={scrollRef}
                        onMouseDown={startDragging}
                        onMouseLeave={stopDragging}
                        onMouseUp={stopDragging}
                        onMouseMove={onDragging}
                    >
                        <div onClick={() => setIsFlag(0)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 0 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                            Upcoming
                        </div>
                        <div onClick={() => setIsFlag(1)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 1 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                            New
                        </div>
                        <div onClick={() => setIsFlag(2)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 2 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                            In Progress
                        </div>
                        <div onClick={() => setIsFlag(3)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 3 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                            Completed
                        </div>
                    </div>
                    <button
                        className="bg-transparent border-2 border-[#EA5F5F] text-[#EA5F5F] text-xl w-7 h-7 flex items-center justify-center rounded-full cursor-pointer px-3"
                        onClick={() => scroll('right')}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
            <div className="lg:col-span-3 col-span-12 lg:block hidden">
                <div className='bg-white bg-contain rounded-lg lg:px-6 px-3 py-3'>
                    <div onClick={() => setIsFlag(0)} className={isFlag == 0 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                        <p className='font-medium'>Upcoming</p>
                    </div>
                    <div onClick={() => setIsFlag(1)} className={isFlag == 1 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                        <p className='font-medium'>New</p>
                    </div>
                    <div onClick={() => setIsFlag(2)} className={isFlag == 2 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                        <p className='font-medium'>In Progress</p>
                    </div>
                    <div onClick={() => setIsFlag(3)} className={isFlag == 3 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                        <p className='font-medium'>Completed</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-9 col-span-12">
                {
                    isFlag == 0 ?
                        <div className='grid grid-cols-12 lg:gap-5 gap-3'>
                            <div className='col-span-12 '>
                                <div className='flex flex-wrap items-center justify-between'>
                                    <h3 className='font-base font-medium bg-white fontNew px-7 py-5 mb-2 rounded-[8px]'>04 Upcoming requests</h3>
                                    <div className='flex sm:w-70 w-full h-10 px-4 rounded-xl bg-white items-center'>
                                        <input
                                            type="text"
                                            required
                                            className='bg-transparent border-none outline-none sm:w-70 w-full h-10 text-sm fontNew'
                                            placeholder='Search...'
                                            name='search_text'
                                            value={searchData}
                                            onChange={(e) => setSearchData(e.target.value)}
                                        />
                                        <img src={search} className='p-2 w-10 cursor-pointer' alt="" />
                                    </div>
                                </div>
                            </div>
                            {
                                requestList == "" ?
                                    <div className='col-span-12 h-[70vh] justify-center flex items-center'>
                                        <img src={nodata} className='w-28' alt="" />
                                    </div>
                                    :
                                    <>
                                        {
                                            requestList.map((item, index) => {
                                                return (
                                                    <div onClick={() => handleDetails(1)} key={index} className='2xl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12 bg-white sm:px-7 px-3 py-3 rounded-[8px] fontNew hover:drop-shadow-lg duration-300 cursor-pointer'>
                                                        <div className='flex justify-between border-b-2 border-dashed py-5'>
                                                            <div>
                                                                <p className='text-lg font-semibold pb-1'>{item.name || ""}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-between py-4'>
                                                            <div>
                                                                <p className='text-base text-gray-400 pb-1'>Date:</p>
                                                                <p className='text-base font-medium'>{item.date || ""}</p>
                                                            </div>
                                                            <div>
                                                                <button className='text-sm bg-[#EA5F5F] text-white w-16 h-16 rounded-[10px]'>Today</button>
                                                            </div>
                                                        </div>
                                                        <div className='flex justify-start py-3'>
                                                            <div>
                                                                <p className='text-base text-gray-400 pb-1'>Visit Time:</p>
                                                                <p className='text-base font-medium'>{item.visit_time || ""}</p>
                                                            </div>
                                                            <div className='ms-10'>
                                                                <p className='text-base text-gray-400 pb-1'>No. of employees:</p>
                                                                <p className='text-base font-medium'>{item.employee || ""}</p>
                                                            </div>
                                                        </div>
                                                        <div className='py-3'>
                                                            <p className='text-base text-gray-400 pb-1'>Site:</p>
                                                            <p className='text-base font-medium'>{item.site || ""}</p>
                                                        </div>
                                                        <div className='py-3'>
                                                            <p className='text-base text-gray-400 pb-1'>Fee:</p>
                                                            <p className='text-2xl font-medium'>{item.fee || ""}</p>
                                                        </div>
                                                        <div className='py-3 flex justify-start items-center'>
                                                            <button className='flex items-center bg-[#00987C] py-3 px-3 rounded-[8px] mr-6'>
                                                                <p className='text-sm text-white mr-2'>View Details</p>
                                                                <img src={arrow1} className='w-4' alt="" />
                                                            </button>
                                                            <button className='bg-[#7424f21a] py-2 px-3 text-[#7424F2] text-sm rounded-[8px]'>Confirmed</button>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </>
                            }
                        </div>
                        : isFlag == 1 ?
                            <div className='grid grid-cols-12 lg:gap-5 gap-3'>
                                <div className='col-span-12 '>
                                    <div className='flex flex-wrap items-center justify-between'>
                                        <h3 className='font-base font-medium bg-white fontNew px-7 py-5 mb-2 rounded-[8px]'>10 New requests</h3>
                                        <div className='flex sm:w-70 w-full h-10 px-4 rounded-xl bg-white items-center'>
                                            <input
                                                type="text"
                                                required
                                                className='bg-transparent border-none outline-none sm:w-70 w-full h-10 text-sm fontNew'
                                                placeholder='Search...'
                                                name='search_text'
                                                value={searchData}
                                                onChange={(e) => setSearchData(e.target.value)}
                                            />
                                            <img src={search} className='p-2 w-10 cursor-pointer' alt="" />
                                        </div>
                                    </div>
                                </div>
                                {
                                    requestList == "" ?
                                        <div className='col-span-12 h-[70vh] justify-center flex items-center'>
                                            <img src={nodata} className='w-28' alt="" />
                                        </div>
                                        :
                                        <>
                                            {
                                                requestList.map((item, index) => {
                                                    return (
                                                        <div onClick={() => handleDetails(2)} key={index} className='2xl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12 bg-white sm:px-7 px-3 py-3 rounded-[8px] fontNew hover:drop-shadow-lg duration-300 cursor-pointer'>
                                                            <div className='flex justify-between border-b-2 border-dashed py-5'>
                                                                <div>
                                                                    <p className='text-lg font-semibold pb-1'>{item.name || ""}</p>
                                                                </div>
                                                            </div>
                                                            <div className='flex justify-between py-4'>
                                                                <div>
                                                                    <p className='text-base text-gray-400 pb-1'>Date:</p>
                                                                    <p className='text-base font-medium'>{item.date || ""}</p>
                                                                </div>
                                                                <div>
                                                                    <button className='text-sm bg-[#EA5F5F] text-white w-16 h-16 rounded-[10px]'>Today</button>
                                                                </div>
                                                            </div>
                                                            <div className='flex justify-start py-3'>
                                                                <div>
                                                                    <p className='text-base text-gray-400 pb-1'>Visit Time:</p>
                                                                    <p className='text-base font-medium'>{item.visit_time || ""}</p>
                                                                </div>
                                                                <div className='ms-10'>
                                                                    <p className='text-base text-gray-400 pb-1'>No. of employees:</p>
                                                                    <p className='text-base font-medium'>{item.employee || ""}</p>
                                                                </div>
                                                            </div>
                                                            <div className='py-3'>
                                                                <p className='text-base text-gray-400 pb-1'>Site:</p>
                                                                <p className='text-base font-medium'>{item.site || ""}</p>
                                                            </div>
                                                            <div className='py-3'>
                                                                <p className='text-base text-gray-400 pb-1'>Fee:</p>
                                                                <p className='text-2xl font-medium'>{item.fee || ""}</p>
                                                            </div>
                                                            <div className='py-3 flex justify-start items-center'>
                                                                <button className='flex items-center bg-[#00987C] py-3 px-3 rounded-[8px] mr-6'>
                                                                    <p className='text-sm text-white mr-2'>View Details</p>
                                                                    <img src={arrow1} className='w-4' alt="" />
                                                                </button>
                                                                <button className='bg-[#f2994a1a] py-2 px-6 text-[#F2A205] text-sm rounded-lg'>New</button>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </>
                                }
                            </div>
                            : isFlag == 2 ?
                                <div className='grid grid-cols-12 lg:gap-5 gap-3'>
                                    <div className='col-span-12 '>
                                        <div className='flex flex-wrap items-center justify-between'>
                                            <h3 className='font-base font-medium bg-white fontNew px-7 py-5 mb-2 rounded-[8px]'>2 In Progress requests</h3>
                                            <div className='flex sm:w-70 w-full h-10 px-4 rounded-xl bg-white items-center'>
                                                <input
                                                    type="text"
                                                    required
                                                    className='bg-transparent border-none outline-none sm:w-70 w-full h-10 text-sm fontNew'
                                                    placeholder='Search...'
                                                    name='search_text'
                                                    value={searchData}
                                                    onChange={(e) => setSearchData(e.target.value)}
                                                />
                                                <img src={search} className='p-2 w-10 cursor-pointer' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        requestList == "" ?
                                            <div className='col-span-12 h-[70vh] justify-center flex items-center'>
                                                <img src={nodata} className='w-28' alt="" />
                                            </div>
                                            :
                                            <>
                                                {
                                                    requestList.map((item, index) => {
                                                        return (
                                                            <div onClick={() => handleDetails(3)} key={index} className='2xl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12 bg-white sm:px-7 px-3 py-3 rounded-[8px] fontNew hover:drop-shadow-lg duration-300 cursor-pointer'>
                                                                <div className='flex justify-between border-b-2 border-dashed py-5'>
                                                                    <div>
                                                                        <p className='text-lg font-semibold pb-1'>{item.name || ""}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-between py-4'>
                                                                    <div>
                                                                        <p className='text-base text-gray-400 pb-1'>Date:</p>
                                                                        <p className='text-base font-medium'>{item.date || ""}</p>
                                                                    </div>
                                                                    <div>
                                                                        <button className='text-sm bg-[#EA5F5F] text-white w-16 h-16 rounded-[10px]'>Today</button>
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-start py-3'>
                                                                    <div>
                                                                        <p className='text-base text-gray-400 pb-1'>Visit Time:</p>
                                                                        <p className='text-base font-medium'>{item.visit_time || ""}</p>
                                                                    </div>
                                                                    <div className='ms-10'>
                                                                        <p className='text-base text-gray-400 pb-1'>No. of employees:</p>
                                                                        <p className='text-base font-medium'>{item.employee || ""}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='py-3'>
                                                                    <p className='text-base text-gray-400 pb-1'>Site:</p>
                                                                    <p className='text-base font-medium'>{item.site || ""}</p>
                                                                </div>
                                                                <div className='py-3'>
                                                                    <p className='text-base text-gray-400 pb-1'>Fee:</p>
                                                                    <p className='text-2xl font-medium'>{item.fee || ""}</p>
                                                                </div>
                                                                <div className='py-3 flex justify-start items-center'>
                                                                    <button className='flex items-center bg-[#00987C] py-3 px-3 rounded-[8px] mr-6'>
                                                                        <p className='text-sm text-white mr-2'>View Details</p>
                                                                        <img src={arrow1} className='w-4' alt="" />
                                                                    </button>
                                                                    <button className='bg-[#2336E41A] py-2 px-3 text-[#2336E4] text-sm rounded-lg'>In-Progress</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>
                                    }
                                </div>
                                :
                                <div className='grid grid-cols-12 lg:gap-5 gap-3'>
                                    <div className='col-span-12 '>
                                        <div className='flex flex-wrap items-center justify-between'>
                                            <h3 className='font-base font-medium bg-white fontNew px-7 py-5 mb-2 rounded-[8px]'>200 Completed requests</h3>
                                            <div className='flex sm:w-70 w-full h-10 px-4 rounded-xl bg-white items-center'>
                                                <input
                                                    type="text"
                                                    required
                                                    className='bg-transparent border-none outline-none sm:w-70 w-full h-10 text-sm fontNew'
                                                    placeholder='Search...'
                                                    name='search_text'
                                                    value={searchData}
                                                    onChange={(e) => setSearchData(e.target.value)}
                                                />
                                                <img src={search} className='p-2 w-10 cursor-pointer' alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    {
                                        requestList == "" ?
                                            <div className='col-span-12 h-[70vh] justify-center flex items-center'>
                                                <img src={nodata} className='w-28' alt="" />
                                            </div>
                                            :
                                            <>
                                                {
                                                    requestList.map((item, index) => {
                                                        return (
                                                            <div onClick={() => handleDetails(4)} key={index} className='2xl:col-span-6 xl:col-span-12 lg:col-span-12 md:col-span-6 col-span-12 bg-white sm:px-7 px-3 py-3 rounded-[8px] fontNew hover:drop-shadow-lg duration-300 cursor-pointer'>
                                                                <div className='flex justify-between border-b-2 border-dashed py-5'>
                                                                    <div>
                                                                        <p className='text-lg font-semibold pb-1'>{item.name || ""}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-between py-4'>
                                                                    <div>
                                                                        <p className='text-base text-gray-400 pb-1'>Date:</p>
                                                                        <p className='text-base font-medium'>{item.date || ""}</p>
                                                                    </div>
                                                                    <div>
                                                                        <button className='text-sm bg-[#EA5F5F] text-white w-16 h-16 rounded-[10px]'>Today</button>
                                                                    </div>
                                                                </div>
                                                                <div className='flex justify-start py-3'>
                                                                    <div>
                                                                        <p className='text-base text-gray-400 pb-1'>Visit Time:</p>
                                                                        <p className='text-base font-medium'>{item.visit_time || ""}</p>
                                                                    </div>
                                                                    <div className='ms-10'>
                                                                        <p className='text-base text-gray-400 pb-1'>No. of employees:</p>
                                                                        <p className='text-base font-medium'>{item.employee || ""}</p>
                                                                    </div>
                                                                </div>
                                                                <div className='py-3'>
                                                                    <p className='text-base text-gray-400 pb-1'>Site:</p>
                                                                    <p className='text-base font-medium'>{item.site || ""}</p>
                                                                </div>
                                                                <div className='py-3'>
                                                                    <p className='text-base text-gray-400 pb-1'>Fee:</p>
                                                                    <p className='text-2xl font-medium'>{item.fee || ""}</p>
                                                                </div>
                                                                <div className='py-3 flex justify-start items-center'>
                                                                    <button className='flex items-center bg-[#00987C] py-3 px-3 rounded-[8px] mr-6'>
                                                                        <p className='text-sm text-white mr-2'>View Details</p>
                                                                        <img src={arrow1} className='w-4' alt="" />
                                                                    </button>
                                                                    <button className='bg-[#00987C29] py-2 px-3 text-[#00987C] text-sm rounded-lg'>Completed</button>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </>
                                    }
                                </div>
                }
            </div>
        </div>
    )
}

export default Appointments