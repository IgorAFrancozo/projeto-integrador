import { createRouter, createWebHistory } from 'vue-router'

import Item1 from '../views/item1.vue'
import Conteudo from '../components/conteudo.vue'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'home',
			component: Conteudo
		},
		{
			path: '/itens/1',
			name: 'itens-1',
			component: Item1
		}
	]
})

export default router
