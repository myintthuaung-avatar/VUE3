import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '@/views/Dashboard.vue'
import LoginLayout from '@/components/layouts/LoginLayout.vue';
import Login from '@/components/Login.vue';
import AppLayout from '@/components/layouts/AppLayout.vue';
import DataTable from '@/views/DataTable.vue';
//import { isAuthenticated } from './route-check.js';
export default createRouter({
  history: createWebHistory(),
  base: process.env.BASE_URL,
  routes: [
   
    {
        path:"/",
        name: "Login",
        component:Login,
        meta: { id: 1, layout: LoginLayout}
    },
    {
      path:"/dashboard",
      name: "Dashboard",
      component:Dashboard,
      meta:{id:2, layout: AppLayout}
    },
    {
      path:"/datatable",
      name: "Datatable",
      component:DataTable,
      meta:{id:2, layout: AppLayout}
    },
   
  ],
})
// const router = new createRouter({
//     mode: 'history',
//     base: process.env.BASE_URL;
    
//  });
  
  // let isHomePageRouteRequired = function(router){
  //   var required = false;
  //   if(router.name === 'Login'){
  //     required = true;
  //   }
  //   return required;
  // };
  // createRouter.beforeEach((to, from, next) => {
  //   if (to.meta.requiresAuth) {
  //       if (isAuthenticated(to.meta.roles)) {
  //           if (isHomePageRouteRequired(to)) {
  //               next('/login');
  //           } else {
  //               next();
  //           }
  //       } else {
  //           next('/login');
  //       }
  //   } else {
  //       next();
  //   }
  // });