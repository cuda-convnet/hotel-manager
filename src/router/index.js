import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar,
  }
**/
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  // {
  //   path: '/',
  //   component: Layout,
  //   redirect: '/home',
  //   name: 'Dashboard',
  //   hidden: true,
  //   children: [{
  //     path: 'dashboard',
  //     component: () => import('@/views/dashboard/index')
  //   }]
  // },
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', icon: 'example' }
      }
    ]
  },
  {
    path: '/roomType',
    component: Layout,
    meta: { title: '房间类型管理', icon: 'nested' },
    children: [
      {
        path: '',
        name: 'RoomType',
        meta: { title: '房间类型管理' },
        component: () => import('@/views/roomType/index')
      },
      {
        path: 'add',
        name: 'AddType',
        hidden: true,
        component: () => import('@/views/roomType/add'),
        meta: { title: '添加房间类型' }
      },
      {
        path: 'edit',
        name: 'EditType',
        hidden: true,
        component: () => import('@/views/roomType/edit'),
        meta: { title: '编辑房间类型' }
      }
    ]
  },
  {
    path: '/roomInfo',
    component: Layout,
    meta: { title: '房间信息管理', icon: 'table' },
    children: [
      {
        path: '',
        name: 'RoomInfo',
        component: () => import('@/views/roomInfo/index'),
        meta: { title: '房间信息管理', icon: 'table' }
      },
      {
        path: 'add',
        name: 'AddRoom',
        hidden: true,
        component: () => import('@/views/roomInfo/add'),
        meta: { title: '添加房间' }
      },
      {
        path: 'edit',
        name: 'EditRoom',
        hidden: true,
        component: () => import('@/views/roomInfo/edit'),
        meta: { title: '编辑房间' }
      }
    ]
  },
  {
    path: '/worker',
    component: Layout,
    meta: { title: '操作员信息管理', icon: 'user' },
    children: [
      {
        path: '',
        name: 'Worker',
        component: () => import('@/views/worker/index'),
        meta: { title: '操作员信息管理', icon: 'user' }
      },
      {
        path: 'add',
        name: 'AddWorker',
        hidden: true,
        component: () => import('@/views/worker/add'),
        meta: { title: '添加操作员' }
      },
      {
        path: 'edit',
        name: 'EditWorker',
        hidden: true,
        component: () => import('@/views/worker/edit'),
        meta: { title: '编辑操作员' }
      }
    ]
  },
  {
    path: '/bookingType',
    component: Layout,
    meta: { title: '预订方式管理', icon: 'tree' },
    children: [
      {
        path: '',
        name: 'BookingType',
        component: () => import('@/views/bookingType/index'),
        meta: { title: '预订方式管理', icon: 'tree' }
      },
      {
        path: 'add',
        name: 'AddBookingType',
        hidden: true,
        component: () => import('@/views/bookingType/add'),
        meta: { title: '添加预订方式' }
      },
      {
        path: 'edit',
        name: 'EditBookingType',
        hidden: true,
        component: () => import('@/views/bookingType/edit'),
        meta: { title: '编辑预订方式' }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    meta: { title: '订单管理', icon: 'tree' },
    children: [
      {
        path: '',
        name: 'Order',
        component: () => import('@/views/order/order'),
        meta: { title: '订单管理', icon: 'tree' }
      },
      {
        path: 'add',
        name: 'AddOrder',
        hidden: true,
        component: () => import('@/views/order/add'),
        meta: { title: '添加订单' }
      },
      {
        path: 'edit',
        name: 'EditOrder',
        hidden: true,
        component: () => import('@/views/order/edit'),
        meta: { title: '编辑订单'}
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    meta: { title: '客户管理', icon: 'tree' },
    children: [
      {
        path: '',
        name: 'Guest',
        component: () => import('@/views/guest/index'),
        meta: { title: '客户管理', icon: 'tree' }
      },
      {
        path: 'add',
        name: 'AddGuest',
        hidden: true,
        component: () => import('@/views/guest/add'),
        meta: { title: '添加客户' }
      },
      {
        path: 'edit',
        name: 'EditGuest',
        hidden: true,
        component: () => import('@/views/guest/edit'),
        meta: { title: '编辑客户'}
      }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
