<template>
    <div>
		<div>
            <br>
			<h3>Trade or View your Portofolio</h3>
            <br>
            <div class="row">
                
            </div>
            <p>You may Save & Load your Data</p>
            <p>Click on 'End Day' to begin a new Day!</p>

            <hr>

            <h5>Your Funds: {{ funds | currency }}</h5>
		</div>
    </div> 
</template>

<script>
import { mapGetters } from 'vuex'
    export default {

        computed: {
            ...mapGetters([
                'funds'
            ])
        },
    }
</script>

<style scoped>
    /* .special {
        border-style: solid;
        border-color: grey;
        padding: 15px
    } */
</style>