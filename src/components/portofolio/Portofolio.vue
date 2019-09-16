<template>
    <div class="row">
        <app-stock v-for="(stock, index) in stockPortofolio" :key="index" :stock="stock"></app-stock>
    </div>
</template>

<script>
import Stock from './Stock'
import { mapGetters } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'stockPortofolio'
            ])
        },
        components: {
            'app-stock': Stock,
        }
    }
</script>