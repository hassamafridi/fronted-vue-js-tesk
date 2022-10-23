import { createStore } from 'vuex'
import Cars from './modules/carList'
import authModel from './modules/auth.model'
export default createStore({
  modules: {
    Cars,
    authModel
  }
})
