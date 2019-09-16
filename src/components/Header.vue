<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <router-link :to="{ name: 'Home' }" class="navbar-brand">Stock Trader</router-link>

            <div class="collapse navbar-collapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <router-link 
                            :to="{ name: 'Portofolio' }" 
                            class="nav-link">
                            Portofolio
                        </router-link>
                    </li>
                    <li class="nav-item">
                        <router-link 
                            :to="{ name: 'Stocks' }" 
                            class="nav-link">
                            Stocks
                        </router-link>
                    </li>
                </ul>
                
                <ul class="navbar-nav navbar-right">
                    <li class="nav-item">
                        <a href="#" class="nav-link" @click="randStocks">End Day</a>
                    </li>
                    <li class="nav-item dropdown open">
                        <a class="nav-link dropdown-toggle " 
                            href="#" id="navbarDropdown" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false">
                            Save & Load
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="#" @click="saveData">Save Data</a>
                            <a class="dropdown-item" href="#" @click="loadData">Load Data</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">Funds: {{ funds | currency }}</a>
                    </li>
                    
                </ul>
            </div>
        </nav>   
    </div>

</template>


<script>
import { mapGetters, mapActions } from 'vuex'

    export default {
        computed: {
            ...mapGetters([
                'funds',
                'stockPortofolio',
                'stocks'
            ])
        },
        methods: {
            ...mapActions([
                'randStocks'
            ]),
            saveData() {
                const data = {
                    funds: this.funds,
                    stockPortofolio: this.stockPortofolio,
                    stocks: this.stocks
                }
                console.log(data)
                this.$http.put('data.json', data)
            },
            loadData() {
                this.$http.get('data.json')
                    .then(response =>  response.json())
                    .then(data => {
                        if (data)
                            this.$store.dispatch('loadData', data);
                    })
                // console.log(serverData);
            }
        },
    }
</script>

<style scoped>
    button {
        border-style: none
    }

</style>