import App from '../../App'
import Signin from '../signin'
import Signup from '../signup'
// import HomePage from '../home/home'

import { Route, Routes } from 'react-router-dom'

const Routers = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<App />}>
                    <Route index element={<App/>} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='signin' element={<Signin />} />
                </Route>
            </Routes>
        </>
    )
}

export default Routers
