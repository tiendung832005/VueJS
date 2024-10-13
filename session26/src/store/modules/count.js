const countModule = {
    state:{
        count: 10,

    },
    // Nơi xử lý hàm đồng bộ
    mutations:{
        increment(state){
            state.count++;
        },

        decrement(state){
            state.count--;
        }
    },

    actions:{
        
    },

    getters:{
        doubleCount: (state)=>{
            return state * 2;
        }
    }
}

export default countModule;