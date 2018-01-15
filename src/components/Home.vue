<template>
  <div id="home">
    <h1>{{ msg }}</h1>
    <a>Googleアカウントでログイン</a>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to MyMarkdown'
    }
  }
}
</script>

<style lang="scss">
</style>
