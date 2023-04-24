<template>
<div id="signup">
      <h2 style="color: aqua;">SUBSCRIBE</h2>
        <form action="https://formspree.io/f/xwkzrbbv" method="POST" style="width: 85%; margin:auto;">
              <div class="form-outline mb-5">
                <label class="form-label" for="form3Example1">First name</label>
                <input type="text" placeholder="First Name" class="form-control" required />
              </div>
              <div class="form-outline mb-5">
                <label class="form-label" for="form3Example2">Last name</label>
                <input type="text" placeholder="Last Name" class="form-control" required />
              </div>
              <div class="form-outline mb-5">
                <label class="form-label" for="form3Example3">Email address</label>
                <input type="email" placeholder="@gmail.com" class="form-control" required />
              </div>
          <button type="submit" class="btn btn-outline-light btn-block mb-4">Subscribe</button>
          <div class="text-center">
            <p style="font-size: 20px;">for more content and stay tuned</p>
          </div>
        </form>
</div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
#signup {
  height: 90vh;
  width: 85%;
  border: 5px solid aqua;
  border-radius: 10px;
  display: inline-block;
  justify-content: center;
  align-items: center;
}
</style>