import React from 'react'
import welorounds from "../../Assets/Image/Healthworker/weloround.png"
import send from "../../Assets/Image/Healthworker/sendbtn.png"

function Messages() {
    return (
        <div className='fontNew md:m-4 m-1'>
            <div className="grid grid-cols-12 gap-5">
                <div className="md:col-span-4 col-span-12">
                    <div className='flex bg-white py-4 sm:px-5 px-3 rounded-lg'>
                        <img src={welorounds} className='w-[50px] h-[50px] rounded-full' alt="" />
                        <div className='ms-4 w-full'>
                            <div className='flex items-center justify-between'>
                                <p className='text-base font-medium'>Welo</p>
                                <p className='text-[#9EA0A8]'>2 min</p>
                            </div>
                            <p className='text-[#9EA0A8]'>Hi, i want make enquiries about you...</p>
                        </div>
                    </div>
                </div>
                <div className="md:col-span-8 col-span-12 bg-white py-4 sm:px-5 px-3 rounded-lg">
                    <div className='flex mb-3'>
                        <img src={welorounds} className='w-[50px] h-[50px] rounded-full' alt="" />
                        <div className='ps-4 w-full'>
                            <p className='text-lg font-medium'>Welo</p>
                            <ul className='list-disc ps-4'>
                                <li className='text-[#00987C] text-sm'>Online</li>
                            </ul>
                        </div>
                    </div>
                    <div className='h-[70vh] overflow-x-hidden flex items-end'>
                        <div>
                            <div>
                                <div className='w-full flex justify-end text-white my-2'>
                                    <div className='bg-[#00987C] px-5 py-2 rounded-tl-xl rounded-br-xl rounded-bl-xl max-w-[50%]'>
                                        <p>Hey everyone, Ferris here! Planning the ultimate day off and need your wildest, most epic ideas. What would you do if you had one day to do anything in the city?</p>
                                    </div>
                                </div>
                                <p className='text-gray-400 text-[13px] text-end pt-1'>10:45 AM</p>
                            </div>
                            <div>
                                <div className='w-full flex justify-end text-white my-2'>
                                    <div className='bg-[#00987C] px-5 py-2 rounded-tl-xl rounded-br-xl rounded-bl-xl max-w-[50%]'>
                                        <p>Tech stocks are volatile though. Are you sure?</p>
                                    </div>
                                </div>
                                <p className='text-gray-400 text-[13px] text-end pt-1'>10:45 AM</p>
                            </div>
                            <div>
                                <div className='w-full flex justify-start text-white my-2'>
                                    <div className='bg-[#F8F8F8] text-black px-5 py-2 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-[50%]'>
                                        <p>True. What about cryptocurrency? Any thoughts?</p>
                                    </div>
                                </div>
                                <p className='text-gray-400 text-[13px] text-start pt-1'>10:45 AM</p>
                            </div>
                            <div>
                                <div className='w-full flex justify-end text-white my-2'>
                                    <div className='bg-[#00987C] px-5 py-2 rounded-tl-xl rounded-br-xl rounded-bl-xl max-w-[50%]'>
                                        <p>I'm eyeing some tech stocks. They seem promising.</p>
                                    </div>
                                </div>
                                <p className='text-gray-400 text-[13px] text-end pt-1'>10:45 AM</p>
                            </div>
                            <div>
                                <div className='w-full flex justify-start text-white my-2'>
                                    <div className='bg-[#F8F8F8] text-black px-5 py-2 rounded-tr-xl rounded-br-xl rounded-bl-xl max-w-[50%]'>
                                        <p>Bonds and mutual funds could be safer options.</p>
                                    </div>
                                </div>
                                <p className='text-gray-400 text-[13px] text-start pt-1'>10:45 AM</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center mt-3'>
                        <input type="text" placeholder='Type...' className='w-full bg-[#F1F1F1] rounded-full outline-none px-7 h-[50px]' />
                        <img src={send} className='w-[50px] ms-3' alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messages