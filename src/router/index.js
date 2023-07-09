import { createRouter, createWebHistory } from 'vue-router';
import PaginaUno from '../views/PaginaUno.vue';
import PaginaDos from '../views/PaginaDos.vue';
import PaginaTres from '../views/PaginaTres.vue';
import IniciarAdmin from '../views/IniciarAdmin.vue';

const routes = [
  {
    path: '/',
    name: 'Pagina',
    component: PaginaUno
  },
  {
    path: '/pagina1',
    name: 'Pagina1',
    component: PaginaUno
  },
  {
    path: '/pagina2',
    name: 'Pagina2',
    component: PaginaDos
  },
  {
    path: '/pagina2/pagina3',
    name: 'Pagina3',
    component: PaginaTres
  },
  {
    path: '/iniciaradmin', // Ruta para la página "Iniciar Admin"
    name: 'IniciarAdmin', // Nombre de la ruta
    component: IniciarAdmin, // Componente de la página "Iniciar Admin"
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
