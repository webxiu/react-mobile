import React, { useEffect, useState } from "react";

import { Collapse } from "antd-mobile";
import MenuList from '../../layout/MenuList'
import { NavLink } from "react-router-dom";
import { routerList } from "../../config";

const __collapse = "__collapse"

const extArr = [
	1732, 542, 544, 1165, 545, 1166, 515, 516, 523, 524, 525, 526, 527, 1017,
	1326, 1327, 1642, 1744,
];

const marxChildren = routerList.results
	.filter((f) => !extArr.includes(f.id))
	.map(({ title, id }) => ({
		name: title,
		id,
		path: "/marx/chapter",

	}));


const Home = (props) => {

	const [isCollapse, setIsCollapse] = useState('')

	const marxList = [
		{
			path: "/marx/",
			children: marxChildren,
			name: "03709 马克思主义基本原理概论",
			description:
				"马克思主义基本原理概论（03709）是高等教育自学考试各专业本科阶段的一门公共基础课。本课程共7章内容，重点在第1章、第2章、第3章、第4章、第5章、第6章；次重点在第7章。",
		},
		// {
		//   path: "/history/",
		//   exact: true,
		//   name: "03708 中国近现代史纲要",
		//   description:
		//     "中国近现代史（03708）是高等教育自学考试各专业本科阶段的一门公共基础课。本课程共11章内容，重点在第1章、第2章、第3章、第5章、第6章、第8章、第11章；次重点在第4章、第7章、第9章、第10章。",
		// },
		{
			path: "/think-society/",
			children: [
				{
					path: "/think-society/chapter1",
					name: "绪论 毛泽东思想和中国特色社会主义思想概论",
				},
			],
			name: "12656 毛泽东思想和中国特色社会主义思想概论",
			description:
				"毛泽东思想和中国特色社会主义思想概论（12656）是高等教育自学考试各专业专科阶段的一门公共基础课。",
		},
	];

	useEffect(() => {
		const coll = localStorage.getItem(__collapse)
		setIsCollapse(coll)

	}, [])

	useEffect(() => {
		return () => {
			localStorage.setItem(__collapse, isCollapse)
		}
	}, [isCollapse])


	const onChange = (value) => {
		setIsCollapse(value)
		localStorage.setItem(__collapse, value)
	}

	console.log('marxChildren', marxChildren)

	return (
		<MenuList>
			{props.children}
			<Collapse accordion={true} onChange={onChange} activeKey={isCollapse}>
				{marxList.map((route) => {
					if (route.hidden) return null;
					return route.children ? (
						<Collapse.Panel
							key={route.path}
							title={<span className="ellipsis">{route.name}</span>}
						>
							{route.children.map((child, index) => (
								<div key={index}>
									<NavLink
										className="ellipsis"
										to={child.path + '/' + child.id}
										activeStyle={{ color: "#f60" }}
										style={{ textDecoration: "none", color: "inherit" }}
									>
										{child.name}
									</NavLink>
								</div>
							))}
						</Collapse.Panel>
					) : (
						<Collapse.Panel
							key={route.path}
							arrow={false}
							title={
								<NavLink
									className="ellipsis"
									to={route.path + '/' + route.id}
									activeStyle={{ color: "#f60" }}
									style={{ textDecoration: "none", color: "inherit" }}
								>
									{route.name}
								</NavLink>
							}
						></Collapse.Panel>
					);
				})}
			</Collapse>
		</MenuList>
	);
};

export default Home;