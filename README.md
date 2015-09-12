# ionic-typescript-bootstrap

IonicアプリをTypeScriptで開発する環境を作るスクリプト。

## USAGE

下記でプロジェクトを作る。
テンプレートは`blank`専用。

```
$ ionic start YOUR_APP_NAME blank
$ cd YOUR_APP_NAME
$ curl -o- https://raw.githubusercontent.com/kinumi/ionic-typescript-bootstrap/master/bootstrap.sh | bash
```

`ionic.project`に下記を追加すると便利。本当はこれも自動化したい。

```
  "gulpStartupTasks": ["watch"]
```