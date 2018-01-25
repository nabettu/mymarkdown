<template>
<div id="editer">
  <h1>エディター画面</h1>
  <span>{{ user.displayName }}</span>
  <button @click="logout">ログアウト</button>
  <div>
    <textarea class="markdown" v-model="markdown"></textarea>
    <div class="preview" v-html="preview()"></div>
  </div>
</div>
</template>

<script>
import marked from 'marked';

export default {
  name: 'editer',
  props: ['user'],
  data() {
    return {
      markdown: '',
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    },
    preview: function() {
      return marked(this.markdown);
    },
  }
}
</script>

<style lang="scss" scoped>
.markdown {
    float: left;
    width: 50%;
    height: 500px;
}
.preview {
    float: left;
    width: 49%;
    text-align: left;
}
</style>
