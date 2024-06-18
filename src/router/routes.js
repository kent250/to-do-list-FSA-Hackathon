
// import notfoundpage from '@/pages/notfoundpage.vue'
import home from '../pages/home.vue'
import editTask from '../pages/editTask.vue'



const routes = [
      
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/edit/:taskId',
        name: 'editTask',
        component: editTask
      },
      // {
      //   path: "/:notFound(.*)",
      //   name: "error.404",
      //   component: notfoundpage,
      // }
]

export default routes