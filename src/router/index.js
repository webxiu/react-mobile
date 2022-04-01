import {
  AppOutline,
  MessageFill,
  MessageOutline,
  UnorderedListOutline,
  UserOutline,
} from "antd-mobile-icons";
import React, { lazy } from "react";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";

import { Badge } from "antd-mobile";
import MenuList from "../layout/MenuList";

// 使用lazy才有 loading 效果
// import loadable from "@loadable/component";

/** 首页底部菜单 */
export const menus = [
  {
    path: "/home/index",
    title: "首页",
    icon: <AppOutline />,
    badge: Badge.dot,
    show: true,
    component: lazy(() =>
      import(/* webpackChunkName: 'index' */ "../views/home/home")
    ),
  },
  {
    path: "/home/study",
    title: "我的学习",
    icon: <UnorderedListOutline />,
    show: true,
    badge: "5",
    component: lazy(() =>
      import(/* webpackChunkName: 'study' */ "../views/home/study")
    ),
  },
  {
    path: "/home/message",
    title: "我的消息",
    icon: (active) => (active ? <MessageFill /> : <MessageOutline />),
    badge: "99+",
    show: true,
    component: lazy(() =>
      import(/* webpackChunkName: 'message' */ "../views/home/message")
    ),
  },
  {
    path: "/home/personal",
    title: "个人中心",
    icon: <UserOutline />,
    show: true,
    component: lazy(() =>
      import(/* webpackChunkName: 'personal' */ "../views/home/personal")
    ),
  },
];

/** 一级级路由 */
export const RootRouter = withRouter(() => (
  <Switch>
    <Route
      path="/course/subject/:id"
      component={lazy(() =>
        import(/* webpackChunkName: 'marx' */ "../views/home/course/subject")
      )}
    />
    <Route
      path="/login"
      component={lazy(() =>
        import(/* webpackChunkName: 'login' */ "../views/login")
      )}
    />
    <MenuList>
      <Route
        path="/"
        render={() => (
          <Switch>
            <Redirect exact={true} from="/" to="/home/index" />
            <Route
              path="/home"
              component={lazy(() =>
                import(/* webpackChunkName: 'home' */ "../views/home/index")
              )}
            />
          </Switch>
        )}
      />
    </MenuList>
    <Route path={"*"} render={() => <div>404全局</div>} />
  </Switch>
));

/** 菜单路由 */
export const MenuRouter = withRouter(() => {
  return (
    <Switch>
      {menus.map((route, idx) => (
        <Route
          key={route.path}
          path={route.path}
          exact={route.exact}
          render={(props) => (
            <route.component {...props} router={route.routes} />
          )}
        />
      ))}
      <Route path="*" render={() => <div>404菜单</div>} />
      {/* <Redirect from="/" to="/hacker" exact={true} /> */}
    </Switch>
  );
});
