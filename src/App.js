import React  from 'react'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home.jsx'
import RootLayout from './Components/RootLayout.jsx'
import SignupPage from './Components/SignupPage.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
    <Route index element={<Home/>}/>
    <Route path='sign up' element={<SignupPage/>}/>
   
    </Route>
  )
)

const App = () => {
  
  return ( 
     
     <RouterProvider router={router} />
  )
}

export default App
