import React, { useRef, useState } from 'react'
import users from "../../Assets/Image/corporate/user.png";
import FormSelect from '../../Base-Component/FormSelect/FormSelect';
import { useNavigate } from 'react-router-dom';
import pdfimg from "../../Assets/Image/Healthworker/pdfupload1.png"

function Profile() {

    const navigate = useNavigate()

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [selectStatus, setSelectStatus] = useState(1)
    const [isFlag, setIsFlag] = useState(0)
    const [pageNo, setPageNo] = useState(1)
    const [totalPage, setTotalPage] = useState(3)

    const [image, setImage] = useState("")
    const [img, setImg] = useState("")

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

    const handleFile = (e) => {
        setImage(e.target.files[0])
        let imageData = URL.createObjectURL(e.target.files[0])
        setImg(imageData)
    }

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
                            Account Information
                        </div>
                        <div onClick={() => setIsFlag(1)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 1 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                            Documents
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
                        <p className='font-medium'>Account Information</p>
                    </div>
                    <div onClick={() => setIsFlag(1)} className={isFlag == 1 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                        <p className='font-medium'>Documents</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-9 col-span-12">
                {
                    isFlag == 0 ?
                        <div className='grid grid-cols-12 lg:gap-5 gap-3'>
                            <div className="col-span-12 bg-white sm:p-6 p-4 rounded-lg">
                                <div className='flex items-center'>
                                    {
                                        img ?
                                            <img src={img} className='2xl:w-[106px] 2xl:h-[106px] w-[88px] h-[88px] rounded-full object-cover' alt="" />
                                            :
                                            <img src={users} className='2xl:w-[106px] 2xl:h-[106px] w-[88px] h-[88px] rounded-full' alt="" />
                                    }
                                    <div className='ms-5'>
                                        <h4 className='text-base font-semibold'>Profile Image</h4>
                                        <p className='text-xs my-2 text-[#9C9DA9]'>Png, JPG, up to 5 MB</p>
                                        <div className='mt-6'>
                                            <label htmlFor="upload-photo" className='bg-[#FBFBFB] text-[#5A5A5A] border-dashed border-2 border-[#D9D9D9] py-3 px-5 rounded-lg text-sm font-normal'>Upload image</label>
                                            <input type="file" onChange={(e) => handleFile(e)} className='hidden' id='upload-photo' accept='image/*' />
                                        </div>
                                    </div>
                                </div>
                                <div className="grid grid-cols-12 mt-6">
                                    <div className='sm:col-span-6 col-span-12 sm:mx-4 mx-0 my-3'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="firstName">First Name</label>
                                        </div>
                                        <input name="firstName" type="text" className="border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='sm:col-span-6 col-span-12 sm:mx-4 mx-0 my-3'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="lastName">Last Name</label>
                                        </div>
                                        <input name="lastName" type="text" className="border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='sm:col-span-6 col-span-12 sm:mx-4 mx-0 my-3'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="jobTitle">ID Number</label>
                                        </div>
                                        <input name="jobTitle" type="text" className="border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='sm:col-span-6 col-span-12 sm:mx-4 mx-0 my-3'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="employeeId">Mobile Number</label>
                                        </div>
                                        <input name="employeeId" type="text" className="border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='col-span-12 sm:mx-4 mx-0 my-3'>
                                        <p className='text-sm pb-2 font-medium'>Healthcare Discipline</p>
                                        <FormSelect id="category" name="fuel_type" value={selectStatus} onChange={(e) => setSelectStatus(e.target.value)} className="select-arrow-hidden border-[1px] border-[#e5e7eb] py-2 px-3 w-full rounded-md outline-none">
                                            <option>Choose one</option>
                                            <option>Certified Nurse</option>
                                            <option>Certified Nurse</option>
                                            <option>Certified Nurse</option>
                                        </FormSelect>
                                    </div>
                                    <div className='sm:col-span-6 col-span-12 sm:mx-4 mx-0 my-3'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="jobTitle">Email</label>
                                        </div>
                                        <input name="jobTitle" type="text" className="border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-primary mx-4 mt-6 bg-[#00987C] px-20 py-3 rounded-lg text-white text-sm">
                                    Save
                                </button>
                            </div>
                        </div>
                        :
                        <div className='grid grid-cols-12 lg:gap-5 gap-3 bg-white sm:p-6 p-4 rounded-lg'>
                            <div className="xl:col-span-7 lg:col-span-10 col-span-12">
                                <div>
                                    <h1 className='text-lg font-medium'>Practice Council Registration Document</h1>
                                    <div className='border-2 border-dashed md:p-7 p-3 my-3'>
                                        <div className='flex items-center '>
                                            <img src={pdfimg} className='md:w-16 md:h-16 w-12 h-12 rounded-full' alt="" />
                                            <div className='ms-4'>
                                                <p className='font-medium md:text-base text-sm mb-2'>Practice Council Registration Document.jpg</p>
                                                <p className='font-medium md:text-base text-sm text-gray-400'>4MB</p>
                                            </div>
                                        </div>
                                        <div className='text-end'>
                                            <p className='text-[#1D3BD0] underline md:text-base text-sm font-medium'>Click here to download</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="xl:col-span-7 lg:col-span-10 col-span-12">
                                <div>
                                    <h1 className='text-lg font-medium'>National Identity Document</h1>
                                    <div className='border-2 border-dashed md:p-7 p-3 my-3'>
                                        <div className='flex items-center '>
                                            <img src={pdfimg} className='md:w-16 md:h-16 w-12 h-12 rounded-full' alt="" />
                                            <div className='ms-4'>
                                                <p className=' md:text-base text-sm mb-2'>National Identify Document.jpg</p>
                                                <p className=' md:text-base text-sm text-gray-400'>4MB</p>
                                            </div>
                                        </div>
                                        <div className='text-end'>
                                            <p className='text-[#1D3BD0] underline  md:text-base text-sm'>Click here to download</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="xl:col-span-7 lg:col-span-10 col-span-12">
                                <div>
                                    <h1 className='text-lg font-medium'>Lifesaving Certifcate</h1>
                                    <div className='border-2 border-dashed md:p-7 p-3 my-3'>
                                        <div className='flex items-center '>
                                            <img src={pdfimg} className='md:w-16 md:h-16 w-12 h-12 rounded-full' alt="" />
                                            <div className='ms-4'>
                                                <p className='font-medium md:text-base text-sm mb-2'>Lifesaving Certificate.jpg</p>
                                                <p className='font-medium md:text-base text-sm text-gray-400'>4MB</p>
                                            </div>
                                        </div>
                                        <div className='text-end'>
                                            <p className='text-[#1D3BD0] underline font-medium md:text-base text-sm'>Click here to download</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <div className="xl:col-span-7 lg:col-span-10 col-span-12">
                                <div>
                                    <h1 className='text-lg font-medium'>Police Clearance</h1>
                                    <div className='border-2 border-dashed md:p-7 p-3 my-3'>
                                        <div className='flex items-center '>
                                            <img src={pdfimg} className='md:w-16 md:h-16 w-12 h-12 rounded-full' alt="" />
                                            <div className='ms-4'>
                                                <p className='font-medium md:text-base text-sm mb-2'>Police Clearance Document.jpg</p>
                                                <p className='font-medium md:text-base text-sm text-gray-400'>4MB</p>
                                            </div>
                                        </div>
                                        <div className='text-end'>
                                            <p className='text-[#1D3BD0] underline font-medium md:text-base text-sm'>Click here to download</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                }
            </div>
        </div>
    )
}

export default Profile