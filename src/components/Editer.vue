<template>
<div id="editer">
  <h1>エディター画面</h1>
  <span>{{ user.displayName }}</span>
  <button @click="logout">ログアウト</button>
  <div>
    <div class="postListWrapper">
      <div class="postList" v-for="(post, index) in posts" @click="selectPost(index)" :data-selected="index == selectedIndex">
        <p class="postName">{{ displayTitle(post.markdown) }}</p>
      </div>
      <button class="addPostBtn" @click="addPost">メモの追加</button>
    </div>
    <textarea class="markdown" v-model="posts[selectedIndex].markdown"></textarea>
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
      posts: [{
        markdown: ''
      }],
      selectedIndex: 0
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    },
    addPost: function() {
      this.posts.push({
        markdown: '無題のメモ',
      })
    },
    selectPost: function(index) {
      this.selectedIndex = index;
    },
    preview: function() {
      return marked(this.posts[this.selectedIndex].markdown);
    },
    displayTitle: function(text) {
      return text.split(/\n/)[0].replace(/#\s/, '');
    },
  }
}
</script>

<style lang="scss" scoped>
.postListWrapper {
    width: 19%;
    float: left;
    border-top: 1px solid #000;
}
.postList {
    padding: 10px;
    box-sizing: border-box;
    text-align: left;
    border-bottom: 1px solid #000;
    &:nth-child(even) {
        background-color: #ccc;
    }
    &[data-selected="true"] {
        background-color: #ccf;
    }
}
.postName {
    height: 1.5em;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
}
.addPostBtn {
    margin-top: 20px;
}
.markdown {
    float: left;
    width: 40%;
    height: 500px;
}
.preview {
    float: left;
    width: 40%;
    text-align: left;
}
</style>
