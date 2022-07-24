<template>
  <div class="home">
    <nav>
      <div class="nav-dark"></div>
      <div class="gradient-line">
        <img id="logo" :src="logo" class="logo" alt="logo">
      </div>
    </nav>
    <HomePageForm/>
<!--    <LoginForm/>-->
  </div>
</template>

<script>
// @ is an alias to /src
// import LoginForm from "@/components/LoginForm";
import HomePageForm from "@/components/HomePageForm";
import logo from '../assets/logo.png';

export default {
  name: 'LoginView',
  components: {
    // LoginForm,
    HomePageForm,
  },
  data() {
    return {
      logo,
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  width: 100%;

  .nav-dark {
    width: 100%;
    height: 52px;
    background: #333;
  }

  .gradient-line {
    width: 100%;
    height: 97px;
    background: linear-gradient(180deg, rgba(0,175,237,1) 0%, rgba(0,86,154,1) 100%);

    .logo {
      width: 103px;
      height: 66px;
      margin-left: 20%;
      margin-top: 1%;
    }
  }
}

.bg {
  width: 100%;
  height: 48%;
}

.head-bg {
  width: 100%;
  height: 48%;
}
</style>
