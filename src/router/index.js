// import Vue from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import { user_routers } from './user_router';

// Vue.use(VueRouter);

export const constantRouterMap = [
//     {
//     path: '/login',
//     component: () => import('@/views/login'),
//     hidden: true
// }, 

// {
//     path: '/403',
//     component: () => import('@/views/error/err_403'),
//     hidden: true
// }, {
//     path: '/404',
//     component: () => import('@/views/error/err_404'),
//     hidden: true
// }, {
//     path: '/500',
//     component: () => import('@/views/error/err_500'),
//     hidden: true
// }

];

// export default new VueRouter({
//     scrollBehavior: () => ({
//         y: 0
//     }),
//     fallback: false,
//     routes: constantRouterMap
// });








const routes = user_routers();

export const asyncRouterMap = user_routers();



export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
  })


// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: routes
// });
// export default router