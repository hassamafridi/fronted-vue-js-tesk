import { createRouter, createWebHistory } from 'vue-router'
import store from '../store';

const routes = [
  {
    path: '/',
    name: 'dashboard',
    component: ()=>import(/* webpackChunkName: "login" */ '../views/Dashboard.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/account/Login.vue'),
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "register" */ '../views/account/Register.vue'),
    meta: {
      requiresVisitor: true,
    },
  },
  {
    path: "/car-list/",
    name:"carlist",
    component: () => import(/* webpackChunkName: "RoomEnterHome" */ "../views/car List/CarContainer.vue"),
    children: [
      {
        path: "",
        name: "car-list",
        component: () => import(/* webpackChunkName: "RoomEnterHome" */ "../views/car List/CarHome.vue"),
        meta: {
          requiresAuth: true
        }
      },
    ]
  },
  {
    path:"/add-car/",
    name:"addcar",
    component:()=> import(/* webpackChunkName: "RoomEnterHome" */ "../views/car List/CarCreateModel.vue"),
    meta: {
      requiresAuth: true,
      layout: "default",
    }
  },
    {
      path:"/update-car/:id",
      name:"updatecar",
      component:()=> import(/* webpackChunkName: "RoomEnterHome" */ "../views/car List/updateCar.vue"),
      meta: {
        requiresAuth: true
      }
    }
  
]
  

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    var access = store.getters.isLoggedIn;
    if (!access) {
      next({
        path: '/login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {

    if (access) {
      next({
        path: '/',
      })
    } else {
      next()
    }
  }
})