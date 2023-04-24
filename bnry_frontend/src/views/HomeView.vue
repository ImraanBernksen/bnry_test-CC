<template>
  <NavBar/>
    <LandingPage/>
    <AboutPage/>
    <SignupPage/>
    <newsArticle/>
  <Footer/>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import Footer from '@/components/Footer.vue';
import newsArticle from '@/components/newsArticle.vue';
import LandingPage from '@/components/LandingPage.vue';
import AboutPage from '@/components/AboutPage.vue';
import SignupPage from '@/components/SignupPage.vue';

export default {
  name: 'HomeView',
  components: {
    NavBar,
    Footer,
    LandingPage,
    AboutPage,
    newsArticle,
    SignupPage
  }
}
</script>
