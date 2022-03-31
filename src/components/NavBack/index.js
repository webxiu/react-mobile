import './index.css'

import { useHistory, useLocation, } from 'react-router'

import { AppstoreOutline } from 'antd-mobile-icons'
import { NavBar, } from 'antd-mobile'
import React from 'react'

const NavBack = (props) => {
    const history = useHistory()
    const location = useLocation()
    const isHome = location.pathname === '/'

    const back = () => {
        history.goBack()
    }


    if (navigator.userAgent.match(/phone|pad|pod|iPhone|iPod|ios|iPad|Anddroid|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone/)) {
        console.log('手机')
    } else {
        console.log('PC')
    }

    return (
        <>

            <div className='flex-col nav-wrap' >
                <div className='head-nav-bar'>
                    <NavBar back={isHome ? undefined : '返回'} backArrow={isHome ? false : true} onBack={back} right={isHome ? null : <AppstoreOutline onClick={() => history.replace('/')} />}>
                        计算机科学与技术
                    </NavBar>
                </div>
                <div className='flex-1 ui-ovy-a'>
                    {props.children}
                </div>
            </div >
        </>
    )
}

export default NavBack