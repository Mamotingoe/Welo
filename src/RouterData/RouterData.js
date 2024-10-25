import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CreateAccount from '../Page/CreateAccount/CreateAccount'
import CorporateLogin from '../Page/CorporateLogin/CorporateLogin'
import CorporateForgot from '../Page/CorporateForgot/CorporateForgot'
import CorporateVerification from '../Page/CorporateVerification/CorporateVerification'
import CorporateResetPass from '../Page/CorporateResetPass/CorporateResetPass'
import MainLayer from '../Layouts/MainLayer/MainLayer'
import WorkerForm from '../Page/WorkerForm/WorkerForm'
import WorkerConfirmed from '../Page/WorkerConfirmed/WorkerConfirmed'
import WorkerDashboard from '../Page/WorkerDashboard/WorkerDashboard'
import AppointmentDetails from '../Page/AppointmentDetails/AppointmentDetails'
import MedicalForm from '../Page/MedicalForm/MedicalForm'
import NewRequestDetails from '../Page/NewRequestDetails/NewRequestDetails'
import Earning from '../Page/Earning/Earning'
import Messages from '../Page/Messages/Messages'
import Support from '../Page/Support/Support'
import Resources from '../Page/Resources/Resources'
import ResourcesDetails from '../Page/ResourcesDetails/ResourcesDetails'
import Appointments from '../Page/Appointments/Appointments'
import Profile from '../Page/Profile/Profile'
import Setting from '../Page/Setting/Setting'

function RouterData() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path='/healthworker' element={<WorkerForm />} />
                    <Route path='/healthworker/workerform' element={<WorkerForm />} />
                    <Route path='/healthworker/workerconfirmed' element={<WorkerConfirmed />} />
                    <Route path='/healthworker/createaccount' element={<CreateAccount />} />
                    <Route path='/healthworker/login' element={<CorporateLogin />} />
                    <Route path='/healthworker/forgot' element={<CorporateForgot />} />
                    <Route path='/healthworker/verification' element={<CorporateVerification />} />
                    <Route path='/healthworker/resetpassword' element={<CorporateResetPass />} />

                    <Route path='/healthworker/workerdashboard' element={<MainLayer><WorkerDashboard /></MainLayer>} />
                    <Route path='/healthworker/appointments' element={<MainLayer><Appointments /></MainLayer>} />
                    <Route path='/healthworker/appointments/appointmentdetails' element={<MainLayer><AppointmentDetails /></MainLayer>} />
                    <Route path='/healthworker/medicalform' element={<MedicalForm />} />
                    <Route path='/healthworker/requestdetails' element={<MainLayer><NewRequestDetails /></MainLayer>} />
                    <Route path='/healthworker/messages' element={<MainLayer><Messages /></MainLayer>} />
                    <Route path='/healthworker/resources' element={<MainLayer><Resources /></MainLayer>} />
                    <Route path='/healthworker/resources/resourcesdetails' element={<MainLayer><ResourcesDetails /></MainLayer>} />
                    <Route path='/healthworker/earnings' element={<MainLayer><Earning /></MainLayer>} />
                    <Route path='/healthworker/support' element={<MainLayer><Support /></MainLayer>} />
                    <Route path='/healthworker/profile' element={<MainLayer><Profile /></MainLayer>} />
                    <Route path='/healthworker/setting' element={<MainLayer><Setting /></MainLayer>} />

                </Routes>
            </BrowserRouter>
        </>
    )
}

export default RouterData