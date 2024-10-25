import React from 'react'
import { useNavigate } from 'react-router-dom'
import back from "../../Assets/Image/corporate/back.png"
import Images from "../../Assets/Image/Healthworker/img.png"

function ResourcesDetails() {
    const navigate = useNavigate()
    return (
        <div className='md:m-4 m-1 fontNew'>
            <div className="col-span-12 mb-3">
                <div className='flex items-center cursor-pointer fontNew'>
                    <img src={back} onClick={() => { navigate("/healthworker/resources") }} className='w-4' alt="" />
                    <p onClick={() => { navigate("/healthworker/resources") }} className='text-base font-medium ms-3'>Go back</p>
                </div>
            </div>
            <div className="grid grid-cols-12 bg-white rounded-[8px]">
                <div className="col-span-12 flex justify-center items-center text-center p-5">
                    <div className='w-[963px]'>
                        <h1 className='lg:text-[46px] md:text-[35px] text-[25px] font-semibold'>Welo: Ethical Guidelines</h1>
                        <img src={Images} className='my-6' alt="" />
                        <div className='text-start text-[#6C6D7B]'>
                            <p className='my-6'>
                                Details: In an era defined by rapid technological advancement, the ethical considerations surrounding Artificial Intelligence (AI)
                                have never been more critical. Welo, a cutting-edge AI platform, emerges as a beacon of innovation,
                                but with it comes the imperative to establish ethical guidelines that steer its development and application
                                toward positive societal impact.
                            </p>
                            <ol className='list-decimal'>
                                <li className='my-6'>
                                    Transparent Development: <br />
                                    The Welo Ethical Code emphasizes transparency in every facet of development.
                                    This entails open discussions about Welo's capabilities, limitations, and potential societal impacts.
                                    Developers commit to sharing insights into algorithmic decision-making processes,
                                    fostering trust among users and stakeholders.
                                </li>
                                <li className='my-6'>
                                    Privacy Protections: <br />
                                    Central to the Welo Ethical Code is a commitment to protecting user privacy and data security.
                                    Welo developers implement robust encryption protocols and anonymization techniques to safeguard
                                    sensitive information. Users retain control over their data, with clear consent mechanisms and
                                    stringent data access controls in place.
                                </li>
                                <li className='my-6'>
                                    Equity-Centered Design: <br />
                                    Welo's design principles prioritize fairness and equity. Developers actively mitigate biases in
                                    data collection and algorithmic decision-making to ensure equitable outcomes for all users. Moreover,
                                    efforts are made to address digital divides and provide access to Welo's benefits to marginalized
                                    communities.
                                </li>
                                <li className='my-6'>
                                    Safety Measures: <br />
                                    The Welo Ethical Code mandates stringent safety measures to mitigate risks associated with AI deployment.
                                    Continuous monitoring and auditing processes are implemented to detect and address potential harms,
                                    with mechanisms in place to swiftly respond to emergent issues. User safety and well-being remain paramount
                                    throughout Welo's lifecycle.
                                </li>
                                <li className='my-6'>
                                    Responsible Innovation: <br />
                                    Welo developers embrace a culture of responsible innovation, engaging in ongoing dialogue with ethicists,
                                    policymakers, and affected communities. Ethical impact assessments are conducted to anticipate and
                                    address potential risks, ensuring that Welo aligns with societal values and priorities.
                                </li>
                                <li className='my-6'>
                                    Environmental Consciousness: <br />
                                    Environmental sustainability is integrated into Welo's development and deployment strategies.
                                    Efforts are made to minimize Welo's carbon footprint through energy-efficient design practices,
                                    responsible sourcing of materials, and waste reduction initiatives. By prioritizing environmental
                                    stewardship, Welo contributes to a more sustainable future.
                                </li>
                                <li className='my-6'>
                                    Educational Initiativess: <br />
                                    The Welo Ethical Code emphasizes the importance of education and awareness-raising efforts.
                                    Users are provided with comprehensive resources to understand the ethical implications of AI
                                    and make informed decisions about Welo's usage. Educational programs aim to foster a culture of
                                    ethical innovation, empowering individuals to navigate the complexities of AI responsibly.
                                </li>
                            </ol>
                            <p>
                                By adhering to the principles outlined in the Welo Ethical Code,
                                stakeholders navigate the future of AI with confidence, ensuring that Welo remains a
                                force for good in the ever-evolving technological landscape.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResourcesDetails