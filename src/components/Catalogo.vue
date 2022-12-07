<script>
import { RouterLink } from 'vue-router';
</script>

<template>
    <form class="d-flex mt-3 p-4" role="search">

        <input class="form-control me-2" type="search" placeholder="Faça Sua Pesquisa" aria-label="Search">
        <RouterLink to="/conteudo">
            <button class="btn btn-outline-primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                    height="16" fill="currentColor" class="bi bi-search mb-1" viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg></button>
        </RouterLink>
    </form>
    <div class="conteudo">
        <div class="item1 col-md-3 mb-2">
            <h2 class="mt-4 text-center">Tênis Air Jordan</h2>
            <div id="tenis" class="carousel carousel-dark slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#tenis" data-bs-slide-to="0" class="active"
                        aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#tenis" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#tenis" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#tenis" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#tenis" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#tenis" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>
                <div class="carousel-inner">
                    <RouterLink to="/conteudo">
                        <div class="carousel-item active" data-bs-interval="2000">
                            <img src="https://cdn.awsli.com.br/1000x1000/2297/2297245/produto/153839941/9831880c30.jpg"
                                class="d-block w-100 p-5 rounded-2" alt="...">
                            <div class="carousel-caption  d-md-block">
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink to="/conteudo">
                        <div class="carousel-item" data-bs-interval="2000">
                            <img src="https://cdn.awsli.com.br/800x800/1721/1721424/produto/117839161/tenis-nike-air-jordan-branco-preto-vermelho-1da3f389.jpg"
                                class="d-block w-100 p-5 rounded-2" alt="...">
                            <div class="carousel-caption  d-md-block">
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink to="/conteudo">
                        <div class="carousel-item">
                            <img src="https://cdn.awsli.com.br/1000x1000/1755/1755854/produto/87657524/6e0f808666.jpg"
                                class="d-block w-100 p-5 rounded-2" alt="...">
                            <div class="carousel-caption  d-md-block">
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink to="/conteudo">
                        <div class="carousel-item">
                            <img src="https://cdn.awsli.com.br/1000x1000/1721/1721424/produto/117839163/tenis-nike-air-jordan-preto-branco-vermelho-d8502bb0.jpg"
                                class="d-block w-100 p-5 rounded-2" alt="...">
                            <div class="carousel-caption  d-md-block">
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink to="/conteudo">
                        <div class="carousel-item">
                            <img src="https://cdn.awsli.com.br/1000x1000/1755/1755854/produto/89950756/1fefa99798.jpg"
                                class="d-block w-100 p-5 rounded-2" alt="...">
                            <div class="carousel-caption  d-md-block">
                            </div>
                        </div>
                    </RouterLink>
                    <RouterLink to="/conteudo">
                        <div class="carousel-item">
                            <img src="https://cdn.awsli.com.br/1000x1000/1755/1755854/produto/87668795/1ad09aeba8.jpg"
                                class="d-block w-100 p-5 rounded-2" alt="...">
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
        <div class="item2 col-md-3 mb-2">
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
        <div class="item3 col-md-3 mb-2">
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
        <div class="item4 col-md-3 mb-2">
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

<style>
.conteudo {
}
</style>