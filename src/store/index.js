import { createStore } from "vuex"
import jornalModule from "../modules/daybook/store/journal"
const store = createStore({
    modules:{
        journal:jornalModule
    }
})

export default store
