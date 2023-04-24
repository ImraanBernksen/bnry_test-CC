import { createStore } from 'vuex'
import axios from 'axios';
const newsAPI = "https://newsapi.org/v2/everything?q=tesla&sortBy=publishedAt&apiKey=5f1441b653004bdb8851bb7444905c8b"
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
