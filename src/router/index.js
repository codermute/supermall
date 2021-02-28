import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Cart = () => import('../views/cart/Cart')
const Category = () => import('../views/category/Category')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')
const Thelogin = () => import('../views/thelogin/Thelogin')
const Registered = () => import('../views/registered/Registered')


Vue.use(VueRouter)

const routes = [
{
    path:'',
    redirect:'/home'
},
{
    path:'/home',
    component: Home
},
{
    path:'/category',
    component: Category
},
{
    path:'/cart',
    component: Cart
},
{
    path:'/profile',
    component: Profile
},
{
    path:'/detail/:iid',
    component: Detail
},
{
    path:'/thelogin',
    component: Thelogin
},
{
    path:'/registered',
    component: Registered
},
]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router

