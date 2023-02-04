import React from 'react'
import Feed from './Feed/Feed'
import './Home.css'
import Sidebar from './Sidebar/Sidebar'
import Widgets from './Widgets/Widgets'

function Home() {
    return (
        <div className='container_home'>

            <Sidebar />
            <Feed />
            <Widgets />
        </div>
    )
}

export default Home