<template>
<div id="landingPage" class="pt-4">
    <div class="img">
        <div class="logo">
        <h2 style="color: aqua;">Current Chronicle News</h2>
        <a href="/" style="text-decoration: none;"><i class="fa-solid fa-globe fa-10x" style="color: aqua;"></i></a>
    </div>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>

#landingPage {
    border-top: 2px solid #2D277D;
    color: #2D277D;
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
    display: inline-block;
    justify-content: center;
    align-items: center;
    margin-top: 12rem;
}

.img {
    background: url(https://i.postimg.cc/XNkxpB71/manolo-chretien-Rp-C-9e0-ORNM-unsplash.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    width: 85%;
    height: 100vh;
    border: 5px solid aqua;
}
</style>