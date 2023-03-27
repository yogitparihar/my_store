import {createBrowserRouter} from 'react-router-dom'
import { Dashboard } from '../pages'
import { Home } from '../pages/Dashboard/Home/Home'
export const router = createBrowserRouter([
    {
        path:'/',
        element:<Dashboard/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    }
])
