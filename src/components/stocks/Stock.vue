<template>
    <div class="col-md-6 my-col">
        <div class="card">
            <h5 class="card-title">{{ stock.name }} <small>(Price: {{ stock.price }})</small></h5>
            <div class="card-body">
                <input :class="{ danger: insufficientFunds}" type="number" class="form-control"  name="Quantity" placeholder="Quantity" v-model="quantity">
                <button
                    class="btn btn-primary"
                    @click="buyStock()"
                    :disabled="quantity <= 0 || insufficientFunds"
                    > {{ insufficientFunds ? 'insufficientFunds' : 'Buy'}}
                </button>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        computed: {
            insufficientFunds() {
                return this.$store.getters.funds < this.stock.price * this.quantity
            }
        },
        methods: {
            buyStock() {
                const order = {
                    id: this.stock.id,
                    name: this.stock.name,
                    price: this.stock.price,
                    quantity: this.quantity 
                }
                this.$store.dispatch('buyStock', order)
                this.quantity = 0;
            },
        },
    }
</script>

<style scoped>
    .danger {
        border: 2px solid red;
    }
    .card-title {
        background-color:#cfedb4;
        padding: 10px;
        color: #556e40
    }
    .btn {
        background-color:#cfedb4;
        border-color: #cfedb4;
        padding: 5px 15px 5px 15px;
        color: #556e40;
        float: right
    }
    small {
        font-size: 12px
    }
    .form-control {
        float: left;
        width: 220px;
    }
</style>