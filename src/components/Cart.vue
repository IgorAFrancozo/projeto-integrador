<script setup>
import { RouterLink } from "vue-router";
import { useShoppingStore } from "../stores"
//get store
const data = useShoppingStore();
</script>

<template>
	<div class="row my-3">
		<div class="col-md-12">
			<div class="card">
				<div class="table-responsive">
					<table class="table">
						<thead>
							<tr>
								<th></th>
								<th>Produto</th>
								<th>Quantidade</th>
								<th>Preço</th>
								<th></th>
							</tr>
						</thead>
						<tbody class="">
							<tr v-for="item in data.getCartItems" :key="item.id">
								<td>
									<img :src="item.image" class="fluid rounded" width="70" height="70"
										:alt="item.name" />
								</td>
								<td>
									{{ item.name }}
								</td>
								<td>
									<i @click="data.incrementQ(item)" class="bi bi-caret-up"></i>
									<span class="mx-2">
										{{ item.quantity }}
									</span>
									<i @click="data.decrementQ(item)" class="bi bi-caret-down"></i>
								</td>
								<td>
									R${{ item.price }}
								</td>
								<td>
									<i @click="data.removeFromCart(item)" class="bi bi-cart-x text-danger"></i>
								</td>
							</tr>
							<tr>
								<th colSpan="3" class="text-center">
									Total
								</th>
								<td colSpan="3" class="text-center">
									<span class="badge bg-danger rounded-pill">
										R${{ data.cartItems.reduce((acc, item) => acc += item.price * item.quantity, 0)
										}}
									</span>
								</td>
							</tr>
						</tbody>
					</table>
					<RouterLink to="/finalizado">
						<div class="botaoFim">
							<button class="btn btn-success">Finalizar Compra</button>
						</div>
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
i {
	cursor: pointer;
}

.botaoFim {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	margin-bottom: 7px;
}
</style>