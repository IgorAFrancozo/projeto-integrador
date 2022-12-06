<script setup>
import ListItem from './ListItem.vue'
import Form from './Form.vue'
import AverageRating from './AverageRating.vue'
import { useShoppingStore } from '../stores'
import { reactive } from '@vue/runtime-core';

//get store
const store = useShoppingStore();

//set data
const data = reactive({
	reviewToEdit: null
});

</script>

<template>
	<div class="card">
		<h3>
			<i className="bi bi-star-half fs-2 text-danger"></i> Avalie Nosso Sistema
		</h3>
		<div class="card-body">
			<Form />
			<AverageRating />
			<ul class='mt-4 list-group'>
				<ListItem v-for="review in store.getReviews" :key="review.id" :review="review" />
			</ul>
		</div>
	</div>
</template>
  

  
<style>

</style>