import React, { useState } from 'react'
import photos1 from "../../Assets/Image/Healthworker/photo1.png"
import photos2 from "../../Assets/Image/Healthworker/photo2.png"
import photos3 from "../../Assets/Image/Healthworker/photo3.png"
import arrow1 from "../../Assets/Image/Healthworker/arrow-white.png"
import arrow2 from "../../Assets/Image/Healthworker/arrow-black.png"
import { useNavigate } from 'react-router-dom'

function Resources() {
  const navigate = useNavigate()

  const [resourceData, setResourceData] = useState([
    {
      image: photos1,
      date: "22 April 2024",
      name: "Welo:  Ethical Guidelines",
    },
    {
      image: photos2,
      date: "22 April 2024",
      name: "Welo:  Ethical Guidelines",
    },
    {
      image: photos3,
      date: "22 April 2024",
      name: "Welo:  Ethical Guidelines",
    },
    {
      image: photos1,
      date: "22 April 2024",
      name: "Welo:  Ethical Guidelines",
    },
    {
      image: photos2,
      date: "22 April 2024",
      name: "Welo:  Ethical Guidelines",
    },
    {
      image: photos3,
      date: "22 April 2024",
      name: "Welo:  Ethical Guidelines",
    },
    {
      image: photos1,
      date: "22 April 2024",
      name: "Welo:  Ethical Guidelines",
    },
    {
      image: photos2,
      date: "22 April 2024",
      name: "Welo:  Ethical Guidelines",
    },
    {
      image: photos3,
      date: "22 April 2024",
      name: "Welo:  Ethical Guidelines",
    },
  ])

  const handleDetails = () => {
    navigate("/healthworker/resources/resourcesdetails")
  }

  return (
    <div className='fontNew md:m-4 m-1'>
      <div className='grid grid-cols-12 2xl:gap-10 xl:gap-5 gap-4'>
        {
          resourceData.map((item, index) => {
            return (
              <div key={index} className="xl:col-span-4 lg:col-span-6 md:col-span-6 col-span-12 bg-white drop-shadow-xl rounded-[20px]">
                <img src={item.image} alt="" />
                <div className='p-8'>
                  <p className='text-[#6C6D7B]'>{item.date}</p>
                  <h3 className='text-lg font-semibold my-5'>{item.name}</h3>
                  <button onClick={handleDetails} className='flex items-center border-[#00987C] bg-[#00987C] border-2 py-2 px-3 rounded-lg'>
                    <p className='text-sm mr-2 text-white'>View Details</p>
                    <img src={arrow1} className='w-4' alt="" />
                  </button>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Resources