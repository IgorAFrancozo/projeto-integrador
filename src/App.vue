<script setup>
import cabecalho from './components/Cabecalho.vue';
import rodape from './components/Rodape.vue';
import Reviews from './components/Reviews.vue';
import { RouterView } from 'vue-router';

</script>

<template>
	<div class="container">
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
