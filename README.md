# Vue.js と Firebase で作るミニ Web サービス サポートリポジトリ

こちらのリポジトリは **Vue.js と Firebase で作るミニ Web サービス ~ 初めてのサーバーレスシングルページアプリケーション ~** のサポートリポジトリです。

書籍を進める上で、実際のコードがどうなっているかの参考にしていただければと思います。

コードの状態は書籍を写経して進めた場合に、書籍完了時の状態になっております。

# サンプルサイトについて

最終的にどんな Web サービスが作れるか、というサンプルを公開しています。

サンプルサービスは本書の内容に加えて、見た目や使いやすさを向上させるために多少手を加えていますが、機能面ではあまり差はありません。

## MyMarkdown

https://mymarkdown.firebaseapp.com

サンプルサイトのコードについてはブランチを別にしており、[こちらの Add-design ブランチ](https://github.com/nabettu/mymarkdown/tree/feature/add-design)となっております。

# 正誤表及び改訂版での変更点

- P.26〜 App.vue のパスが間違っている

  - 正しいパスは /src/App.vue になります。

- P38 記述ミス

  - ６行目の div に class="editorWrapper" を追加

  - Style 部分の記述追加及び変更(同じクラスのものは変更してください。)

```
.editorWrapper {
  display: flex;
}
.memoListWrapper {
  width: 20%;
  border-top: 1px solid #000;
}
.markdown {
  width: 40%;
  height: 500px;
}
.preview {
  width: 40%;
  text-align: left;
}
```

- P38 および P40 非推奨な書き方の修正

  - v-for を利用する際には表示する要素に固有の key を設定することが推奨されているため次のように修正します。

```
<div class="memoList" v-for="(memo, index) in memos" :key="index" @click="selectMemo(index)" :data-selected="index == selectedIndex">
```

- P46 リスト 5.11 誤字

  - deleteMemoBtn → .deleteMemoBtn (書籍では.が抜けています。)

- P.47,48 「Control + s キー」とあるが、動作は「Command + s(Mac OS)、Windows キー + s(Windows)」となっている。

  - 「Control + s キー」と「Command + s(Mac OS)、Windows キー + s(Windows)」の双方で保存の操作に変更します。
  - リスト 5.13：３行目を `if (e.key == 's' && (e.metaKey || e.ctrlKey)) {` に変更します。

- p.49 shitajicss のインストールコマンドが無く、不親切。

  - 以下の記述を追加

```
$ npm install shitajicss
```

こちらのコマンドで npm をインストールします。

- P.57 1 行目の記述変数名がソースと差異がある

  - Vue.use(Router) → Vue.use(VueRouter) に変更します。

- P.58 リスト 7.4 で components との相対パス変更について記述が抜けている

  - 以下の記述を追加 ("./" → "../"に変更します。)

```
import Home from "../components/Home.vue";
import Editor from "../components/Editor.vue";
```
