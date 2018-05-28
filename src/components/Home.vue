<template>
<div class="home">
  <h1><img alt="MyMarkdown" src="../assets/logo.png"></h1>
  <button @click="googleLogin">Googleアカウントでログイン</button>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'Welcome to MyMarkdown'
    }
  },
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
}
</script>

<style lang="scss">
.home {
    margin-top: 60px;
}
</style>
