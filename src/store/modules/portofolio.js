const state = {
    portofolioStocks: [],
    funds: 10000,
}

const getters = {
    stockPortofolio(state, getters) {
        return state.portofolioStocks.map(stock => {
            const record = getters.stocks.find(element => element.id == stock.id );
            return {
                id: stock.id,
                name: record.name,
                price: record.price,
                quantity: stock.quantity
            }
        })
    },
    funds(state) {
        return state.funds;
    }
}

const mutations = {
    buyStock(state, order) {
        if (state.funds >= order.price * order.quantity){
            const record = state.portofolioStocks.find(element => element.id == order.id);
            if (record)
                record.quantity += parseInt(order.quantity);
            else {
                state.portofolioStocks.push({
                    id: order.id,
                    quantity: parseInt(order.quantity)
                });
                state.funds -= order.price * order.quantity;
            }
        }
    },
    sellStock(state, order){
        console.log('functia sellStock')
        const record = state.portofolioStocks.find(element => element.id == order.id);
        if (order.quantity < record.quantity) {
            record.quantity -= order.quantity;
            state.funds += order.quantity * order.price
        }
        else {
            state.portofolioStocks.splice(state.portofolioStocks.indexOf(record), 1);
            state.funds += record.quantity * order.price
        }
    },
    loadData(state, data){
        state.funds = data.funds;
        // console.log( data.stockPortofolio);
        // console.log ( state.portofolioStocks)
        state.portofolioStocks = data.stockPortofolio ? data.stockPortofolio : [];
        
        //state.stocks = data.stocks
    }
}

const actions = {
    buyStock({ commit }, order) {
        commit('buyStock', order);
    },
    sellStock({ commit }, order) {
        commit('sellStock', order);
    },
    loadData({ commit }, data) {
        commit('loadData', data);
        commit('setStocks', data.stocks)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}