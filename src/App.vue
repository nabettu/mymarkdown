<template>
<div id="app">
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
    }
  },
  mounted: function() {
    firebase.auth().onAuthStateChanged(user => {
      console.log(user);
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
