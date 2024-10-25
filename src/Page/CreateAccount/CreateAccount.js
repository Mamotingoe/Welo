import React, { useState } from 'react'
import loginsides from "../../Assets/Image/corporate/loginside.jpg"
import EyeSlash from "../../Assets/Image/corporate/slasheye.png"
import Eye from "../../Assets/Image/corporate/eye.png"
import back from "../../Assets/Image/corporate/background.png"
import success from "../../Assets/Image/corporate/Success.png"
import tick from "../../Assets/Image/corporate/tick.png"
import cancel from "../../Assets/Image/corporate/cancel.png"
import logo from "../../Assets/Image/corporate/logo.png"
import thumb from "../../Assets/Image/corporate/thumbs-up_1f44d 1.png"
import health from "../../Assets/Image/corporate/Frame 3.png"
import { ThreeCircles } from 'react-loader-spinner'
import { useNavigate } from 'react-router-dom'
import Dialog from '../../Base-Component/Dialog/Dialog'
import welo from "../../Assets/Image/sidebar/welo.png"

function CreateAccount() {

    const navigate = useNavigate()

    const [eyes, setEyes] = useState(0)
    const [texts, setTexts] = useState("password")
    const [formData, setFormData] = useState({})
    const [isLoading, setIsLoading] = useState(false)
    const [isModalOpens, setModalOpens] = useState(false)

    const handleEyes = () => {
        const flag = eyes == 0 ? 1 : 0
        setEyes(flag)

        const text = texts == "password" ? "text" : "password"
        setTexts(text)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setModalOpens(true)
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
                    <div className='text-start flex justify-center items-center h-[100vh]'>
                        <div>
                            <div className='lg:hidden flex justify-center mb-3'>
                                <img src={welo} className='w-[150px]' alt="" />
                            </div>
                            <p className='fontNew sm:text-3xl text-lg font-bold py-3'>Welcome, Tanya</p>
                            <p className='fontNew text-sm text-[#7E7E7E] py-3'>Please choose a password to create and secure your <br /> account.</p>
                            <p className='fontNew text-sm font-medium mt-3'>Password</p>
                            <form onSubmit={handleSubmit}>
                                <div className='mt-3 mb-6'>
                                    <div className='flex my-3 items-center'>
                                        <input
                                            type={texts}
                                            // required
                                            className='bg-transparent ps-4 pe-12 rounded-xl border-2 border-slate-300 w-full outline-[#00987C] h-[54px] text-base'
                                            placeholder='Password'
                                            name='password'
                                            onChange={(e) => handleChange(e)}
                                        />
                                        {
                                            eyes == 0 ?
                                                <img src={EyeSlash} onClick={handleEyes} className='p-2 w-10 h-10 -ms-12 cursor-pointer' alt="" />
                                                :
                                                <img src={Eye} onClick={handleEyes} className='p-2 w-10 h-8 -ms-12 cursor-pointer' alt="" />
                                        }
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
                                <div className='my-5 flex items-center'>
                                    <input type="checkbox" />
                                    <p className='ps-3 text-sm'>I agree to the <a href="" className='text-blue-600 font-medium'>terms of service</a> and <a href="" className='text-blue-600 font-medium'>privacy policy</a></p>
                                </div>
                                <div>
                                    <button type='submit' className='h-[54px] items-center w-full rounded-2xl flex justify-center text-white text-base bg-[#EA5F5F]'>
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
                                                "Create Account"
                                        }
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                open={isModalOpens}
                onClose={() => setModalOpens(false)}
                size='md'
            >
                <Dialog.Panel>
                    <Dialog.Description className="rounded-none border-2 border-white lg:w-auto w-max-[400px]">
                        <div>
                            <img src={back} className='w-400 relative' alt="" />
                            <div className='flex justify-center'>
                                <img src={success} className='absolute z-10 sm:w-16 w-12 lg:-mt-36 md:-mt-30 sm:-mt-36 -mt-22' alt="" />
                            </div>
                        </div>
                        <div className='flex justify-center text-center my-4 px-16 fontNew'>
                            <div>
                                <h1 className='text-xl font-semibold text-black mt-6'>Account Created Successfully</h1>
                                <p className='text-sm my-3'>Your account has been successfully created. You can now log-in.</p>
                                <button onClick={() => { navigate("/healthworker/login") }} className='bg-black w-full py-3 rounded-lg text-white text-sm mt-9 mb-4'>Log In</button>
                            </div>
                        </div>
                    </Dialog.Description>
                </Dialog.Panel>
            </Dialog>
        </>

    )
}

export default CreateAccount