<template>
<div id="app">
  <Home v-if="!isLogin"></Home>
  <Editer v-if="isLogin" :user="userData"></Editer>
</div>
</template>

<script>
import Home from './components/Home.vue';
import Editer from './components/Editer.vue';

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
  },
}
</script>

<style lang="scss">
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

h1,
h2 {
    font-weight: normal;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
