//define routers to components

import Home from './components/Home'
// import User from './components/user/User' thay thế bởi bên dưới
import Profile from './components/user/Profile'
import UserIndex from './components/user/UserIndex'
import UserDetails from './components/user/UserDetails'
import UserEdit from './components/user/UserEdit'
import Header from './components/Header.vue'
import errorPage from './components/404/404'

const User = resolve =>{
    require.ensure(['./components/user/User'], ()=>{
        resolve(require('./components/user/User'))
    }, 'user')
}


export const routes = [
    { path: '/', name: 'home', components: {
        default: Home,
        'page-header': Header
    } },
    { path: '/user', name: 'user', component: User, children: [
        { path: '', name: 'index', component: UserIndex },
        { path: ':id', name: 'userdetails', component: UserDetails, beforeEnter: (to, from, next)=>{
            console.log('Action route guards')
            next()
        } },
        { path: ':id/edit', name: 'useredit', component: UserEdit }
    ]},
    { path: '/profile/:id', name: 'profile', component: Profile },
    { path: '/admin', redirect: { name: 'home' } },
    { path: '/404', name: 'errorPage', component: errorPage },

    { path: '*', redirect: '/404' }
]
