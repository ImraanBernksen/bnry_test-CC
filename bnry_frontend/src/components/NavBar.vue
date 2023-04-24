<template>
  <nav class="navbar sticky-top" style="background-color: aqua;">
    <div class="container-fluid">
      <a href="/" style="text-decoration: none;"><img style="height: 2rem;" class="img-fluid"
          src="https://i.postimg.cc/6Q9sNJJg/WRLD-removebg.png"> TCN</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent"
        aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    </div>
    <div class="collapse" id="navbarToggleExternalContent">
      <div class="collap">
        <div class="p-4" style="background-color: aqua; color: #2D277D">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/" style="color: #2D277D;">MAIN PAGE</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about" style="color: #2D277D;">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#newsArticle" style="color: #2D277D;">NEWS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#signup" style="color: #2D277D;">SUBSCRIBE</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
export default {

}
</script>
<style scoped>
nav {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>