import React  from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import RootLayout from './Components/RootLayout.jsx'
import SignInPage from './Pages/SignInPage.jsx'
import RegisterPage, { registerAction } from './Pages/RegisterPage.jsx'
import ForgotPassword from './Pages/ForgotPassword.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='sign in' element={<SignInPage/>} action={registerAction}/>
    <Route path='register' element={<RegisterPage/>}/>
    <Route path='forgot password' element={<ForgotPassword/>}/>
   
    </Route>
  )
)

const App = () => {
  
  return ( 
     
     <RouterProvider router={router} />
  )
}

export default App
