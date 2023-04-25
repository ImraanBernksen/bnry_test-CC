import { createStore } from 'vuex'
import axios from 'axios';
const newsAPI = "https://bnry-backend-2r47.onrender.com"
export default createStore({
  state: {
    articles: null,
    message: null
  },
  getters: {
  },
  mutations: {
    setArticles(state, values) {
      state.articles = values
    },
    setMessage(state, message) {
      state.message = message
    }
  },
  actions: {
    async fetchArticles(context) {
      const res = await axios.get(`${newsAPI}`);
      let { articles } = await res.data;
      if (articles) {
        context.commit('setArticles', articles)
      }else {
        context.commit('setMessage', err)
      }
    },
  },
  modules: {
  }
})
