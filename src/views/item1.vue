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
			<img src="../assets/tenis1.png" class="img-fluid d-block w-100 rounded-2 mt-2" alt="..." />
			<div class="form-check form-check-inline mb-3">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1">
				<label class="form-check-label" for="flexRadioDefault1">
					39
				</label>
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
				<label class="form-check-label" for="flexRadioDefault2">
					40
				</label>
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked>
				<label class="form-check-label" for="flexRadioDefault2">
					41
				</label>
			</div>
			<div class="form-check form-check-inline">
				<input class="form-check-input" type="radio" id="inlineCheckbox3" value="option3" disabled>
				<label class="form-check-label" for="inlineCheckbox3">42</label>
			</div>
			<a class="btn btn-primary">Adicionar ao Carrinho</a>
		</div>
	</div>
	<div class="card m-4">
		<h5 class="card-header">Modelos disponíveis</h5>
		<div class="conteiner">
			<span class="circulo vermelho-branco"></span>
			<span class="circulo amarelo-roxo"></span>
		</div>
		<div class="card-body d-flex container">
			<button type="button" class="botao_cor"> <img src="../assets/tenis2.png" height ="100" width="100" /></button>
			<button type="button" class="botao_cor"> <img src="../assets/tenis3.png" height ="100" width="100" /></button>
		</div>
	</div>

</template>
<style>
.bosta {
	display: flex;
}

.container{
	gap:8px;
	justify-content: center;
}

.botao_cor{
	border: none;
	padding: 0;
}
</style>