import React, { useState } from 'react'
import loginsides from "../../Assets/Image/corporate/loginside2.jpg"
import logo from "../../Assets/Image/corporate/logo.png"
import thumb from "../../Assets/Image/corporate/thumbs-up_1f44d 1.png"
import health from "../../Assets/Image/corporate/Frame 3.png"
import { ThreeCircles } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import OTPInput from 'react-otp-input'

function CorporateVerification() {

    const navigate = useNavigate()

    const [otp, setOtp] = useState('')
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        navigate("/healthworker/resetpassword")
        // setIsLoading(true)
        // axios.post(ADMIN_LOGIN_API, {
        //     email_id: formData.email_id,
        //     password: formData.password,
        //     device_type: "web",
        //     device_id: "123",
        //     device_token: "abc",
        // }, {
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        //     .then((res) => {
        //         console.log("res >>", res);
        //         const token = res.data.UserToken;
        //         const userInfo = res.data.info;
        //         const status = res?.data?.Status;
        //         if (status == 1) {
        //             toast.success(res.data.Message)
        //             localStorage.setItem("UToken", token)
        //             localStorage.setItem('Admin', JSON.stringify(userInfo));
        //         } else {
        //             toast.error(res.data.Message)
        //         }
        //         setIsLoading(false)
        //     })
        //     .catch((err) => {
        //         console.log("err >>", err);
        //         setIsLoading(false)
        //     })
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value })
    }

    return (
        <>
            <div className="grid grid-cols-12 gap-x-6 fontNew">
                <div className='2xl:col-span-4 xl:col-span-6 lg:col-span-6 h-[100vh] w-full 2xl:flex xl:flex lg:flex hidden bg-center bg-cover' style={{ backgroundImage: `url(${loginsides})` }}>
                    <div className='flex flex-col justify-between '>
                        <div className='mx-16 my-12'>
                            <img src={logo} className='w-40' alt="" />
                        </div>
                        <div className='text-white'>
                            <div className='flex justify-end my-16'>
                                <img src={health} className='w-40 -mr-14' alt="" />
                            </div>
                            <div className='mx-16 bg-[#FFF2F221] px-8 py-12 rounded-xl my-10 backdrop-blur-xl'>
                                <div className='flex items-center bg-[#00987C] p-3 rounded-xl mb-8 w-fit'>
                                    <img src={thumb} className='w-5' alt="" />
                                    <p className='text-sm ps-2'>Stay in touch with Healthcare.</p>
                                </div>
                                <p className='text-xl drop-shadow-md'>Welo extends beyond a service; it champions a shift toward a healthier, more balanced professional lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='2xl:col-span-8 xl:col-span-6 lg:col-span-6 col-span-12 mx-3'>
                    <div className='flex sm:justify-end justify-center sm:mx-32 mx-0 mt-20 cursor-pointer'>
                        <p onClick={() => { navigate("/healthworker/login") }}>Go back to <span className='text-[#EA5F5F] font-medium'>Main Screen</span></p>
                    </div>
                    <div className='text-start flex justify-center items-center h-[80vh]'>
                        <div>
                            <p className='fontNew sm:text-3xl text-lg font-semibold pb-3'>Verification</p>
                            <p className='fontNew text-sm text-[#7E7E7E] py-3'>We have just sent a 4-digit verification code to your <br /> registered email</p>
                            <form onSubmit={handleSubmit}>
                                <div className='my-7 flex justify-center'>
                                    <OTPInput
                                        value={otp}
                                        onChange={setOtp}
                                        numInputs={4}
                                        inputType="tel"
                                        renderInput={(props) => <input {...props} className="otp fontNew bg-zinc-100 outline-[#00987C] rounded-full border-2 border-slate-300 m-3 text-center text-xl font-medium" />}
                                    />
                                </div>
                                <div>
                                    <button type='submit' className='fontNew h-[54px] items-center w-full rounded-2xl flex font-base justify-center text-white text-base bg-[#EA5F5F]'>
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
                                                "Verify"
                                        }
                                    </button>
                                    <div className='mt-5 mb-10 flex items-center justify-center'>
                                        <p className='ps-3 text-sm text-[#EA5F5F] cursor-pointer font-medium'>Resend Code</p>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CorporateVerification