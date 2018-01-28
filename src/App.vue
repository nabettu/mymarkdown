<template>
<div id="app">
  <div class="loading" v-if="!isLoginChecked">
    <i class="fa fa-spinner fa-spin fa-lg fa-5x"></i>
  </div>
  <GlobalNav :user="userData"></GlobalNav>
  <Home v-if="!isLogin"></Home>
  <Editer v-if="isLogin" :user="userData"></Editer>
</div>
</template>

<script>
import Home from './components/Home.vue';
import Editer from './components/Editer.vue';
import GlobalNav from './components/GlobalNav.vue';

export default {
  name: 'app',
  data() {
    return {
      isLogin: false,
      userData: null,
      isLoginChecked: false,
    }
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
      this.isLoginChecked = true;
      if (user) {
        this.isLogin = true;
        this.userData = user;
      } else {
        this.isLogin = false;
        this.userData = null;
      };
    });
  },
  components: {
    'Home': Home,
    'Editer': Editer,
    'GlobalNav': GlobalNav,
  },
}
</script>

<style lang="scss" scoped>
.loading {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #eee;
    i {
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -0.5em 0 0 -0.5em;
    }
}
</style>
