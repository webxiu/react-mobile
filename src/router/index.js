import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import { Redirect, Route, Switch, } from "react-router-dom";

import { Badge } from "antd-mobile";
import MenuList from "../layout/MenuList";
import React from "react";
import loadable from "@loadable/component";

/** 首页底部菜单 */
export const menus = [
  {
    path: "/home/index",
    title: "首页",
    icon: <AppOutline />,
    badge: Badge.dot,
    show: true,
    component: loadable(() =>
      import(/* webpackChunkName: 'index' */ "../views/home/home")
    ),
  },
  {
    path: "/home/study",
    title: "我的学习",
    icon: <UnorderedListOutline />,
    show: true,
    badge: "5",
    component: loadable(() =>
      import(/* webpackChunkName: 'study' */ "../views/home/study")
    ),
  },
  {
    path: "/home/message",
    title: "我的消息",
    icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
    badge: "99+",
    show: true,
    component: loadable(() =>
      import(/* webpackChunkName: 'message' */ "../views/home/message")
    ),
  },
  {
    path: "/home/personal",
    title: "个人中心",
    icon: <UserOutline />,
    show: true,
    component: loadable(() =>
      import(/* webpackChunkName: 'personal' */ "../views/home/personal")
    ),
  },
];




/** 一级级路由 */
export const RootRouter = () => (
  <Switch>
    <Route path="/marx/chapter/:id" component={loadable(() => import(/* webpackChunkName: 'marx' */ "../views/home/marx/chapter"))} />
    <Route path="/login" component={loadable(() => import(/* webpackChunkName: 'login' */ "../views/login"))} />
    <MenuList>
      <Route
        path="/"
        render={() => (
          <Switch>
            <Redirect exact={true} from="/" to="/home/index" />
            <Route path="/home" component={loadable(() => import(/* webpackChunkName: 'home' */ "../views/home/index"))} />
            <Route component={<div>404</div>} />
          </Switch>
        )}
      />
    </MenuList>
  </Switch>
);

/** 菜单路由 */
export const MenuRouter = () => {
  return (
    <Switch>
      {menus.map((route, idx) =>
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={(props) => (<route.component {...props} router={route.routes} />)}
        />
      )}
      <Route component={<div>404</div>} />
      {/* <Redirect from="/" to="/hacker" exact={true} /> */}
    </Switch>
  );
};
