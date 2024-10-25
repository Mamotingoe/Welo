import React, { useRef, useState } from 'react'
import side from "../../Assets/Image/corporate/side.png"
import { Disclosure } from '@headlessui/react'
import { useNavigate } from 'react-router-dom';

function Support() {

    const navigate = useNavigate()
    const scrollRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);

    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const [isFlag, setIsFlag] = useState(0)
    const [image, setImage] = useState("")
    const [img, setImg] = useState("")
    const [texts, setTexts] = useState("password")
    const [textss, setTextss] = useState("password")
    const [eyes, setEyes] = useState(0)
    const [eyess, setEyess] = useState(0)
    const [isModalOpens, setModalOpens] = useState(false)
    const [isDeleteUser, setIsDeleteUser] = useState(false)
    const [pageNo, setPageNo] = useState(1)
    const [totalPage, setTotalPage] = useState(3)
    const [employeess, setEmployeess] = useState({})
    const [formData, setFormData] = useState({})

    const faqData = [
        {
            question: 'How do I update my availability for appointments?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum autem temporibus blanditiis ipsa in, asperiores eos quam maxime commodi molestias facilis fugit illo cupiditate eveniet quidem culpa! Nisi, voluptatibus?',
        },
        {
            question: 'What should I do if I need to reschedule an upcoming appointment?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum autem temporibus blanditiis ipsa in, asperiores eos quam maxime commodi molestias facilis fugit illo cupiditate eveniet quidem culpa! Nisi, voluptatibus?',
        },
        {
            question: 'Can I view the full medical history of my clients?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum autem temporibus blanditiis ipsa in, asperiores eos quam maxime commodi molestias facilis fugit illo cupiditate eveniet quidem culpa! Nisi, voluptatibus?',
        },
        {
            question: 'How are payments processed for my services?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum autem temporibus blanditiis ipsa in, asperiores eos quam maxime commodi molestias facilis fugit illo cupiditate eveniet quidem culpa! Nisi, voluptatibus?',
        },
        {
            question: 'What is your refund policy?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum autem temporibus blanditiis ipsa in, asperiores eos quam maxime commodi molestias facilis fugit illo cupiditate eveniet quidem culpa! Nisi, voluptatibus?',
        },
        {
            question: 'How can I ensure my safety when doing site visits?',
            answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam harum autem temporibus blanditiis ipsa in, asperiores eos quam maxime commodi molestias facilis fugit illo cupiditate eveniet quidem culpa! Nisi, voluptatibus?',
        },
    ];

    const handleFile = (e) => {
        setImage(e.target.files[0])
        let imageData = URL.createObjectURL(e.target.files[0])
        setImg(imageData)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setModalOpens(false)
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

    const handleDeleteUser = (data) => {
        setEmployeess(data)
        setIsDeleteUser(true)
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }
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
        <>
            <div className="grid grid-cols-12 gap-4 md:m-4 m-1 fontNew">
                <div className="col-span-12 xl:hidden block">
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
                                FAQs
                            </div>
                            <div onClick={() => setIsFlag(1)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 1 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                                User Guide
                            </div>
                            <div onClick={() => setIsFlag(2)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 2 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                                Troubleshooting Resource
                            </div>
                            <div onClick={() => setIsFlag(3)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 3 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                                Contact Us
                            </div>
                            <div onClick={() => setIsFlag(4)} className={`px-5 py-2 mx-2 rounded-full cursor-pointer ${isFlag == 4 ? "bg-[#EA5F5F] text-white" : "bg-white text-black"}`}>
                                Feedback Submission
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
                <div className="lg:col-span-3 col-span-12 xl:block hidden">
                    <div className='bg-white bg-contain rounded-lg px-6 py-3'>
                        <div onClick={() => setIsFlag(0)} className={isFlag == 0 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                            <p className='font-medium'>FAQs</p>
                            <img src={side} className='w-2' alt="" />
                        </div>
                        <div onClick={() => setIsFlag(1)} className={isFlag == 1 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                            <p className='font-medium'>User Guide</p>
                            <img src={side} className='w-2' alt="" />
                        </div>
                        <div onClick={() => setIsFlag(2)} className={isFlag == 2 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                            <p className='font-medium'>Troubleshooting Resource</p>
                            <img src={side} className='w-2' alt="" />
                        </div>
                        <div onClick={() => setIsFlag(3)} className={isFlag == 3 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                            <p className='font-medium'>Contact Us</p>
                            <img src={side} className='w-2' alt="" />
                        </div>
                        <div onClick={() => setIsFlag(4)} className={isFlag == 4 ? 'flex items-center bg-[#F4F5FA] py-4 px-6 rounded-lg justify-between my-5' : 'flex items-center justify-between py-4 px-6 my-5 cursor-pointer'}>
                            <p className='font-medium'>Feedback Submission</p>
                            <img src={side} className='w-2' alt="" />
                        </div>
                    </div>
                </div>
                <div className="lg:col-span-9 col-span-12">
                    {
                        isFlag == 0 ?
                            <div className='bg-white py-4 sm:px-8 px-3 rounded-lg'>
                                <div className='pb-5'>
                                    <h1 className='xl:text-[46px] md:text-[40px] text-[35px] font-semibold'>FAQs</h1>
                                    <div className='font-medium'>
                                        <h3>You can find all the information you're looking for.</h3>
                                        <h3>We're happy to help.</h3>
                                    </div>
                                </div>
                                {faqData.map((faq, index) => (
                                    <div className='py-4 border-b-2 border-[#e9e9e985]' key={index}>
                                        <Disclosure>
                                            {({ open }) => (
                                                <>
                                                    <Disclosure.Button className="group flex w-full items-center justify-between">
                                                        <span className="sm:text-base text-sm text-start font-medium text-black group-hover:text-black/80">
                                                            {faq.question}
                                                        </span>
                                                        <span className="text-2xl text-[#00987C]">
                                                            {open ? '-' : '+'}
                                                        </span>
                                                    </Disclosure.Button>
                                                    <Disclosure.Panel className="mt-2 text-sm text-gray-500">
                                                        {faq.answer}
                                                    </Disclosure.Panel>
                                                </>
                                            )}
                                        </Disclosure>
                                    </div>
                                ))}
                            </div>
                            : isFlag == 1 ?
                                <div className='bg-white py-4 sm:px-8 px-3 rounded-lg'>
                                    <h1 className='xl:text-[46px] md:text-[40px] text-[35px] font-semibold'>User Guide</h1>

                                    <div>
                                        <div className='py-2'>
                                            <h1 className='text-lg my-3 font-semibold'>Transparent Development</h1>
                                            <p className='text-base text-[#6C6D7B] my-3'>
                                                Details: In an era defined by rapid technological advancement, the ethical considerations surrounding Artificial Intelligence
                                                (AI) have never been more critical. Welo, a cutting-edge AI platform, emerges as a beacon of innovation,
                                                but with it comes the imperative to establish ethical guidelines that steer its development and application
                                                toward positive societal impact.
                                            </p>
                                            <ol className='list-decimal list-outside ms-4 text-[#6C6D7B] text-base'>
                                                <li className='py-2'>
                                                    Transparent Development: <br />
                                                    The Welo Ethical Code emphasizes transparency in every facet of development. This entails open discussions about Welo's capabilities, limitations, and potential societal impacts. Developers commit to sharing insights into algorithmic decision-making processes, fostering trust among users and stakeholders.
                                                </li>
                                                <li className='py-2'>
                                                    Privacy Protections: <br />
                                                    Central to the Welo Ethical Code is a commitment to protecting user privacy and data security. Welo developers implement robust encryption protocols and anonymization techniques to safeguard sensitive information. Users retain control over their data, with clear consent mechanisms and stringent data access controls in place.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>
                                    <div>
                                        <div className='py-2'>
                                            <h1 className='text-lg my-3 font-semibold'>Transparent Development</h1>
                                            <ol className='list-decimal list-outside ms-4 text-[#6C6D7B] text-base'>
                                                <li className='py-2'>
                                                    Equity-Centered Design: <br />
                                                    Welo's design principles prioritize fairness and equity. Developers actively mitigate biases in data collection and algorithmic decision-making to ensure equitable outcomes for all users. Moreover, efforts are made to address digital divides and provide access to Welo's benefits to marginalized communities.
                                                </li>
                                                <li className='py-2'>
                                                    Safety Measures: <br />
                                                    The Welo Ethical Code mandates stringent safety measures to mitigate risks associated with AI deployment. Continuous monitoring and auditing processes are implemented to detect and address potential harms, with mechanisms in place to swiftly respond to emergent issues. User safety and well-being remain paramount throughout Welo's lifecycle.
                                                </li>
                                                <li className='py-2'>
                                                    Responsible Innovation: <br />
                                                    Welo developers embrace a culture of responsible innovation, engaging in ongoing dialogue with ethicists, policymakers, and affected communities. Ethical impact assessments are conducted to anticipate and address potential risks, ensuring that Welo aligns with societal values and priorities.
                                                </li>
                                                <li className='py-2'>
                                                    Environmental Consciousness: <br />
                                                    Environmental sustainability is integrated into Welo's development and deployment strategies. Efforts are made to minimize Welo's carbon footprint through energy-efficient design practices, responsible sourcing of materials, and waste reduction initiatives. By prioritizing environmental stewardship, Welo contributes to a more sustainable future.
                                                </li>
                                                <li className='py-2'>
                                                    Educational Initiatives: <br />
                                                    The Welo Ethical Code emphasizes the importance of education and awareness-raising efforts. Users are provided with comprehensive resources to understand the ethical implications of AI and make informed decisions about Welo's usage. Educational programs aim to foster a culture of ethical innovation, empowering individuals to navigate the complexities of AI responsibly.
                                                    <br /><br />
                                                    By adhering to the principles outlined in the Welo Ethical Code, stakeholders navigate the future of AI with confidence, ensuring that Welo remains a force for good in the ever-evolving technological landscape.
                                                </li>
                                            </ol>
                                        </div>
                                    </div>

                                </div>
                                : isFlag == 2 ?
                                    <div className='bg-white py-4 sm:px-8 px-3 rounded-lg'>
                                        <h1 className='xl:text-[46px] md:text-[40px] text-[35px] font-semibold'>Troubleshooting Resources</h1>

                                        <div>
                                            <div className='py-2'>
                                                <h1 className='text-lg my-3 font-semibold'>Transparent Development</h1>
                                                <p className='text-base text-[#6C6D7B] my-3'>
                                                    Details: In an era defined by rapid technological advancement, the ethical considerations surrounding Artificial Intelligence
                                                    (AI) have never been more critical. Welo, a cutting-edge AI platform, emerges as a beacon of innovation,
                                                    but with it comes the imperative to establish ethical guidelines that steer its development and application
                                                    toward positive societal impact.
                                                </p>
                                                <ol className='list-decimal list-outside ms-4 text-[#6C6D7B] text-base'>
                                                    <li className='py-2'>
                                                        Transparent Development: <br />
                                                        The Welo Ethical Code emphasizes transparency in every facet of development. This entails open discussions about Welo's capabilities, limitations, and potential societal impacts. Developers commit to sharing insights into algorithmic decision-making processes, fostering trust among users and stakeholders.
                                                    </li>
                                                    <li className='py-2'>
                                                        Privacy Protections: <br />
                                                        Central to the Welo Ethical Code is a commitment to protecting user privacy and data security. Welo developers implement robust encryption protocols and anonymization techniques to safeguard sensitive information. Users retain control over their data, with clear consent mechanisms and stringent data access controls in place.
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='py-2'>
                                                <h1 className='text-lg my-3 font-semibold'>Transparent Development</h1>
                                                <ol className='list-decimal list-outside ms-4 text-[#6C6D7B] text-base'>
                                                    <li className='py-2'>
                                                        Equity-Centered Design: <br />
                                                        Welo's design principles prioritize fairness and equity. Developers actively mitigate biases in data collection and algorithmic decision-making to ensure equitable outcomes for all users. Moreover, efforts are made to address digital divides and provide access to Welo's benefits to marginalized communities.
                                                    </li>
                                                    <li className='py-2'>
                                                        Safety Measures: <br />
                                                        The Welo Ethical Code mandates stringent safety measures to mitigate risks associated with AI deployment. Continuous monitoring and auditing processes are implemented to detect and address potential harms, with mechanisms in place to swiftly respond to emergent issues. User safety and well-being remain paramount throughout Welo's lifecycle.
                                                    </li>
                                                    <li className='py-2'>
                                                        Responsible Innovation: <br />
                                                        Welo developers embrace a culture of responsible innovation, engaging in ongoing dialogue with ethicists, policymakers, and affected communities. Ethical impact assessments are conducted to anticipate and address potential risks, ensuring that Welo aligns with societal values and priorities.
                                                    </li>
                                                    <li className='py-2'>
                                                        Environmental Consciousness: <br />
                                                        Environmental sustainability is integrated into Welo's development and deployment strategies. Efforts are made to minimize Welo's carbon footprint through energy-efficient design practices, responsible sourcing of materials, and waste reduction initiatives. By prioritizing environmental stewardship, Welo contributes to a more sustainable future.
                                                    </li>
                                                    <li className='py-2'>
                                                        Educational Initiatives: <br />
                                                        The Welo Ethical Code emphasizes the importance of education and awareness-raising efforts. Users are provided with comprehensive resources to understand the ethical implications of AI and make informed decisions about Welo's usage. Educational programs aim to foster a culture of ethical innovation, empowering individuals to navigate the complexities of AI responsibly.
                                                        <br /><br />
                                                        By adhering to the principles outlined in the Welo Ethical Code, stakeholders navigate the future of AI with confidence, ensuring that Welo remains a force for good in the ever-evolving technological landscape.
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                    </div>
                                    : isFlag == 3 ?
                                        <div className='bg-white py-4 sm:px-8 px-3 rounded-lg'>
                                            <h1 className='xl:text-[46px] md:text-[40px] text-[35px] font-semibold'>Contact Us</h1>
                                            <h5 className='font-medium'>
                                                Please be patient as we try to get your messages
                                                as soon as possible
                                            </h5>

                                            <div className="grid grid-cols-12 mt-6">
                                                <div className='xl:col-span-6 md:col-span-10 col-span-12 my-3'>
                                                    <div className='flex text-sm font-medium mb-2'>
                                                        <label className='mr-2' htmlFor="firstName">Email Address</label>
                                                    </div>
                                                    <input name="firstName" type="text" placeholder='Enter' className="border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                                </div>
                                                <br />
                                                <div className='xl:col-span-6 md:col-span-10 col-span-12 my-3'>
                                                    <div className='flex text-sm font-medium mb-2'>
                                                        <label className='mr-2' htmlFor="firstName">Message</label>
                                                    </div>
                                                    <textarea name="" className='border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]' placeholder='Enter' rows={10} id=""></textarea>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary mt-3 bg-[#00987C] px-20 py-3 rounded-lg text-white text-sm">
                                                Submit
                                            </button>
                                        </div>
                                        :
                                        <div className='bg-white py-4 sm:px-8 px-3 rounded-lg'>
                                            <h1 className='xl:text-[46px] md:text-[40px] text-[35px] font-semibold'>Feedback Submission</h1>
                                            <h5 className='font-medium'>
                                                hare your feedback to help us improve and serve you better.s
                                            </h5>

                                            <div className="grid grid-cols-12 mt-6">
                                                <div className='xl:col-span-6 md:col-span-10 col-span-12 my-3'>
                                                    <div className='flex text-sm font-medium mb-2'>
                                                        <label className='mr-2' htmlFor="firstName">Feedback</label>
                                                    </div>
                                                    <textarea name="" className='border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]' placeholder='Enter' rows={10} id=""></textarea>
                                                </div>
                                            </div>

                                            <button type="submit" className="btn btn-primary mt-3 bg-[#00987C] px-20 py-3 rounded-lg text-white text-sm">
                                                Submit
                                            </button>
                                        </div>
                    }
                </div>
            </div >


        </>
    )
}

export default Support