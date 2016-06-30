/**
 * Created by 刘娟娟 on 2016/6/28.
 */
export function configRouter(router){
    router.map({
        /*'*':{
            component:require('../views/login.vue')
        },*/
        '/login':{
            component:require('../views/login.vue')
        },
        '/list':{
            component:require('../views/List.vue')
        },
        '/auth/:userId':{
            name:'auth',
            component:require('../views/Auth.vue')
        }
    })
}