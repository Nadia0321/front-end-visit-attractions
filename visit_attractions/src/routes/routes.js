import { lazy } from 'react'
import { useRoutes, Outlet } from 'react-router-dom'
// import Place from '../component/Place'

// const LoginPage = lazy(() => import('../components/login'))
// const HomePage = lazy(() => import('../components/Place'))
// const UserPage = lazy(() => import('../components/User'))

import PrivateRoute from './PrivateRoute'
import PlacePage from '../pages/PlacePage/PlacePage'
import AttractionPage from '../pages/AttractionPage/AttractionPage'
// import Attraction from '../components/Attraction'
import Place from '../components/Place'

const NotFound = () => {
    return <p>page not found</p>
}


const Routes = () => useRoutes([
    {
        path: '/',
        element: <PrivateRoute />,
        children: [
            // {
            //     path: '',
            //     element: <Attraction />
            // },
            {
                path: '',
                element: <PlacePage />
            },
            // {
            //     path: '/test',
            //     element: <Test />
            // }
            {
                path: '/attractions',
                element: <AttractionPage />
            }

        ],
    },
    {
        path: '*',
        element: <NotFound />
    }
])

export default Routes
