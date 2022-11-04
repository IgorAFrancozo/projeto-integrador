<script setup>
import cabecalho from './components/cabecalho.vue';
import conteudo from './components/conteudo.vue';
import rodape from './components/rodape.vue';
import { RouterView } from 'vue-router';

</script>

<template>
	<div class="dashboard text-center">
		<cabecalho></cabecalho>
		<main>
			<RouterView />
		</main>
		<rodape></rodape>
	</div>

</template>

<style>
.dashboard {
	text-align: center;
}

.cabecalho {
	color: black;
	border-radius: 20px;
	margin: 7px;
}

.conteudo {
	color: black;
	border-radius: 20px;
	margin: 7px;
}

.rodape {
	color: black;
	border-radius: 20px;
	margin: 7px;
}
</style>
