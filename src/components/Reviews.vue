<script setup>
import ListItem from './ListItem.vue'
import Form from './Form.vue'
import AverageRating from './AverageRating.vue'
import { useShoppingStore } from '../stores'
import { reactive } from '@vue/runtime-core';
import PaginaReview from './PaginaReview.vue';

//get store
const store = useShoppingStore();

//set data
const data = reactive({
    reviewToEdit: null
});

</script>

<template>
        <div class="card">
            <PaginaReview></PaginaReview>
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