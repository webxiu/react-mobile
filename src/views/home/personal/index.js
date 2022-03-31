import { Button } from 'antd-mobile'
import React from 'react'
import { useHistory } from 'react-router'

const Personal = () => {
    const history = useHistory()
    return (
        <div>Personal
            <div>
                <Button onClick={() => history.replace('/login')}>退出</Button>
            </div>
        </div>
    )
}

export default Personal