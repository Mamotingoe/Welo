import React, { useRef, useState } from 'react'
import users from "../../Assets/Image/corporate/user.png";
import FormSelect from '../../Base-Component/FormSelect/FormSelect';
import { useNavigate } from 'react-router-dom';
import pdfimg from "../../Assets/Image/Healthworker/pdfupload1.png"
import EyeSlash from "../../Assets/Image/corporate/slasheye.png"
import Eye from "../../Assets/Image/corporate/eye.png"
import tick from "../../Assets/Image/corporate/tick.png"
import cancel from "../../Assets/Image/corporate/cancel.png"
import { ThreeCircles } from 'react-loader-spinner';

function Setting() {

    const navigate = useNavigate()

    const scrollRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);
    const [isLoading, setIsLoading] = useState(false)

    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isFlag, setIsFlag] = useState(0)
    const [pageNo, setPageNo] = useState(1)
    const [totalPage, setTotalPage] = useState(3)
    const [texts, setTexts] = useState("password")
    const [textss, setTextss] = useState("password")
    const [textsss, setTextsss] = useState("password")
    const [eyes, setEyes] = useState(0)
    const [eyess, setEyess] = useState(0)
    const [eyesss, setEyesss] = useState(0)

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

    const handleEyes = () => {
        const flag = eyes == 0 ? 1 : 0
        setEyes(flag)

        const text = texts == "password" ? "text" : "password"
        setTexts(text)
    }

    const handleEyess = () => {
        const flag = eyess == 0 ? 1 : 0
        setEyess(flag)

        const text = textss == "password" ? "text" : "password"
        setTextss(text)
    }

    const handleEyesss = () => {
        const flag = eyesss == 0 ? 1 : 0
        setEyesss(flag)

        const text = textsss == "password" ? "text" : "password"
        setTextsss(text)
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

    const handleSubmit = (e) => {
        e.preventDefault()
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
                            Change Password
                        </div>
                        <div onClick={() => setIsFlag(1)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 1 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                            Terms & Conditions
                        </div>
                        <div onClick={() => setIsFlag(2)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 2 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                            Privacy Policy
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
                        <p className='font-medium'>Change Password</p>
                    </div>
                    <div onClick={() => setIsFlag(1)} className={isFlag == 1 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                        <p className='font-medium'>Terms & Conditions</p>
                    </div>
                    <div onClick={() => setIsFlag(2)} className={isFlag == 2 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                        <p className='font-medium'>Privacy Policy</p>
                    </div>
                </div>
            </div>
            <div className="lg:col-span-9 col-span-12">
                {
                    isFlag == 0 ?
                        <div className='grid grid-cols-12 lg:gap-5 gap-3 bg-white sm:p-6 p-3 rounded-lg'>
                            <div className="xl:col-span-6 lg:col-span-10 col-span-12">
                                <p className='fontNew text-base text-[#7E7E7E] py-3'>Your new password must be unique from those previously <br /> used.</p>
                                <form onSubmit={handleSubmit}>
                                    <div className='mt-3 mb-6'>
                                        <div className='mx-2 my-3'>
                                            <p className='text-sm font-medium mb-3'>Current Password</p>
                                            <div className='flex items-center'>
                                                <input
                                                    type={texts}
                                                    // required
                                                    className='bg-transparent ps-4 pe-12 rounded-md border-2 w-full outline-[#00987C] h-[54px] text-base'
                                                    placeholder='Password'
                                                    name='password'
                                                />
                                                {
                                                    eyes == 0 ?
                                                        <img src={EyeSlash} onClick={handleEyes} className='p-2 w-10 h-10 -ms-12 cursor-pointer' alt="" />
                                                        :
                                                        <img src={Eye} onClick={handleEyes} className='p-2 w-10 h-8 -ms-12 cursor-pointer' alt="" />
                                                }
                                            </div>
                                        </div>
                                        <div className='mx-2 my-3'>
                                            <p className='text-sm font-medium mb-3'>New Password</p>
                                            <div className='flex items-center'>
                                                <input
                                                    type={textss}
                                                    // required
                                                    className='bg-transparent ps-4 pe-12 rounded-md border-2 w-full outline-[#00987C] h-[54px] text-base'
                                                    placeholder='Password'
                                                    name='password'
                                                />
                                                {
                                                    eyess == 0 ?
                                                        <img src={EyeSlash} onClick={handleEyess} className='p-2 w-10 h-10 -ms-12 cursor-pointer' alt="" />
                                                        :
                                                        <img src={Eye} onClick={handleEyess} className='p-2 w-10 h-8 -ms-12 cursor-pointer' alt="" />
                                                }
                                            </div>
                                        </div>
                                        <div className='mx-2 my-3'>
                                            <p className='text-sm font-medium mb-3'>Confirm New Password</p>
                                            <div className='flex items-center'>
                                                <input
                                                    type={textsss}
                                                    // required
                                                    className='bg-transparent ps-4 pe-12 rounded-md border-2 w-full outline-[#00987C] h-[54px] text-base'
                                                    placeholder='Password'
                                                    name='password'
                                                />
                                                {
                                                    eyesss == 0 ?
                                                        <img src={EyeSlash} onClick={handleEyesss} className='p-2 w-10 h-10 -ms-12 cursor-pointer' alt="" />
                                                        :
                                                        <img src={Eye} onClick={handleEyesss} className='p-2 w-10 h-8 -ms-12 cursor-pointer' alt="" />
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className='my-3'>
                                        <div className='flex items-center'>
                                            <img src={cancel} className='h-4 w-4' alt="" />
                                            <p className='ps-3 text-sm'>8 or more characters</p>
                                        </div>
                                        <div className='flex items-center my-3'>
                                            <img src={tick} className='h-4 w-4' alt="" />
                                            <p className='ps-3 text-sm'>Contain at least 1 number</p>
                                        </div>
                                        <div className='flex items-center'>
                                            <img src={tick} className='h-4 w-4' alt="" />
                                            <p className='ps-3 text-sm'>Contain at least 1 special characte</p>
                                        </div>
                                    </div>
                                    <div>
                                        <button type="submit" className="btn btn-primary mx-4 my-5 bg-[#00987C] px-20 py-3 rounded-lg text-white text-sm">
                                            {
                                                isLoading ?
                                                    <ThreeCircles
                                                        width={23}
                                                        height={23}
                                                        color="#fff"
                                                        ariaLabel="circles-loading"
                                                        wrapperStyle={{}}
                                                        visible={true}
                                                        wrapperClass=""
                                                    />
                                                    :
                                                    "Update"
                                            }
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        : isFlag == 1 ?
                            <div className='grid grid-cols-12 lg:gap-5 gap-3 bg-white sm:p-6 p-3 rounded-lg'>
                                <div className="col-span-12 text-base">
                                    <h1 className='font-medium text-[#202020] text-lg my-4'>Terms & Conditions</h1>
                                    <div>
                                        <h1 className='my-5 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</h1>
                                        <p className='text-[#6C6E73] my-5'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                        <p className='text-[#6C6E73] my-5'>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className='my-5 font-medium'>Lorem Ipsum is simply dummy</h1>
                                        <p className='text-[#6C6E73] my-5'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Contrary to popular belief, Lorem Ipsum is not simply random text
                                        </p>
                                        <p className='text-[#6C6E73] my-5'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Contrary to popular belief, Lorem Ipsum is not simply random text
                                        </p>
                                    </div>
                                </div>
                            </div>
                            :
                            <div className='grid grid-cols-12 lg:gap-5 gap-3 bg-white sm:p-6 p-3 rounded-lg'>
                                <div className="col-span-12 text-base">
                                    <h1 className='font-medium text-[#202020] text-lg my-4'>Privacy Policy</h1>
                                    <div>
                                        <h1 className='my-5 font-medium'>Lorem Ipsum is simply dummy text of the printing and typesetting industry?</h1>
                                        <p className='text-[#6C6E73] my-5'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                                        </p>
                                        <p className='text-[#6C6E73] my-5'>
                                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
                                        </p>
                                    </div>
                                    <div>
                                        <h1 className='my-5 font-medium'>Lorem Ipsum is simply dummy</h1>
                                        <p className='text-[#6C6E73] my-5'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Contrary to popular belief, Lorem Ipsum is not simply random text
                                        </p>
                                        <p className='text-[#6C6E73] my-5'>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. Contrary to popular belief, Lorem Ipsum is not simply random text
                                        </p>
                                    </div>
                                </div>
                            </div>
                }
            </div>
        </div>
    )
}

export default Setting