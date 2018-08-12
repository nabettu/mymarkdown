# Vue.jsとFirebaseで作るミニWebサービス サポートリポジトリ

こちらのリポジトリは **Vue.jsとFirebaseで作るミニWebサービス ~ 初めてのサーバーレスシングルページアプリケーション ~** のサポートリポジトリです。

書籍を進める上で、実際のコードがどうなっているかの参考にしていただければと思います。

コードの状態は書籍を写経して進めた場合に、書籍完了時の状態になっております。

# サンプルサイトについて

最終的にどんなWebサービスが作れるか、というサンプルを公開しています。

サンプルサービスは本書の内容に加えて、見た目や使いやすさを向上させるために多少手を加えていますが、機能面ではあまり差はありません。

## MyMarkdown
https://mymarkdown.firebaseapp.com

サンプルサイトのコードについてはブランチを別にしており、[こちらのAdd-designブランチ](https://github.com/nabettu/mymarkdown/tree/feature/add-design)となっております。


# 正誤表

- P.26〜 App.vue のパスが間違っている

  - 正しいパスは /src/App.vue になります。

- P46 リスト5.11誤字

  - deleteMemoBtn → .deleteMemoBtn (書籍では.が抜けています。)

- P.47,48 「Control + sキー」とあるが、動作は「Command + s(Mac OS)、Windowsキー + s(Windows)」となっている。

  - 「Control + sキー」と「Command + s(Mac OS)、Windowsキー + s(Windows)」の双方で保存の操作に変更します。
  -  リスト5.13：３行目を  `if (e.key == 's' && (e.metaKey || e.ctrlKey)) {` に変更します。
  
- p.49 shitajicssのインストールコマンドが無く、不親切。

  - 以下の記述を追加
  
```
$ npm install shitajicss
```
こちらのコマンドでnpmをインストールします。

- P.57 1行目の記述変数名がソースと差異がある

  - Vue.use(Router) → Vue.use(VueRouter) に変更します。

- P.58 リスト7.4でcomponentsとの相対パス変更について記述が抜けている

  - 以下の記述を追加 ("./" → "../"に変更します。)
```
import Home from "../components/Home.vue";
import Editor from "../components/Editor.vue";
```
