import { createRouter, createWebHistory } from 'vue-router'

import item1 from '../views/item1.vue'
import Conteudo from '../components/conteudo.vue'
import item12 from '../views/item12.vue'
import item13 from '../views/item13.vue'


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
			component: item1
		},
		{
			path: '/itens/1-2',
			name: 'itens-1-2',
			component: item12
		},
		{
			path: '/itens/1-3',
			name: 'itens-1-3',
			component: item13
		}
	]
})

export default router
