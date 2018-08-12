<template>
<div class="home">
  <div class="firstView">
    <img class="logo" src="../assets/top_logo.png" alt="MyMarkdown" title="MyMarkdown">
    <p class="copy">{{ msg }}</p>
    <p class="subcopy">最小限の機能に絞ったマークダウンエディター</p>
    <button class="login" @click="googleLogin">
      <i class="fa fa-google"></i>
      Googleアカウントで5秒で登録
    </button>
    <div class="notice">
      ※ 登録の際には
      <a :href="termsUrl" target="_blank">利用規約とプライバシーポリシー</a> に同意したものとします。
    </div>
  </div>
  <div class="about">
    <img class="sample" src="../assets/sample.png" alt="利用例" title="利用例">
    <p>余計な機能が無いのでさっとメモをとることだけに集中出来ます</p>
    <p>マークダウン記法で書けて、リアルタイムにプレビュー</p>
    <p>ショートカットキーにより、キーボードだけで操作可能</p>
    <div class="shortcuts">
      <p>"Control + s"(Macの場合は"Command + s")ですぐに保存</p>
      <p>"Alt + ↑↓"(Macの場合は"Option + ↑↓")でメモの切り替え</p>
      <p>最後のメモ選択時に"Alt + ↓"(Macの場合は"Option + ↓")でメモの追加</p>
      <p>"Control + Backspace"(Macの場合は"Command + delete")でメモの削除</p>
    </div>
    <p>さぁあなたもすぐに初めてみましょう！</p>
    <button class="login" @click="googleLogin">
      <i class="fa fa-google"></i>
      Googleアカウントで5秒で登録
    </button>
  </div>
  <div class="footer">
    <a :href="termsUrl" target="_blank">利用規約とプライバシーポリシー</a>
    <div class="providedby">
      Provided by
      <a href="https://twitter.com/nabettu" target="_blank">nabettu</a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      msg: 'かつてないほどシンプルなメモ帳',
      termsUrl: '/'
    }
  },
  methods: {
    googleLogin: function() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
    padding-top: 100px;
}
.logo {
    height: 100px;
    margin-bottom: 70px;
}
.copy {
    font-size: 50px;
    font-weight: bold;
    margin-bottom: 50px;
}
.subcopy {
    font-size: 30px;
    margin-bottom: 50px;
}
.login {
    font-size: 20px;
    padding: 5px 20px;
    i {
        margin-right: 5px;
    }
}
.notice {
    margin-top: 20px;
}
.about {
    width: 800px;
    margin: 80px auto;
    .sample {
        border-radius: 5px;
        border: 1px solid #eee;
        margin-bottom: 40px;
    }
    p {
        font-size: 20px;
        margin: 20px 0;
    }
    .login {
        margin-top: 40px;
    }
}
.shortcuts {
    p {
        font-size: 15px;
        margin: 10px 0;
    }
    background-color: #eee;
    border-radius: 5px;
    padding: 10px 0;
    margin-bottom: 40px;
}
.footer {
    width: 800px;
    margin: 0 auto;
    border-top: 1px solid #ddd;
    padding: 50px 0;
    .providedby {
        margin-top: 10px;
    }
}
</style>
