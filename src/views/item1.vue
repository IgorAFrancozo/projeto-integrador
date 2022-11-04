<script>
export default {
	name: 'itens-1',

}

</script>

<template>
	<div class="card m-4">
		<h5 class="card-header">Air Jordan</h5>
		<h5 class="card-title m-2">Preto - Branco</h5>
		<div class="d-flex m-2">
			<s class="card-text">R$ 899,00</s>
			<p class="card-text">R$ 759,00</p>
		</div>
		<div class="card-body p-4">
			<img src="../assets/tenis1.png" class="img-fluid d-block w-100 rounded-2" alt="..." />
			<a class="btn btn-primary">Adicionar ao Carrinho</a>
		</div>
	</div>

	<!-- <div class="card m-4">
		<h5 class="card-header">Modelos disponíveis</h5>
		<div class="card-body">
			<p class="card-text"><small class="text-muted">Clique no modelo disponível</small></p>
		</div>
		<div class="d-flex">
			<img src="../assets/tenis2.jpg" class="img-fluid card-img-bottom w-100 rounded-2" alt="...">
			<img src="../assets/tenis3.jpg" class="img-fluid card-img-bottom w-100 rounded-2" alt="..." />
		</div>
	</div> -->
	<div class="card m-4">
		<h5 class="card-header">Modelos disponíveis</h5>
		<div class="card-body d-flex">
			<img src="../assets/tenis2.png" class="img-fluid d-block w-100 rounded-2" alt="..." />
			<img src="../assets/tenis3.png" class="img-fluid d-block w-100 rounded-2" alt="..." />
		</div>
		<div class="d-block">
			<a class="p-3">Branco - Vermelho</a>
			<a class="p-3">Amarelo - Roxo</a>
		</div>
	</div>

</template>
<style>
.bosta {
	display: flex;
}
</style>