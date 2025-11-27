import React from 'react'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import ForgodVerify from './components/ForgodVerify'
import ForgotPassword from './components/ForgotPassword'
import SetNewpas from './components/SetNewpas'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/forgotpassword' element={<ForgotPassword/>}/>
      <Route path='/forgodverify' element={<ForgodVerify/>}/>
      <Route path='/setnewpassword' element={<SetNewpas/>}/>
    </Routes>
  )
}

export default App