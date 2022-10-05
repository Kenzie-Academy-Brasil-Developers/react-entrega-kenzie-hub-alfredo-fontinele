import { Routes, Route } from 'react-router-dom'
import { Dashboard } from '../pages/Dashboard'
import { Login } from '../pages/Login'
import { PageNotFound } from '../pages/PageNotFound'
import { Register } from '../pages/Register'

export const RoutesGlobal = () => (
    <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="*" element={<PageNotFound/>}/>
    </Routes>
)