
// import notfoundpage from '@/pages/notfoundpage.vue'
import home from '../pages/home.vue'
import tasks from '../pages/tasks.vue'


const routes = [
      
      {
        path: '/',
        name: 'home',
        component: home
      },
      {
        path: '/tasks',
        component: tasks
      }
      // {
      //   path: "/:notFound(.*)",
      //   name: "error.404",
      //   component: notfoundpage,
      // },
]

export default routes