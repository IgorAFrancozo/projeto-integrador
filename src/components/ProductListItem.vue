<script setup>
import { RouterLink } from 'vue-router';
import { useShoppingStore } from '../stores'
//get props
const props = defineProps({
    product: {
        type: Object,
        required: true
    }
});
//get store
const data = useShoppingStore();
</script>

<template>
    <div class="col-md-4 mb-2">
        <div class="card" style="width: '18rem'">
            <h5 class="card-title text-center">{{ product.name }}</h5>
            <img :src="product.image" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="text-center p-2">R$ - {{ product.price }}</h5>
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
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" id="inlineCheckbox3" value="option3" disabled>
                    <label class="form-check-label" for="inlineCheckbox3">43</label>
                </div>
                <button @click="data.addToCart(product)" class="btn btn-primary">
                    <i class="bi bi-cart-check"></i> Adicionar no carrinho
                </button>

            </div>
        </div>
    </div>
</template>

<style>

</style>