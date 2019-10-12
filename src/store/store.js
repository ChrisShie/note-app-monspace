import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    articles: []
  },
  getters: {
    getArticles: state => state.articles
  },
  mutations: {
    addArticle (state, data) {
      state.articles.unshift(data)
    },
    deleteArticle (state, index) {
      state.articles.splice(index, 1)
    }
  },
  actions: {
    addArticle ({commit}, data) {
      return new Promise((resolve) => {
        commit('addArticle', data)
        resolve()
      })
    },
    deleteArticle ({commit}, index) {
      return new Promise((resolve) => {
        commit('deleteArticle', index)
        resolve()
      })
    }
  }
})
