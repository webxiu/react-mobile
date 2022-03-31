import React, { useEffect } from 'react';

import { Dialog, } from "antd-mobile";
import MenuList from "../../layout/MenuList";
import { MenuRouter } from '../../router'
import { getUserInfo } from '../../utils'
import { useHistory } from "react-router";

export default () => {
	useEffect(() => {
		const history = useHistory();
		const userInfo = getUserInfo()
		console.log('userInfo', userInfo)
		if (!userInfo.username || !userInfo.password) {
			Dialog.alert({ content: '请先登录!' }).then(() => {
				history.replace("/login")
			})
		}
	}, [])

	return (
		<MenuList>
			<MenuRouter />
		</MenuList>
	);

} 
