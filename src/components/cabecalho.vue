<script>
import { RouterLink } from 'vue-router';
</script>
<template>
	<div class="cabecalho">
		<nav class="navbar navbar-dark bg-primary p-4 rounded-3">
			<div class="container-fluid">
				<button class="navbar-toggler" type="button" data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
					aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<a class="navbar-brand" href="#">GS-Code</a>
				<button class="navbar-toggler" type="button" href="#">
					<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
						class="bi bi-cart3" viewBox="0 0 16 16">
						<path
							d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
					</svg>
				</button>
				<div class="collapse navbar-collapse pt-4" id="navbarSupportedContent">
					<ul class="navbar-nav">
						<li class="nav-item mt-4">
							<RouterLink to="/" class="btn btn-primary w-100" aria-current="page">Catálogo
							</RouterLink>
						</li>
						<li class="nav-item">
							<a class="btn btn-primary w-100" data-bs-toggle="offcanvas" href="#offcanvasExample"
								role="button" aria-controls="offcanvasExample">
								Avaliação
							</a>
						</li>
						<div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample"
							aria-labelledby="offcanvasExampleLabel">
							<div class="offcanvas-header">
								<h5 class="offcanvas-title" id="offcanvasExampleLabel">Avalie nosso Sistema !</h5>
								<button type="button" class="btn-close" data-bs-dismiss="offcanvas"
									aria-label="Close"></button>
							</div>
							<div class="offcanvas-body">
								<div>
									Deixe sua avaliação para que possamos melhorar sua experiência como usuário !
								</div>
								<div class="dropdown mt-3">
									<button class="btn btn-secondary dropdown-toggle" type="button"
										data-bs-toggle="dropdown">
										Selecionar Avaliação
									</button>
									<ul class="dropdown-menu">
										<li><a class="dropdown-item" href="#">Ruim</a></li>
										<li><a class="dropdown-item" href="#">Bom</a></li>
										<li><a class="dropdown-item" href="#">Ótimo</a></li>
									</ul>
									<div class="mb-3">
										<label for="exampleFormControlTextarea1" class="form-label">Conte-nos como
											melhorar: </label>
										<textarea class="form-control" id="exampleFormControlTextarea1"
											rows="3"></textarea>
										<button class="btn btn-primary m-3">Avaliar</button>
									</div>
								</div>
							</div>
						</div>

						<li class="nav-item">
							<button class="btn btn-primary w-100" role="button" data-bs-toggle="offcanvas"
								data-bs-target="#offcanvasWithBothOptions"
								aria-controls="offcanvasWithBothOptions">Administrador</button>

							<div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1"
								id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
								<div class="offcanvas-header">
									<h5 class="offcanvas-title text-center" id="offcanvasWithBothOptionsLabel">Log-in
										Administrador</h5>
									<button type="button" class="btn-close" data-bs-dismiss="offcanvas"
										aria-label="Close"></button>
								</div>
								<div class="offcanvas-body">
									<form>
										<label for="exampleInputEmail1" class="form-label m-2 text-center">Login</label>
										<input type="email" class="form-control m-2" id="email1"
											placeholder="Digite seu e-mail empresarial" aria-describedby="emailHelp">
										<label for="exampleInputPassword1"
											class="form-label m-2 text-center">Senha</label>
										<input type="password" class="form-control m-2 text-center" id="senha1">
										<button type="submit" class="btn btn-primary m-2 text-center">Log-in</button>
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
.btn {
	opacity: 70%;
	color: white;
	background-color: black;
}
</style>
