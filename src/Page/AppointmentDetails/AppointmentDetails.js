import React, { useRef, useState } from 'react'
import back from "../../Assets/Image/corporate/back.png"
import { useLocation, useNavigate } from 'react-router-dom'
import search from "../../Assets/Image/corporate/Search.png"
import men1 from "../../Assets/Image/corporate/men6.png"
import men2 from "../../Assets/Image/corporate/men7.png"
import men3 from "../../Assets/Image/corporate/men8.png"
import men4 from "../../Assets/Image/corporate/men9.png"
import men5 from "../../Assets/Image/corporate/men10.png"
import men6 from "../../Assets/Image/corporate/men11.png"
import men7 from "../../Assets/Image/corporate/men12.png"
import men8 from "../../Assets/Image/corporate/men13.png"
import pdf from "../../Assets/Image/corporate/pdf.png"
import nodata from "../../Assets/Image/corporate/nodata.png"
import background from "../../Assets/Image/corporate/background1.png"
import FormSelect from '../../Base-Component/FormSelect/FormSelect'
import Dialog from '../../Base-Component/Dialog/Dialog'

function AppointmentDetails() {

    const navigate = useNavigate();
    const location = useLocation()
    const scrollRef = useRef(null);

    let newData;
    try {
        const { Data } = location.state;
        newData = Data
    } catch (error) {
        console.log("err")
    }

    const [isDragging, setIsDragging] = useState(false);

    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isAccept, setIsAccept] = useState(false)
    const [isReject, setIsReject] = useState(false)

    const [pageNo, setPageNo] = useState(1)
    const [totalPage, setTotalPage] = useState(3)

    const [searchData, setSearchData] = useState("")
    const [handelSelect, setHandleSelect] = useState("")
    const [handelSelectId, setHandleSelectId] = useState("")
    const [handelSelectName, setHandleSelectName] = useState("")

    const [userData, setUserData] = useState([
        {
            id: "#6790",
            image: men1,
            name: "Esther Howard",
            date: "14 Mar, 2024",
            gender: "male",
            service: "HIV Clinic",
        },
        {
            id: "#6790",
            image: men2,
            name: "Esther Howard",
            date: "14 Mar, 2024",
            gender: "male",
            service: "HIV Clinic",
        },
        {
            id: "#6790",
            image: men3,
            name: "Esther Howard",
            date: "14 Mar, 2024",
            gender: "male",
            service: "HIV Clinic",
        },
        {
            id: "#6790",
            image: men4,
            name: "Esther Howard",
            date: "14 Mar, 2024",
            gender: "male",
            service: "HIV Clinic",
        },
        {
            id: "#6790",
            image: men6,
            name: "Esther Howard",
            date: "14 Mar, 2024",
            gender: "female",
            service: "HIV Clinic",
        },
        {
            id: "#6790",
            image: men7,
            name: "Esther Howard",
            date: "14 Mar, 2024",
            gender: "female",
            service: "HIV Clinic",
        },
        {
            id: "#6790",
            image: men8,
            name: "Esther Howard",
            date: "14 Mar, 2024",
            gender: "female",
            service: "HIV Clinic",
        },
    ])

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

    const handleForm = () => {
        navigate("/healthworker/medicalform")
    }

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
        <div className='md:m-4 m-1 fontNew'>
            <div className="col-span-12 mb-3">
                <div className='flex items-center cursor-pointer fontNew'>
                    <img src={back} onClick={() => { navigate("/healthworker/appointments") }} className='w-4' alt="" />
                    <p onClick={() => { navigate("/healthworker/appointments") }} className='text-base font-medium ms-3'>Go back</p>
                </div>
            </div>
            <div className='grid grid-cols-12 gap-6 fontNew '>
                <div className='2xl:col-span-8 xl:col-span-8 lg:col-span-12 md:col-span-12 col-span-12 fontNew duration-300 cursor-pointer bg-white rounded-xl'>
                    <div className='sm:px-7 px-3 py-3  fontNew m-1 cursor-pointer'>
                        <div className='flex justify-between border-b-2 border-dashed py-5'>
                            <div>
                                <p className='text-lg font-semibold pb-1'>Anglo American: HIV Clinic</p>
                            </div>
                        </div>
                        <div className='flex justify-between py-4'>
                            <div>
                                <p className='text-base text-gray-400 pb-1'>Date:</p>
                                <p className='text-base font-medium'>06 Mar, 2024</p>
                            </div>
                            <div>
                                <button className='text-sm bg-[#EA5F5F] text-white w-16 h-16 rounded-xl'>Today</button>
                            </div>
                        </div>
                        <div className='flex justify-start py-3'>
                            <div>
                                <p className='text-base text-gray-400 pb-1'>Visit Time:</p>
                                <p className='text-base font-medium'>10:00 AM - 01:00 PM</p>
                            </div>
                            <div className='ms-10'>
                                <p className='text-base text-gray-400 pb-1'>No. of employees:</p>
                                <p className='text-base font-medium'>100</p>
                            </div>
                        </div>
                        <div className='py-3'>
                            <p className='text-base text-gray-400 pb-1'>Site:</p>
                            <p className='text-base font-medium'>7620 Crist Estate, Prosaccomouth, Vermont.</p>
                        </div>
                        <div className='py-3'>
                            <p className='text-base text-gray-400 pb-1'>Additional requests/preferences:</p>
                            <p className='text-base font-medium'>Please ensure the healthcare workers speak English and isiZulu Thanks.</p>
                        </div>
                    </div>
                </div>
                <div className='2xl:col-span-4 xl:col-span-4 lg:col-span-12 md:col-span-12 col-span-12 fontNew duration-300 cursor-pointer bg-white rounded-xl'>
                    <div className=''>
                        <div className='w-full h-32 bg-center bg-cover text-white flex flex-col items-start justify-center px-8 rounded-t-xl' style={{ backgroundImage: `url(${background})` }}>
                        </div>
                        <div className="flex items-end">
                            <div className='sm:px-7 px-3 py-3'>
                                <div className='py-3'>
                                    {
                                        newData == 1 ?
                                            <button className='bg-[#7424f21a] py-2 px-6 text-[#7424F2] text-sm rounded-lg'>Confirmed</button>
                                            : newData == 2 ?
                                                <button className='bg-[#f2994a1a] py-2 px-6 text-[#F2A205] text-sm rounded-lg'>New</button>
                                                : newData == 3 ?
                                                    <button className='bg-[#2336E41A] py-2 px-6 text-[#2336E4] text-sm rounded-lg'>In-Progress</button>
                                                    :
                                                    <button className='bg-[#00987C29] py-2 px-6 text-[#00987C] text-sm rounded-lg'>Completed</button>
                                    }
                                </div>
                                <div className='py-3'>
                                    <p className='text-base text-gray-400 pb-1'>Fee:</p>
                                    <p className='text-2xl font-medium'>R1200.00</p>
                                </div>
                                <div className='py-5 flex flex-wrap items-center'>
                                    {
                                        newData == 1 ?
                                            <button onClick={handleForm} className='bg-[#00987C] text-white w-[200px] py-3 rounded-lg mr-3 my-3'>Start Checkup</button>
                                            : newData == 2 ?
                                                <>
                                                    <button onClick={() => setIsAccept(true)} className='bg-[#00987C] text-white sm:w-[200px] w-[130px] py-3 rounded-lg mr-3 my-3'>Accept</button>
                                                    <button onClick={() => setIsReject(true)} className='bg-[#EA5F5F] text-white sm:w-[200px] w-[130px] py-3 rounded-lg'>Reject</button>
                                                </>
                                                : newData == 3 ?
                                                    <>
                                                        <button onClick={handleForm} className='bg-[#00987C] text-white sm:w-[200px] w-auto sm:px-0 px-3 text-sm py-3 rounded-lg mr-3 my-3'>Start Checkup</button>
                                                        <button className='bg-[#00987C] text-white sm:w-[200px] w-auto sm:px-0 px-3 text-sm py-3 rounded-lg'>Mark as Completed</button>
                                                    </>
                                                    :
                                                    <p className='text-black font-medium'>*Payment will be added to your wallet after 3 days.</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-12 fontNew gap-6">
                <div className="col-span-12">
                    <div className='flex flex-wrap justify-between items-center m-2'>
                        <h1 className='text-xl font-medium m-2'>Visit Requests</h1>
                        <div className='flex sm:w-70 w-full h-10 px-4 rounded-xl bg-white my-3 items-center'>
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
            </div>

            <div className="grid grid-cols-12 fontNew gap-6">
                {
                    userData == "" ?
                        <div className='col-span-12 h-[50vh] justify-center flex items-center'>
                            <img src={nodata} className='w-28' alt="" />
                        </div>
                        :
                        <>
                            <div className='col-span-12'>
                                <div
                                    className='w-full overflow-auto'
                                    onMouseDown={startDragging}
                                    onMouseLeave={stopDragging}
                                    onMouseUp={stopDragging}
                                    onMouseMove={onDragging}
                                    ref={scrollRef}
                                >
                                    <table className='w-full border-separate border-spacing-y-3'>

                                        <tr className='bg-white'>
                                            <th className='py-4 px-5 text-base font-medium whitespace-nowrap text-start first:rounded-l-lg last:rounded-r-lg'>
                                                <FormSelect id="page" name="page_no" className="selects-arrow-hidden outline-none w-24 text-base" value={handelSelectId} onChange={(e) => setHandleSelectId(e.target.value)}>
                                                    <option value="5">Date</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                </FormSelect>
                                            </th>
                                            <th className='py-4 px-5 text-base font-medium whitespace-nowrap text-start first:rounded-l-lg last:rounded-r-lg'>
                                                <FormSelect id="page" name="page_no" className="selects-arrow-hidden outline-none w-20 text-base" value={handelSelectId} onChange={(e) => setHandleSelectId(e.target.value)}>
                                                    <option value="5">ID</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                </FormSelect>
                                            </th>
                                            <th className='py-4 px-3 text-base font-medium whitespace-nowrap text-start first:rounded-l-lg last:rounded-r-lg'>
                                                <FormSelect id="page" name="page_no" className="selects-arrow-hidden outline-none w-28 text-base" value={handelSelectName} onChange={(e) => setHandleSelectName(e.target.value)}>
                                                    <option value="5">Name</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                </FormSelect>
                                            </th>
                                            <th className='py-4 px-3 text-base font-medium whitespace-nowrap text-start first:rounded-l-lg last:rounded-r-lg'>
                                                <FormSelect id="page" name="page_no" className="selects-arrow-hidden outline-none w-28 text-base" value={handelSelectName} onChange={(e) => setHandleSelectName(e.target.value)}>
                                                    <option value="5">Gender</option>
                                                    <option value="10">10</option>
                                                    <option value="15">15</option>
                                                </FormSelect>
                                            </th>
                                            <th className='py-4 px-3 text-base font-medium whitespace-nowrap text-start first:rounded-l-lg last:rounded-r-lg'>Service</th>
                                            <th className='py-4 px-3 text-base font-medium whitespace-nowrap text-start first:rounded-l-lg last:rounded-r-lg'>Report</th>
                                            <th className='py-4 px-3 text-base font-medium whitespace-nowrap text-start first:rounded-l-lg last:rounded-r-lg'>Status</th>
                                        </tr>
                                        <tbody>
                                            {
                                                userData.map((item, index) => {
                                                    return (
                                                        <tr key={index} className='bg-white font-medium'>
                                                            <td className='text-start px-4 py-3 first:rounded-l-lg last:rounded-r-lg'>
                                                                <div className='whitespace-nowrap'>
                                                                    {item.date}
                                                                </div>
                                                            </td>
                                                            <td className='text-start px-4 py-3 first:rounded-l-lg last:rounded-r-lg'>
                                                                <div className='whitespace-nowrap'>
                                                                    {item.id}
                                                                </div>
                                                            </td>
                                                            <td className='text-start px-4 py-3 first:rounded-l-lg last:rounded-r-lg'>
                                                                <div className='whitespace-nowrap w-52 flex items-center'>
                                                                    <img src={item.image} className='w-10' alt="" />
                                                                    <p className='text-base ms-3'>{item.name}</p>
                                                                </div>
                                                            </td>
                                                            <td className='text-start px-4 py-3 first:rounded-l-lg last:rounded-r-lg'>
                                                                <div className='whitespace-nowrap text-[#00987C] capitalize'>
                                                                    {item.gender}
                                                                </div>
                                                            </td>
                                                            <td className='text-start px-4 py-3 first:rounded-l-lg last:rounded-r-lg'>
                                                                <div className='whitespace-nowrap text-[#00987C]'>
                                                                    {item.service}
                                                                </div>
                                                            </td>
                                                            <td className='text-start px-4 py-3 first:rounded-l-lg last:rounded-r-lg'>
                                                                <div className='whitespace-nowrap w-28 flex items-center'>
                                                                    <img src={pdf} className='w-7' alt="" />
                                                                    <p className='text-base ms-3 text-[#EA5F5F]'>Report.pdf</p>
                                                                </div>
                                                            </td>
                                                            <td className='text-start px-4 py-3 first:rounded-l-lg last:rounded-r-lg'>
                                                                <div className='whitespace-nowrap text-[#00987C]'>
                                                                    Completed
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>

                                    </table>
                                </div>
                            </div>
                            <div className='col-span-12 flex flex-wrap items-center sm:justify-between justify-center bg-white py-4 sm:px-8 px-0 rounded-lg'>
                                <div className='flex items-center'>
                                    <p>Show Result</p>
                                    <div>
                                        <FormSelect id="page" name="page_no" className="outline-none px-2 ms-3" value={handelSelect} onChange={(e) => setHandleSelect(e.target.value)}>
                                            <option value="5">5</option>
                                            <option value="10">10</option>
                                            <option value="15">15</option>
                                        </FormSelect>
                                    </div>
                                </div>
                                <div className='flex items-center cursor-pointer'>
                                    <p onClick={() => handlePageChange(pageNo - 1)} disabled={pageNo === 1}>
                                        Previous
                                    </p>
                                    <div className="flex items-center mx-6">
                                        {renderPaginationButtonss()}
                                    </div>
                                    <p onClick={() => handlePageChange(pageNo + 1)} disabled={pageNo === totalPage}>
                                        Next
                                    </p>
                                </div>
                            </div>
                        </>
                }
            </div>


            <Dialog
                open={isAccept}
                onClose={() => setIsAccept(false)}
                size="md"
            >
                <Dialog.Panel>
                    <Dialog.Description className="rounded-none border-2 border-white">
                        <div className='flex justify-center text-center my-4 sm:px-16 px-4 fontNew'>
                            <div>
                                <h1 className='text-xl font-semibold text-black mt-6'>Accept?</h1>
                                <p className='text-sm text-gray-500 my-3'>Are you sure you want to accept this <br /> appointment?</p>
                                <div className='mt-13 mb-5'>
                                    <button className='bg-[#F4F5FA] py-[14px] sm:w-36 w-30 text-sm rounded-xl sm:mx-3 mx-2' onClick={() => setIsAccept(false)}>Close</button>
                                    <button className='bg-[#00987C] py-[14px] sm:w-36 w-30 text-sm rounded-xl sm:mx-3 mx-2 text-white' onClick={() => setIsAccept(false)}>Yes, Accept</button>
                                </div>
                            </div>
                        </div>
                    </Dialog.Description>
                </Dialog.Panel>
            </Dialog>

            <Dialog
                open={isReject}
                onClose={() => setIsReject(false)}
                size="lg"
            >
                <Dialog.Panel>
                    <Dialog.Description className="rounded-none border-2 border-white">
                        <div className='flex justify-center text-center my-4 px-0 fontNew'>
                            <div className='px-3'>
                                <h1 className='text-xl font-semibold text-black mt-6'>Reject?</h1>
                                <p className='text-base text-gray-500 my-3'>Are you sure you want to reject this <br /> appointment?</p>
                                <div className='text-start'>
                                    <p className='fontNew text-sm font-medium mt-3'>Reason</p>
                                    <div className='mt-3 mb-6'>
                                        <div className='flex my-3 md:w-[400px] w-[320px] items-center justify-center'>
                                            <textarea name="" rows={9} placeholder='Enter' className='w-full outline-[#00987C] border-[1px] py-3 px-4 border-slate-300 rounded-md' id=""></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='mt-13 mb-5'>
                                    <button className='bg-[#F4F5FA] py-[14px] sm:w-36 w-30 text-sm rounded-xl sm:mx-3 mx-2' onClick={() => setIsReject(false)}>Close</button>
                                    <button className='bg-[#EA5F5F] py-[14px] sm:w-36 w-30 text-sm rounded-xl sm:mx-3 mx-2 text-white' onClick={() => setIsReject(false)}>Yes, Reject</button>
                                </div>
                            </div>
                        </div>
                    </Dialog.Description>
                </Dialog.Panel>
            </Dialog>
        </div>

    )
}

export default AppointmentDetails