import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutations-types'

export default {
  //  mutations中的每个方法尽可能完成的事件比较单一
  [ADD_COUNTER](state, payload) {
    payload.count++
  },
  [ADD_TO_CART](state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  }
}
