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

# Firebase v6 からの変更点

Firebase SDK の version 6 (2019 年 5 月ごろから変更)からは書籍 P19 で html にコピーするコードの内容が変更されています。これまでは必要のなかった変更点が増えていますので、以下の対応をお願いします。

※バージョン番号は都度変更があるため、管理画面やドキュメントで表示されているものを利用してください。

## SDK の分割読み込み対応

次が Firebase の管理画面で貼り付けるように指示されているコードです。

```
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="/__/firebase/6.1.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#reserved-urls -->

<!-- Initialize Firebase -->
<script src="/__/firebase/init.js"></script>
```

こちらのコードは以前と比べて認証やデータベースを利用するための SDK を別々に読み込む形式と変更されており、そのほうがファイルを読み込む容量が減るため公式では推奨されています。また、firebase-app.js 自体もサイトに配置し、プロジェクトの初期化も別途 init.js というファイルを自分で作成して実行する形式となっています。

しかし今回は入門として手間の少ない CDN から読み込み、かつ初期化もまとめて行う方式に変更します。

手順としてまず管理画面で今回用のプロジェクトを選択後にプロジェクトの設定をクリックします。

![プロジェクトの設定](./docs/project.png)

その後、スクロールし下部のマイアプリの部分で「Firebase SDK snippet」のチェックボックスで「CDN」を選択します。

![CDNの選択](./docs/cdn.png)

すると下記のようなコードが表示されますので、コピーし index.html で **はじめに指示されていたコードを消して差し替えます。**

```
<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#config-web-app -->

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBAfdUWsyvv_h216knnWlA_Tfk4dzEFa5g",
    authDomain: "mymarkdown2-68e37.firebaseapp.com",
    databaseURL: "https://mymarkdown2-68e37.firebaseio.com",
    projectId: "mymarkdown2-68e37",
    storageBucket: "mymarkdown2-68e37.appspot.com",
    messagingSenderId: "199213394357",
    appId: "1:199213394357:web:039c52f5ee2e30cb"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
</script>
```

こちらのコードを利用すると、Firebase プロジェクトの初期化をはじめに行うようになっています。ただ、これだけだと認証や DB へのアクセスを行う SDK の読み込みが足りません。

そこで、次の公式ドキュメントのページの中程から必要なスニペットをコピーしてきます。

https://firebase.google.com/docs/web/setup

> CDN から、必要な個々のコンポーネントをインクルードします

の次の行から始まるコードから、以下のコードをコピーします。

```
<script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-auth.js"></script>
<script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-database.js"></script>
```

Firestore を利用する場合には次のコードもコピーし、それぞれ index.html に追加します。
[こちらのリポジトリで、書籍完了後に Firestore へ移行するための PDF を無料配布しています](https://github.com/nabettu/firestore-manual)

```
<script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-firestore.js"></script>
```

追加する場所は firebase-app.js を読み込んだあと、初期化をする前の部分で、最終的な index.html は以下のようになります。

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>mymarkdown</title>
  </head>
  <body>
    <div id="app"></div>
    <script src="https://www.gstatic.com/firebasejs/6.1.0/firebase-app.js"></script>

    <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-auth.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-database.js"></script>
    <script src="https://www.gstatic.com/firebasejs/5.9.1/firebase-firestore.js"></script>
    <script>
      // ご自身のFirebaseプロジェクトの設定値
      var firebaseConfig = {
        apiKey: "AIzaSyBAfdUWsyvv_h216knnWlA_Tfk4dzEFa5g",
        authDomain: "mymarkdown2-68e37.firebaseapp.com",
        databaseURL: "https://mymarkdown2-68e37.firebaseio.com",
        projectId: "mymarkdown2-68e37",
        storageBucket: "mymarkdown2-68e37.appspot.com",
        messagingSenderId: "199213394357",
        appId: "1:199213394357:web:039c52f5ee2e30cb"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
    </script>
    <script src="./build.js"></script>
  </body>
</html>
```

こちらをご参照になって引き続き開発を進めていただければと思います。

## 認証の際に、サポートメールの設定が必要

ログイン機能の実装の際に、認証画面でエラーが発生した場合にはサポートメールの設定がされていないからかもしれません。

書籍執筆時のバージョンでは Google ログイン設定画面で設定できましたが、バージョンが変わってからはプロジェクト設定画面に移行したようです。

![サポートメールの設定](./docs/support.png)

こちらでメールアドレスの設定を行ってください。

ご自身のログインしているメールアドレス以外を設定したい場合は、ユーザーと権限タブで追加したいメールアドレスをメンバーとして追加すれば、選択出来るようになります。

# 正誤表及び改訂版での変更点

- P.26〜 App.vue のパスが間違っている

  - 正しいパスは /src/App.vue になります。

- P38 記述ミス

  - ６行目の div に class="editorWrapper" を追加

  - Style 部分の記述追加及び変更(同じクラスのものは変更してください。)

````

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
  - リスト 5.13：３行目を `if (e.key == "s" && (e.metaKey || e.ctrlKey)) {` に変更します。

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

# Firestore の移行マニュアルを作成しました。

[こちらのリポジトリで PDF を無料配布しています](https://github.com/nabettu/firestore-manual)

また、本リポジトリの[firestore 対応ブランチはこちらになっております](https://github.com/nabettu/mymarkdown/tree/firestore)。
````
