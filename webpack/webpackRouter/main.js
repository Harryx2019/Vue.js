import './style.css'
//导入Vue框架
import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
//导入app.vue组件
import App from './app.vue';

import VueBus from './vue-bus';

Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(VueBus);

const Routers = [{
        path: '/index',
        meta:{
            title: '首页'
        },
        component: (resolve) => require(['./views/index.vue'], resolve)
    },
    {
        path: '/about',
        meta:{
            title: '关于'
        },
        component: (resolve) => require(['./views/about.vue'], resolve)
    },
    {
        path: '/user/:id',
        meta:{
            title: '个人主页'
        },
        component: (resolve) => require(['./views/user.vue'], resolve)
    },
    {
        path: '*',
        redirect: '/index'
    }
];

const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);
router.beforeEach((to,from,next)=>{
    window.document.title = to.meta.title;
    //判断是否登录
    // if(window.localStorage.getItem('token')){
    //     next();
    // }else{
    //     next('/login');
    // }
    next();
});
router.afterEach((to,from,next)=>{
    window.scrollTo(0,0);
});

const store = new Vuex.Store({
    state:{
        count: 0
    },
    mutations:{
        increment(state,params){
            state.count+=params.count;
        },
        decrease(state){
            state.count --;
        }
    }
});

//创建Vue根实例
new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App) //ES6语法
})