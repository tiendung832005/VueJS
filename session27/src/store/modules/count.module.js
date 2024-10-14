const countModule = {
    state:{
        count: 0,   
    },
    mutations:{
        increment(state){
            return state.count++;
        },
        decrement(state){
            return state.count--;
        },
        reset(state){
            state.count = 0;
        } 
    }
}

export default countModule;