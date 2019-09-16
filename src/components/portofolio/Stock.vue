<template>
    <div class="col-md-6 my-col">
        <div class="card">
            <h5 class="card-title">{{ stock.name }} <small>(Price: {{ stock.price }} | Quantity: {{ stock.quantity }})</small></h5>
            <div class="card-body">
                <input :class="{danger: insuffiecientQuantity}" type="number" class="form-control"  name="Quantity" placeholder="Quantity" v-model="quantity">
                <button 
                    class="btn btn-primary"
                    @click="sellStock"
                    :disabled="quantity <= 0 || insuffiecientQuantity "
                    > {{ insuffiecientQuantity ? 'Not enough stocks' : 'Sell' }}
                </button>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        props: ['stock'],
        data() {
            return {
                quantity: 0
            }
        },
        methods: {
            sellStock() {
                const order = {
                    id: this.stock.id,
                    name: this.stock.name,
                    price: this.stock.price,
                    quantity: this.quantity
                }
                this.$store.dispatch('sellStock', order);
                this.quantity = 0;
            }
        },
        computed: {
            insuffiecientQuantity(){
                return this.stock.quantity < this.quantity;
            }
        },
    }
</script>

<style scoped>
    .danger {
        border: 2px solid red;
    }
    .card-title {
        background-color:#c5e4fa;
        padding: 10px;
        color: #556e40
    }
    .btn {
        background-color: #ff9694;
        border-color: #cfedb4;
        padding: 5px 15px 5px 15px;
        color: #ffffff;
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