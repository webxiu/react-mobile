import { Button, Dialog, } from "antd-mobile";

import React from 'react'
import { getUserInfo } from '../../../utils'
import { useHistory } from 'react-router'

const Personal = () => {
    const history = useHistory()
    const logout = async () => {
        const res = await Dialog.confirm({ content: '确认退出吗?' })
        if (res) {
            getUserInfo()
            history.replace('/login')
        }
    }
    return (
        <div>Personal
            <div>
                <Button onClick={logout}>退出</Button>
            </div>
        </div>
    )
}

export default Personal