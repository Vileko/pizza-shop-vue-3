import { createStore } from 'vuex'
import jsonMenu from '../json.json'
import jsonDrinks from '../drinks.json'

export default createStore({
  state: {
    posts: [],
    basket: [],
    postForm: [],
    drinks: [],
    activeForm: false,
    successfullyCompletedForm: false,
  },
  getters: {
    PRODUCTS(state){
      state.posts = jsonMenu.results.menu
      return state.posts
    },
    PRODUCT_DRINKS(state){
      state.drinks = jsonDrinks.results.drinks
      return state.drinks
    },
    POSTS_BASKET: (state) => state.basket,
    FORM_POST: (state) => state.postForm,
    ACTIVE_FORM: (state) => state.activeForm,
    FULL_READY_FORM: (state) => state.successfullyCompletedForm
  },
  mutations: {
    fullReadyForm(state){
      state.successfullyCompletedForm = true
      console.log(state.successfullyCompletedForm)
    },
    closeReadyForms(state){
      state.successfullyCompletedForm = false
      state.drinks.filter(ar => ar.active = false)
      state.posts.filter(ar => ar.active = false)
      state.basket = Array()
    },
    actionsForm(state){
      state.activeForm = true
      
    },
    closeForm(state){
      state.activeForm = false
    },
    deletePost(state, id) {
      state.basket = state.basket.filter(p => p.id !== id) 
      state.posts = state.posts.filter(ar => ar.id === id ? ar.active = false : ' ')
      state.drinks = state.drinks.filter(ar => ar.id === id ? ar.active = false : ' ')
    },
    increasePrice(state, post){
      state.basket.filter(ar => ar.id === post.id ? ar.pricePosts += ar.price : ' ')
      state.basket.filter(ar => ar.id === post.id ? ar.number ++ : ' ')
    },
    decreasePrice(state, post){
      if(post.number > 0) {
        state.basket.filter(ar => ar.id === post.id ? ar.number-- : ' ')
        state.basket = state.basket.filter(ar => ar.id === post.id ? ar.pricePosts -= ar.price : ' ')
        state.posts = state.posts.filter(ar => ar.id === post.id ? ar.active = false : ' ')
        state.drinks = state.drinks.filter(ar => ar.id === post.id ? ar.active = false : ' ')
      }
    },
  },
  actions: {

  },
  modules: {
    
  }
})
