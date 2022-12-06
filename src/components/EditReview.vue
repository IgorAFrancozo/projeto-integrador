<script setup>
import { reactive, onMounted } from '@vue/runtime-core';
import Form from './Form.vue'
import { useRoute } from 'vue-router';
import { useShoppingStore } from '../stores';

//set data
const data = reactive({
    reviewId: '',
    updating: true
});

//get rota 
const route = useRoute();

//get review para editar on mounted
onMounted(() => {
    data.reviewId = route.params.id;
});
</script>

<template>
    <Form :updating="data.updating" :reviewId="route.params.id" />
</template>

<style>

</style>