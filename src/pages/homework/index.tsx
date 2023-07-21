import React from 'react'
import HomeworkAdminMode from './adminMode'
import { Outlet } from 'react-router-dom'

const HomeWork: React.FC = () => {
    return (
        <>
        <div className="homework-wrap">
            <Outlet></Outlet>
        </div>
        </>
    )
}

export default HomeWork