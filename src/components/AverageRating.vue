<script setup>
    import {useShoppingStore} from '../stores'

    //get Reviews
    const store = useShoppingStore();
</script>

<template>
    <div className='container my-4'>
        <div className="d-flex justify-content-between align-items-center">
            <h5>Avaliações: 
                <span className="badge bg-dark rounded-pill">
                    {{store.reviewsLength}}
                </span>
            </h5>
            <h5>Média: 
                <span className="badge bg-warning text-dark rounded-pill">
                    {{ store.calculateReviewsAverage }}
                </span>
            </h5>
        </div>
    </div>
</template>

<style>
</style>