import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
import information from "../../Assets/Image/corporate/information.png"

function WorkerDashboard() {
    const [enabled, setEnabled] = useState(false)
    return (
        <div className='fontNew md:m-4 m-1'>
            <div>
                <div className='bg-white sm:px-5 px-2 py-7 rounded-lg'>
                    <div className='flex flex-wrap items-center justify-between sm:p-5 p-0 mx-2'>
                        <h1 className='text-2xl font-semibold'>Welcome, Tanya</h1>
                        <div className='flex justify-between items-center sm:w-auto w-full sm:my-0 my-3'>
                            <p className='text-base font-semibold'>Go Online</p>
                            <div className='ms-3'>
                                <Switch
                                    checked={enabled}
                                    onChange={setEnabled}
                                    className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-gray-300 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-[#00987C]"
                                >
                                    <span
                                        aria-hidden="true"
                                        className="pointer-events-none inline-block size-5 translate-x-0 rounded-full bg-white ring-0 shadow-lg transition duration-200 ease-in-out group-data-[checked]:translate-x-7"
                                    />
                                </Switch>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-wrap items-center sm:justify-between justify-center bg-[#00987C0D] rounded-lg p-5 mx-2 mt-8'>
                        <div className='flex items-center'>
                            <img src={information} className='w-[20px]' alt="" />
                            <p className='text-[#00987C] ms-3 text-sm font-semibold'>Alert! You have a 2 new appointment request</p>
                        </div>
                        <p className='text-[#2336E4] ms-3 sm:mt-0 mt-4 text-base font-semibold'>View</p>
                    </div>
                </div>
                <div className='grid grid-cols-12 gap-3'>
                    <div className="2xl:col-span-8 xl:col-span-7 lg:col-span-7 col-span-12 bg-white mt-4 rounded-lg sm:p-8 p-4">
                        <div className='flex justify-between items-center border-b-2 border-[#F0F0F0] pb-6'>
                            <p className='sm:text-lg text-base font-medium'>Upcoming Appointment</p>
                            <p className='text-sm font-medium cursor-pointer'>View all</p>
                        </div>
                        <div className='flex sm:flex-nowrap flex-wrap items-center justify-between py-7 leading-10'>
                            <div>
                                <p className='font-semibold'>Devin Technology: Health Screening</p>
                                <div className='font-medium'>
                                    <span>Monday 06 Mar,2024</span> | <span>10:00 AM - 01:00 PM</span>
                                </div>
                                <p className='font-medium'>( In 2 days)</p>
                            </div>
                            <div className='sm:text-end text-start font-medium'>
                                <p className='text-[#6C6D7B]'>Fee:</p>
                                <p className='text-lg'>R1120.00</p>
                                <button className='bg-[#00987C] text-white px-3 rounded-xl mt-3'>View Details</button>
                            </div>
                        </div>
                        <div className='flex sm:flex-nowrap flex-wrap items-center justify-between py-7 leading-10 border-t-2 border-dashed border-[#F0F0F0]'>
                            <div>
                                <p className='font-semibold'>Devin Technology: Health Screening</p>
                                <div className='font-medium'>
                                    <span>Monday 06 Mar,2024</span> | <span>10:00 AM - 01:00 PM</span>
                                </div>
                                <p className='font-medium'>( In 2 days)</p>
                            </div>
                            <div className='sm:text-end text-start font-medium'>
                                <p className='text-[#6C6D7B]'>Fee:</p>
                                <p className='text-lg'>R1120.00</p>
                                <button className='bg-[#00987C] text-white px-3 rounded-xl mt-3'>View Details</button>
                            </div>
                        </div>
                    </div>
                    <div className="2xl:col-span-4 xl:col-span-5 lg:col-span-5 col-span-12 bg-white mt-4 rounded-lg sm:p-8 p-4">
                        <div className='flex justify-between items-center border-b-2 border-[#F0F0F0] pb-6'>
                            <p className='text-lg font-medium'>Earnings</p>
                            <p className='text-sm font-medium cursor-pointer'>View all</p>
                        </div>
                        <div className='sm:py-7 py-4'>
                            <p className='text-[#6C6D7B] font-medium'>This month</p>
                            <h1 className='text-4xl font-semibold'>R2,400.00</h1>
                        </div>
                        <div className='sm:py-7 py-4'>
                            <p className='text-[#6C6D7B] font-medium'>This month</p>
                            <h1 className='text-2xl font-semibold'>R2,490.00</h1>
                        </div>
                        <div className='flex flex-wrap items-center justify-between'>
                            <div className='sm:py-7 py-4'>
                                <p className='text-[#6C6D7B] font-medium'>Earnings to date</p>
                                <h1 className='text-2xl font-semibold'>R1,48000.00</h1>
                            </div>
                            <div className='sm:py-7 py-4'>
                                <p className='text-[#6C6D7B] font-medium'>Total Appointments</p>
                                <h1 className='text-2xl font-semibold'>150</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkerDashboard