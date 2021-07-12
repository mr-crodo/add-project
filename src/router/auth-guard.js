// Here we have written a check function in order not to show
// some buttons to an unregistered user

import store from '../store/index'

export default function (to, from, next) {
    if (store.getters.user) {
        next()
    } else {
        next('/login?loginError=true')
    }
}