import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', component: () => import('./views/Home.vue') },
  { path: '/profile', component: () => import('./views/Profile.vue') },
  { path: '/chart', component: () => import('./views/Chart.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
