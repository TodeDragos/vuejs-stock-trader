<template>
    <div class="row my-row">
        <app-stock v-for="(stock, index) in stocks" :key="index" :stock="stock"></app-stock>
    </div>
</template>

<script>
    import Stock from './Stock'
    import { mapGetters } from 'vuex'

    export default {
        components: {
            'app-stock': Stock
        },
        computed: {
            ...mapGetters([
                'stocks'
            ])
        },
    }
</script>

<style scoped>

</style>