<script>
import { RouterLink } from 'vue-router';
</script>

<template>
	<div class="conteudo">
		<form class="d-flex mt-3 p-4" role="search">
			<input class="form-control me-2" type="search" placeholder="Faça Sua Pesquisa em nosso catálogo" aria-label="Search">
			<button class="btn btn-outline-primary" type="submit">Search</button>
		</form>
		<div class="item1">
			<h2 class="mt-4 text-center">Tênis Air Jordan</h2>
			<div id="tenis" class="carousel carousel-dark slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#tenis" data-bs-slide-to="0" class="active"
						aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#tenis" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#tenis" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner ">
					<RouterLink to="/itens/1">
						<div class="carousel-item active" data-bs-interval="10000">
							<img src="../assets/tenis1.png" class="d-block w-100 p-5 rounded-2" alt="...">
							<div class="carousel-caption  d-md-block">
							</div>
						</div>
					</RouterLink>
					<RouterLink to="/itens/1-2">
						<div class="carousel-item" data-bs-interval="2000">
							<img src="../assets/tenis2.png" class="d-block w-100 p-5 rounded-2" alt="...">
							<div class="carousel-caption  d-md-block">
							</div>
						</div>
					</RouterLink>
					<RouterLink to="/itens/1-3">
						<div class="carousel-item">
							<img src="../assets/tenis3.png" class="d-block w-100 p-5 rounded-2" alt="...">
							<div class="carousel-caption  d-md-block">
							</div>
						</div>
					</RouterLink>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#tenis" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#tenis" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
		<div class="item2">
			<h2 class="mt-4 text-center">Camiseta New York - Knicks</h2>
			<div id="camiseta" class="carousel carousel-dark slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#camiseta" data-bs-slide-to="0" class="active"
						aria-current="true" aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#camiseta" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#camiseta" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner ">
					<div class="carousel-item active" data-bs-interval="10000">
						<img src="../assets/camisa1.png" class="d-block w-100 p-5 rounded-2" alt="...">
						<div class="carousel-caption  d-md-block">
						</div>
					</div>
					<div class="carousel-item" data-bs-interval="2000">
						<img src="../assets/camisa2.png" class="d-block w-100 p-5 rounded-2" alt="...">
						<div class="carousel-caption  d-md-block">
						</div>
					</div>
					<div class="carousel-item">
						<img src="../assets/camisa3.png" class="d-block w-100 p-5 rounded-2" alt="...">
						<div class="carousel-caption  d-md-block">
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#camiseta" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#camiseta" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
		<div class="item3">
			<h2 class="mt-4 text-center">Bola de Basquete - Nike</h2>
			<div id="bola" class="carousel carousel-dark slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#bola" data-bs-slide-to="0" class="active" aria-current="true"
						aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#bola" data-bs-slide-to="1" aria-label="Slide 2"></button>
					<button type="button" data-bs-target="#bola" data-bs-slide-to="2" aria-label="Slide 3"></button>
				</div>
				<div class="carousel-inner ">
					<div class="carousel-item active" data-bs-interval="10000">
						<img src="../assets/bola1.png" class="d-block w-100 p-5 rounded-2" alt="...">
						<div class="carousel-caption  d-md-block"></div>
					</div>
					<div class="carousel-item" data-bs-interval="2000">
						<img src="../assets/bola2.png" class="d-block w-100 p-5 rounded-2" alt="...">
						<div class="carousel-caption  d-md-block">
						</div>
					</div>
					<div class="carousel-item">
						<img src="../assets/bola3.png" class="d-block w-100 p-5 rounded-2" alt="...">
						<div class="carousel-caption  d-md-block">
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#bola" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#bola" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
		<div class="item4">
			<h2 class="mt-4 text-center">Whey Protein - ON Gold</h2>
			<div id="uei" class="carousel carousel-dark slide" data-bs-ride="carousel">
				<div class="carousel-indicators">
					<button type="button" data-bs-target="#uei" data-bs-slide-to="0" class="active" aria-current="true"
						aria-label="Slide 1"></button>
					<button type="button" data-bs-target="#uei" data-bs-slide-to="1" aria-label="Slide 2"></button>

				</div>
				<div class="carousel-inner ">
					<div class="carousel-item active" data-bs-interval="10000">
						<img src="../assets/whey1.png" class="d-block w-100 p-5 rounded-2" alt="...">
						<div class="carousel-caption  d-md-block"></div>
					</div>
					<div class="carousel-item" data-bs-interval="2000">
						<img src="../assets/whey2.png" class="d-block w-100 p-5 rounded-2" alt="...">
						<div class="carousel-caption  d-md-block">
						</div>
					</div>
				</div>
				<button class="carousel-control-prev" type="button" data-bs-target="#uei" data-bs-slide="prev">
					<span class="carousel-control-prev-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Previous</span>
				</button>
				<button class="carousel-control-next" type="button" data-bs-target="#uei" data-bs-slide="next">
					<span class="carousel-control-next-icon" aria-hidden="true"></span>
					<span class="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	</div>
</template>