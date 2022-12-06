<script setup>
    import {useShoppingStore} from '../stores'

    //get Reviews
    const store = useShoppingStore();
</script>

<template>
    <div className='container my-4'>
        <div className="d-flex justify-content-between align-items-center">
            <h5>Reviews: 
                <span className="badge bg-dark rounded-pill">
                    {{store.reviewsLength}}
                </span>
            </h5>
            <h5>Average: 
                <span className="badge bg-warning text-dark rounded-pill">
                    {{ store.calculateReviewsAverage }}
                </span>
            </h5>
        </div>
    </div>
</template>

<style>
</style>