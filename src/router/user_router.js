// import Layout from '@/views/layout';
// import store from '../store';
export function user_routers() {
    return [{
        path: '',
        component:  () => import("../views/layout/index.vue"),
        alwaysShow: true,
        name: 'employerIndex',
        meta: {
            title: '用户',
            icon: 'customer'
        },
        // children: [{
        //     path: 'client/customer',
        //     component: () => import('@/views/user/main'),
        //     meta: {
        //         title: '主页',
        //         name: 'employerIndex'
        //     },
        //     name: 'employerIndex'
        // }, {
        //     path: 'agency/clients/add',
        //     component: () => import('@/views/user/user'),
        //     meta: {
        //         title: '用户',
        //         name: 'employerUser'
        //     },
        //     name: 'employerUser',
        //     hidden: true
        // }, 
        // ]
    }, 
    // {
    //     path: 'main',
    //     component: { template: '<div>main</div>' },
    //     name: 'employerMain'

    // },
    {
        path: '/main',
        component: () => import('../views/user/main/index.vue'),
        meta: {
            title: '主页',
            name: 'employerMain'
        },
        name: 'employerMain'
    },

    // {
    //     path: '*',
    //     redirect: '/404',
    //     hidden: true,
    // }

    ];
}