<template>
<div id="newsArticle">
    <h2 style="color: aqua;">All articles about Tesla from the last month, sorted by recent first</h2>
    <div class="container" style="padding-bottom: 20px;">
        <form class="d-flex" role="search" style="justify-content: center; padding: 30px;">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" style="width: 40%;">
            <button class="btn btn-outline-light" type="submit">Search</button>
        </form>
    <div class="card mb-3 p-3" v-for="article in articles" :key="article" style="width: 100%; background-color: aqua; color: #2D277D;">
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
    <!-- news -->
    <!-- <div class="container" style="padding-bottom: 40px;">
    <div class="row" style="gap: 2rem; justify-content: center;">
    <div class="card" v-for="article in articles" :key="article" style="width: 19rem; background-color: aqua;">
        <h3 class="card-title">{{ article.author }}</h3>
        <h4 class="card-title">{{ article.title }}</h4>
        <p class="card-text">{{ article.description }}</p>
        <a :href="article.url">More Information</a>
        <img :src="article.urlToImage" class="card-img-top mt-2">
        <h5 class="card-title">{{ article.publishedAt }}</h5>
        <p class="card-text">{{ article.content }}</p>
    </div>
    </div>
    </div> -->
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
}
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