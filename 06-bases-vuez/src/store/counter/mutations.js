export const increment = (state) => {
    state.count++
    state.lastMutatuion = 'increment'
};
export const incrementBy = (state, val) => {
    state.count += val
    state.lastMutatuion = 'increment' + val;
    state.lastRandomInt = val
};
export const setLoading = (state, val) => {
    state.isLoading = val;
    state.lastMutatuion = 'setLoading' + val;
};