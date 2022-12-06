import { createRouter, createWebHistory } from 'vue-router'

import Cart from '../components/Cart.vue'
import Home from '../components/Home.vue'
import Catalogo from '../components/Catalogo.vue'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'catalogo',
			component: Catalogo
		},
		{
			path: '/conteudo',
			name: 'conteudo',
			component: Home
		},
		{
            path: '/cart',
            name: 'cart',
            component: Cart
        }
	]
})

export default router
