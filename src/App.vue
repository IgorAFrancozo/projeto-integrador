<script setup>
import { ref, onMounted } from 'vue'
import cabecalho from './components/cabecalho.vue';
import conteudo from './components/conteudo.vue';
import rodape from './components/rodape.vue';


</script>

<template>
	<div class="dashboard">
		<cabecalho></cabecalho>
		<conteudo></conteudo>
		<rodape></rodape>
	</div>

</template>

<style scoped>

</style>
