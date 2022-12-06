import { createRouter, createWebHistory } from 'vue-router'

import Cart from '../components/Cart.vue'
import Home from '../components/Home.vue'
import Catalogo from '../components/Catalogo.vue'
import Reviews from '../components/Reviews.vue'
import EditReview from '../components/EditReview.vue'
import Finalizado from '../components/Finalizado.vue'


const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/finalizado',
			name: 'finalizado',
			component: Finalizado
		},
		{
			path: '/reviews',
			name: 'review',
			component: Reviews
		},
		{
            path: '/edit/:id',
            name: 'edit',
            component: EditReview
        },
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
