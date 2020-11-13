const defaultState = () => ({
    tempWarehouse: [],
});

export default {
    state: defaultState(),
    getters: {
        WAREHOUSE: state => state.tempWarehouse,
    },

    mutations: {
        SAVE_TEMP_WAREHOUSE_MUTATION(state, payload) {
            state.tempWarehouse = payload
        }
    },
}