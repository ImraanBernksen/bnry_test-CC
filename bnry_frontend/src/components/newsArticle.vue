<template>
<div id="newsArticle">
    <h2 style="color: aqua;">All articles about Tesla from the last month, sorted by recent first</h2>
    <div class="container" style="padding-bottom: 20px;">
        <form @submit.prevent class="d-flex" role="search" style="justify-content: center; padding: 30px;">
            <input class="form-control me-2" type="search" v-model="searchByName" placeholder="Search" aria-label="Search" style="width: 40%;">
        </form>
    <div class="card mb-4 p-3" v-for="article in search" :key="article.id" style="width: 100%; background-color: aqua; color: #2D277D;">
        <div class="row g-0">
          <div class="col-md-4">
            <img :src="article.urlToImage" class="img-fluid rounded-start mt-2" style="width: 30rem;">
          </div>
          <div class="col-md-8">
            <div class="card-body text-start">
                <h3 class="card-title">{{ article.author }}</h3>
                <h4 class="card-title">{{ article.title }}</h4>
                <p class="card-text">{{ article.description }}</p>
                <p class="card-text">{{ article.content }}</p>
                <p class="card-title">{{ article.publishedAt }}</p>
                <p class="card-text"><a :href="article.url">{{ article.url }}</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
</template>
<script>
import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core'
export default {
      setup() {
      const store = useStore()
      store.dispatch("fetchArticles")
      const articles = computed(() => store.state.articles)
      return {
          articles
      }
      },
      data(){
      return {
        searchByName: '',
        articles: []
      }
      },
      computed: {
      search() {
        return this.articles.filter((articles) => {
        return articles.title.toLowerCase().match(this.searchByName.toLowerCase())
      });
      }
    }
  };
</script>
<style scoped>
.newsArticle {
    list-style: none;
    display: flex;
    justify-content: center;
    gap: 2rem;
  }
img {
    border-radius: 10px;
}
.card { 
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px white;
}
.card:hover {
    border-radius: 10px;
    box-shadow: 2px 2px 2px 1px #2D277D;
}
</style>