import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/Login'
import Main from '@/views/Main'
import Table from '@/views/Table'
import Form from '@/views/Form'
import Button from '@/views/Button'
// @=src文件夹
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: "/",
            redirect: "/table"
        },
        {
            name: '登陆界面',
            path: '/login',
            component: Login
        },
        {
            name: '主页',
            path: '/',
            component: Main,
            children: [{
                    name: '表格',
                    path: '/table',
                    component: Table
                },
                {
                    name: '表单',
                    path: '/form',
                    component: Form


                }, {
                    name: '按钮',
                    path: '/button',
                    component: Button
                }
            ]
        }
    ]
})