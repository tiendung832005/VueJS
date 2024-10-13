import { createStore } from "vuex"
import countModule from "./modules/count";
import todoListModule from "./modules/todoList";

const store = createStore({
    modules:{
        countModule,
        todoListModule,
    }
})

export default store;