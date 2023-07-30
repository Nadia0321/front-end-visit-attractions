// import {  lazy } from 'react'
import { useRoutes } from 'react-router-dom'
import Attraction from '../component/Attraction'

// const LoginPage = lazy(() => import('../components/login'))
// const HomePage = lazy(() => import('../components/Place'))
// const UserPage = lazy(() => import('../components/User'))

const Routes = () => useRoutes([
    {
        path: '/',
        element: <privateRoute />,
        children: [
            {
                path: '/attractions',
                element: <Attraction />
            }
        ]
    }
])

export default Routes
