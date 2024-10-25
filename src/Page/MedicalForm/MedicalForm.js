import React from 'react'
import users from "../../Assets/Image/corporate/user.png"
import { useNavigate } from 'react-router-dom'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function MedicalForm() {
    const navigate = useNavigate()

    const initialValues = {
        employeeNumber: '',
        branch: '',
        company: '',
        firstName: '',
        lastName: '',
        jobTitle: '',
        employeeId: '',
        dateOfBirth: '',
        gender: '',
        phone: '',
        email: '',
        from: '',
        to: '',
        city: '',
        jobs: '',
        expose: '',
        historyCompany: '',
        fitnessStatus: 'Awaiting Occupational Nurse Appraisal',
    };

    const noSpecialChars = /^[^<>/?]*$/;
    const onlyNumbers = /^[0-9]*$/;

    const validationSchema = Yup.object({
        employeeNumber: Yup.string()
            .matches(onlyNumbers, '(Only numbers are allowed)')
            .matches(noSpecialChars, '(Special characters are not allowed)')
            .required('(Required)'),
        branch: Yup.string()
            .matches(noSpecialChars, '(Special characters are not allowed)')
            .required('(Required)'),
        company: Yup.string()
            .matches(noSpecialChars, '(Special characters are not allowed)')
            .required('(Required)'),
        firstName: Yup.string()
            .matches(noSpecialChars, '(Special characters are not allowed)')
            .required('(Required)'),
        lastName: Yup.string()
            .matches(noSpecialChars, '(Special characters are not allowed)')
            .required('(Required)'),
        jobTitle: Yup.string()
            .matches(noSpecialChars, '(Special characters are not allowed)')
            .required('(Required)'),
        employeeId: Yup.string()
            .matches(noSpecialChars, '(Special characters are not allowed)')
            .required('(Required)'),
        dateOfBirth: Yup.date().required('(Required)'),
        gender: Yup.string().required('(Required)'),
        phone: Yup.string()
            .matches(onlyNumbers, '(Only numbers are allowed)')
            .matches(noSpecialChars, '(Special characters are not allowed)')
            .required('(Required)'),
        email: Yup.string()
            .email('Invalid email address')
            .matches(
                /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                '(Invalid email address)'
            )
            .matches(noSpecialChars, '(Special characters are not allowed)')
            .required('(Required)'),
    });

    const handleSubmit = (values) => {
        console.log("values >>", values);
    };


    return (
        <div className='fontNew'>
            <div className='bg-[#00042C] text-white h-[350px] w-full text-center'>
                <div className='py-20'>
                    <h1 className='2xl:text-[34px] xl:text-3xl text-2xl'>Occupational Medical Fitness Certificate</h1>
                    <p className='2xl:text-lg text-base mt-2'>Medical Form</p>
                </div>
            </div>
            <div className='flex justify-center bg-white -mt-32 2xl:mx-40 xl:mx-28 lg:mx-24 mx-6'>
                <div className='md:my-10 my-5 w-full'>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ values }) => (
                            <Form className="space-y-6 mx-10">
                                <div className='grid grid-cols-12 gap-6'>
                                    <div className='md:col-span-6 col-span-12'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="company">Company</label>
                                            <ErrorMessage name="company" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="company" as="select" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]">
                                            <option value="">Select</option>
                                            <option value="Branch 1">Branch 1</option>
                                            <option value="Branch 2">Branch 2</option>
                                        </Field>
                                    </div>
                                    <div className='md:col-span-6 col-span-12'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="branch">Branch</label>
                                            <ErrorMessage name="branch" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="branch" as="select" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]">
                                            <option value="">Select</option>
                                            <option value="Branch 1">Branch 1</option>
                                            <option value="Branch 2">Branch 2</option>
                                        </Field>
                                    </div>
                                    <div className='col-span-12'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="employeeId">Employee ID No.</label>
                                            <ErrorMessage name="employeeId" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="employeeId" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='col-span-6'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="firstName">Employee's First Name</label>
                                            <ErrorMessage name="firstName" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="firstName" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='col-span-6'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="lastName">Employee's Last Name</label>
                                            <ErrorMessage name="lastName" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="lastName" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='col-span-6'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="jobTitle">Employee Job Title</label>
                                            <ErrorMessage name="jobTitle" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="jobTitle" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='col-span-6'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="employeeNumber">Employment Number</label>
                                            <ErrorMessage name="employeeNumber" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="employeeNumber" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='col-span-6'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="phone">Employee Phone No.</label>
                                            <ErrorMessage name="phone" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="phone" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='col-span-6'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="email">Employee Email</label>
                                            <ErrorMessage name="email" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="email" type="email" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>

                                    <div className='col-span-12 py-5 mt-2 border-t-2 border-gray-100'>
                                        <h1 className='text-xl font-medium'>Occupational History</h1>
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="from">From</label>
                                        </div>
                                        <Field name="from" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="to">To</label>
                                        </div>
                                        <Field name="to" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="historyCompany">Company</label>
                                        </div>
                                        <Field name="historyCompany" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="city">City/Town</label>
                                        </div>
                                        <Field name="city" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="jobs">Job Title</label>
                                        </div>
                                        <Field name="jobs" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="expose">Hazard expose Noise/Dust/Chemicals/Heights etc.</label>
                                        </div>
                                        <Field name="expose" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className='col-span-12 py-5 mt-2 border-t-2 border-gray-100'>
                                        <h1 className='text-xl font-medium'>Medical History (Family)</h1>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Asthma</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="employeeasthma" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="employeeasthma" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Sugar Diabetes</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="employeesugar" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="employeesugar" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Hypertension</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="employeehypertension" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="employeehypertension" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Arthritis</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="employeearthritis" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="employeearthritis" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Arthritis</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="employeepilepsies" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="employeepilepsies" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">HIV</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="employeehiv" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="employeehiv" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">TB</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="employeetb" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="employeetb" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='col-span-12 py-5 mt-2 border-t-2 border-gray-100'>
                                        <h1 className='text-xl font-medium'>Medical History (Personal)</h1>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Asthma</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="asthma" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="asthma" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Sugar Diabetes</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="sugar" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="sugar" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Hypertension</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="hypertension" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="hypertension" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Allergies</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="allergies" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="allergies" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Head Injury</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="injury" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="injury" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Back problem</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="back" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="back" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Muscle problem</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="muscle" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="muscle" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Headaches</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="headaches" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="headaches" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">TB</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="tb" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="tb" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Heart problems</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="heart" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="heart" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Kidney problems</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="kidney" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="kidney" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Eye/ Vision problem</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="eyevision" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="eyevision" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Mental Disorders</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="mental" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="mental" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Fits/Epilepsy</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="epilepsy" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="epilepsy" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Abdomen/Stomach</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="abdomen" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="abdomen" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Skin problems</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="skin" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="skin" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Arthritis</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="arthritis" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="arthritis" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Chest problems</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="chest" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="chest" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Urinary tract disease</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="urinary" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="urinary" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Ear problems</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="ear" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="ear" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Varicose Veins</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="varicose" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="varicose" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Other illness</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="illness" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="illness" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Last Dr. Visit</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="visit" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="visit" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Operations</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="operations" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="operations" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Any injuries</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="injuries" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="injuries" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Hazards Exposure</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="hazards" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="hazards" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Chronic Medication</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="chronic" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="chronic" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Alcohol Use</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="alcohol" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="alcohol" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>
                                    <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='text-[#565656]' htmlFor="jobs">Smoking</label>
                                        </div>
                                        <div className='flex py-1 font-medium'>
                                            <label className="text-sm rounded-full flex justify-center text-black">
                                                <Field type="radio" name="smoking" className="mr-3 gen-radio" value="male" />
                                                <p>Yes</p>
                                            </label>
                                            <label className="text-sm rounded-full flex justify-center ml-4 text-black">
                                                <Field type="radio" name="smoking" className="mr-3 gen-radio" value="female" />
                                                <p>No</p>
                                            </label>
                                        </div>
                                    </div>

                                    <div className='col-span-12 pt-5 mt-2 border-t-2 border-gray-100'>
                                        <h1 className='text-xl font-medium'>Physical Examination</h1>
                                    </div>
                                    <div className='col-span-12 m-0 p-0'>
                                        <h1 className='text-base font-medium text-[#565656]'>General</h1>
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="height">Height</label>
                                        </div>
                                        <Field name="height" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="weight">Weight</label>
                                        </div>
                                        <Field name="weight" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="BMI">BMI</label>
                                        </div>
                                        <Field name="BMI" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>

                                    <div className='col-span-12 m-0 p-0'>
                                        <h1 className='text-base font-medium text-[#565656]'>Cardio Vascular</h1>
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="bp">BP</label>
                                        </div>
                                        <Field name="bp" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="pulse">Pulse</label>
                                        </div>
                                        <Field name="pulse" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>

                                    <div className='col-span-12 pt-5 mt-2 border-t-2 border-gray-100'>
                                        <h1 className='text-xl font-medium'>Full Physical Examination</h1>
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="heart">Heart</label>
                                        </div>
                                        <Field name="heart" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="lungs">Lungs</label>
                                        </div>
                                        <Field name="lungs" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="ears">Ears</label>
                                        </div>
                                        <Field name="ears" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="skin">Skin</label>
                                        </div>
                                        <Field name="skin" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="abdomen">Abdomen</label>
                                        </div>
                                        <Field name="abdomen" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="eyes">Eyes</label>
                                        </div>
                                        <Field name="eyes" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="upperlimbs">Upper limbs</label>
                                        </div>
                                        <Field name="upperlimbs" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="limbs">Lower limbs/legs</label>
                                        </div>
                                        <Field name="limbs" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="spine">Spine</label>
                                        </div>
                                        <Field name="spine" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="veins">Varicose Veins</label>
                                        </div>
                                        <Field name="veins" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>

                                    <div className='col-span-12 pt-5 mt-2 border-t-2 border-gray-100'>
                                        <h1 className='text-xl font-medium'>Eye Test To Vision, Audiometry, Lungs And Drug Screening</h1>
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="lefteye">Left Eye 20</label>
                                        </div>
                                        <Field name="lefteye" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="righteye">Right Eye 20</label>
                                        </div>
                                        <Field name="righteye" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="correctedvision">Corrected Vision</label>
                                        </div>
                                        <Field name="correctedvision" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-6">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="perception">Colour Perception</label>
                                        </div>
                                        <Field name="perception" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-12">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="spirometry">Spirometry</label>
                                        </div>
                                        <Field name="spirometry" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="FVC">FVC</label>
                                        </div>
                                        <Field name="FVC" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="FEV1">FEV 1</label>
                                        </div>
                                        <Field name="FEV1" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="PEFR">PEFR</label>
                                        </div>
                                        <Field name="PEFR" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="audiometry">Audiometry</label>
                                        </div>
                                        <Field name="audiometry" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="PLH">PLH</label>
                                        </div>
                                        <Field name="PLH" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-4">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="ABHL">ABHL</label>
                                        </div>
                                        <Field name="ABHL" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>
                                    <div className="col-span-12">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="substance">Substance Test</label>
                                        </div>
                                        <Field name="substance" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                    </div>

                                    <div className="col-span-12 mx-5 font-medium">
                                        <ol className="list-decimal list-outside space-y-1">
                                            <li>
                                                The OHMP (Doctor in Charge) may request reports of tests done for Occupational Health Exposure, Medical surveillance as well as clinical reports and special investigation that may affect my health at work from any previous employer or medical service provider.
                                            </li>
                                            <li>
                                                The Occupational Health and Safety (OHS) Act makes the employer responsible for filing these reports. X-rays and employee tests are to be kept confidentially for at least 40 years.
                                            </li>
                                            <li>
                                                I furthermore agree to undergo medical examinations as required for medical surveillance purposes.
                                            </li>
                                            <li>
                                                I also agree to wear the appropriate protective equipment and clothes as prescribed by the company.
                                            </li>
                                        </ol>
                                    </div>
                                    <div className="col-span-12">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="substance">Consent</label>
                                        </div>
                                        <Field name="substance" type="text" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]" />
                                        <div className='flex mt-2'>
                                            <input type="checkbox" />
                                            <p className='ms-3'>I agree that the full medical evaluation</p>
                                        </div>
                                    </div>
                                    <div className='md:col-span-6 col-span-12'>
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="fitwork">Fit for work status</label>
                                            <ErrorMessage name="fitwork" component="div" className="text-red-500" />
                                        </div>
                                        <Field name="fitwork" as="select" className="input border-[1px] py-2 px-3 w-full rounded-md outline-[#029D79]">
                                            <option value="">Select</option>
                                            <option value="Branch 1">Awaiting Occupational Nurse Appraisal</option>
                                            <option value="Branch 2">Awaiting Occupational Nurse Appraisal</option>
                                        </Field>
                                    </div>
                                    <br />
                                    <div className="md:col-span-6 col-span-12">
                                        <div className='flex text-sm font-medium mb-2'>
                                            <label className='mr-2' htmlFor="supportdocument">Attach Support Document</label>
                                            <ErrorMessage name="supportdocument" component="div" className="text-red-500" />
                                        </div>
                                        <div className='border-2 border-dashed flex justify-center items-center text-center h-44'>
                                            <div>
                                                <p className='text-sm font-medium mb-2'>Drop files here or</p>
                                                <button className='border-2 border-dashed sm:px-7 px-3 py-3 text-sm' >
                                                    <label htmlFor="dropfile">Select files</label>
                                                </button>
                                                <input type="file" id='dropfile' className='hidden' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="md:col-span-6 col-span-12 flex items-center text-base">
                                        <div>
                                            <p>Max. file size: 64 MB.</p>
                                            <div className='mt-2 font-medium'>
                                                <p>Eye Test</p>
                                                <p>Ear Test</p>
                                                <p>Referral Letter</p>
                                                <p>Any Other Relevant Documents</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-span-6">
                                        <div role="group" aria-labelledby="my-radio-group" className="col-span-3 m-2">
                                            <div className='flex text-sm font-medium mb-2'>
                                                <label className='text-[#565656]' htmlFor="jobs">Operations</label>
                                                <ErrorMessage name="typemedical" component="div" className="text-red-500" />
                                            </div>
                                            <div className='flex justify-start py-1 font-medium'>
                                                <div className='space-y-3'>
                                                    <label className="text-sm rounded-full flex justify-start text-black">
                                                        <Field type="radio" name="operations" className="mr-3 gen-radio" value="periodic" />
                                                        <p>Periodic</p>
                                                    </label>
                                                    <label className="text-sm rounded-full flex justify-start text-black">
                                                        <Field type="radio" name="operations" className="mr-3 gen-radio" value="exit" />
                                                        <p>Exit</p>
                                                    </label>
                                                    <label className="text-sm rounded-full flex justify-start text-black">
                                                        <Field type="radio" name="operations" className="mr-3 gen-radio" value="trigger" />
                                                        <p>Trigger</p>
                                                    </label>
                                                    <label className="text-sm rounded-full flex justify-start text-black">
                                                        <Field type="radio" name="operations" className="mr-3 gen-radio" value="transfer" />
                                                        <p>Transfer</p>
                                                    </label>
                                                    <label className="text-sm rounded-full flex justify-start text-black">
                                                        <Field type="radio" name="operations" className="mr-3 gen-radio" value="employment" />
                                                        <p>Pre-employment</p>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary bg-black px-14 py-3 rounded-lg text-white text-sm">
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}

export default MedicalForm