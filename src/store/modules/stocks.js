import stocks from '../../data/stocks'

const state = {
    stocks: [],
}

const getters = {
    stocks(state) {
        return state.stocks;
    }
}
const mutations = {
    setStocks(state, stocks) {
        state.stocks = stocks;
    },
    randStocks(state) {
        console.log('functia randStocks')
        for( let i = 0; i < state.stocks.length; i++)
            state.stocks[i].price = Math.round(state.stocks[i].price * (1 + Math.random() - 0.5))
    }
}

const actions = {
    initStocks({ commit }) {
        commit('setStocks', stocks);
    },
    randStocks({ commit }) {
        console.log('functia randStocks')
        commit('randStocks')
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}