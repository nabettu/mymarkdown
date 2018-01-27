<template>
<nav class="global-nav">
  <img class="logo" src="../assets/logo.png">
  <div class="userInfo" v-if="user">
    <span class="userName">{{ user.displayName }}</span>
    <button class="logoutBtn" @click="logout">
      Logout
      <i class="fa fa-sign-out"></i>
    </button>
  </div>
</nav>
</template>

<script>
export default {
  name: 'global-nav',
  props: ['user'],
  methods: {
    logout: function() {
      firebase.auth().signOut();
    },
  }
}
</script>

<style lang="scss" scoped>
.global-nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    padding: 10px 10px 0;
    box-sizing: border-box;
    text-align: left;
    border-bottom: #ccc 1px solid;
}
.userInfo {
    float: right;
}
.userName {
    margin-right: 20px;
}
.logo {
    height: 40px;
}
.logoutBtn {
    i {
        margin-left: 5px;
    }
}
</style>
