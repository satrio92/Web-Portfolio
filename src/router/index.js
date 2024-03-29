import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Project from '../views/Project.vue'
import DetailProject from '../views/DetailProject.vue'
import Product from '../views/Product.vue'
import Contact from '../views/Contact.vue'
import Shortenlink from '../views/Shortenlink.vue'
import UrlRedirect from '../views/UrlRedirect.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/about',
        name: 'About',
        component: About
      },
      {
        path: '/project',
        name: 'Project',
        component: Project
      },
      {
        path: '/project/:id',
        name: 'DetailProject',
        component: DetailProject
      },
      {
        path: '/product',
        name: 'Product',
        component: Product
      },
      {
        path: '/contact',
        name: 'Contact',
        component: Contact
      },
      {
        path: '/shortenlink',
        name: 'Shortenlink',
        component: Shortenlink
      },
      {
        path: '/:shorturl',
        name: 'UrlRedirect',
        component: UrlRedirect
      }
    ]
  })
  
  export default router