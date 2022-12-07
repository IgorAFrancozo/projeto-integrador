<script setup>
import { RouterLink } from "vue-router";
import { useShoppingStore } from '../stores'
//get store
const data = useShoppingStore();
</script>

<template>
	<div class="cabecalho">
		<nav class="navbar navbar-dark bg-primary p-3 rounded-3 css2">

			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<a class="navbar-brand ms-1 tituloCss" href="#">SG - Code</a>
				<RouterLink to="/cart">
					<button class="navbar-toggler" type="button" href="#">
						<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
							class="bi bi-cart3" viewBox="0 0 16 16">
							<path
								d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
						</svg>
						<i class="text-red">({{ data.countCartItems }})</i>
					</button>

				</RouterLink>
				<div class="collapse navbar-collapse pt-4" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item mt-4">
							<RouterLink to="/" class="btn btn-primary w-100" aria-current="page">Catálogo
							</RouterLink>
						</li>

						<li class="nav-item">
							<RouterLink to="/reviews" class="btn btn-primary w-100">Avaliar Sistema
							</RouterLink>
						</li>

						<li class="nav-item">
							<button class="btn btn-primary w-100" role="button" data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">
								Administrador
							</button>

							<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
								id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
								<div class="offcanvas-header">
									<h5 class="offcanvas-title text-center" id="offcanvasWithBothOptionsLabel">
										Log-in Administrador
									</h5>
									<button type="button" class="btn-close" data-bs-dismiss="offcanvas"
										aria-label="Close"></button>
								</div>
								<div class="offcanvas-body">
									<form>
										<div class="form-group">
											<label for="inputEmail" class="control-label">Email</label>
											<input id="inputEmail" class="form-control" placeholder="Digite seu E-mail"
												type="email" data-error="Por favor, informe um e-mail correto."
												required />
											<div class="help-block with-errors"></div>
										</div>

										<div class="form-group">
											<label for="inputPassword" class="control-label">Senha</label>
											<input type="password" class="form-control" id="inputPassword"
												placeholder="Digite sua Senha..." minlength="6" required />
										</div>

										<button type="submit" class="btn btn-primary m-4 text-center">
											Log-in
										</button>
									</form>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	</div>
</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&family=Russo+One&display=swap');

.tituloCss {
	font-family: 'Russo One', sans-serif;
}

.btn {
	opacity: 70%;
	color: white;
	background-color: black;
}

.color-gray {
	color: gray;
}

.azulCabecalho {
	align-items: center;
}

#cabecalho {
	padding-top: 3px;
}
.css2{
	padding-bottom: 2px;
	padding-top: 2px;
}
</style>
