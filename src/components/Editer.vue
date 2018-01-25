<template>
<div id="editer">
  <h1>エディター画面</h1>
  <span>{{ user.displayName }}</span>
  <button @click="logout">ログアウト</button>
  <div>
    <div class="memoListWrapper">
      <div class="memoList" v-for="(memo, index) in memos" @click="selectMemo(index)" :data-selected="index == selectedIndex">
        <p class="memoTitle">{{ displayTitle(memo.markdown) }}</p>
      </div>
      <button class="addMemoBtn" @click="addMemo">メモの追加</button>
    </div>
    <textarea class="markdown" v-model="memos[selectedIndex].markdown"></textarea>
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
      memos: [{
        markdown: ''
      }],
      selectedIndex: 0
    }
  },
  methods: {
    logout: function() {
      firebase.auth().signOut();
    },
    addMemo: function() {
      this.memos.push({
        markdown: '無題のメモ',
      })
    },
    selectMemo: function(index) {
      this.selectedIndex = index;
    },
    preview: function() {
      return marked(this.memos[this.selectedIndex].markdown);
    },
    displayTitle: function(text) {
      return text.split(/\n/)[0].replace(/#\s/, '');
    },
  }
}
</script>

<style lang="scss" scoped>
.memoListWrapper {
    width: 19%;
    float: left;
    border-top: 1px solid #000;
}
.memoList {
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
.memoTitle {
    height: 1.5em;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
}
.addMemoBtn {
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
