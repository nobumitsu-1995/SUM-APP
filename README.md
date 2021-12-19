# 家計簿アプリ「SUM APP」について
本アプリケーションは貯金目標の達成を補助してくれる家計簿アプリです。
<br>
以下のアカウントでログインできますので、ご利用ください。<br><br>
メールアドレス：test.user.for.portfolio@gmail.com<br>
パスワード：Testuser2021<br><br>

- [アプリケーションURL](https://www.kakeibo-app.com/)
- [アプリケーション概要](https://www.kakeibo-app.com/tech_info)<br><br>

## アプリ概要
### ○アプリコンセプト
本アプリケーションのコンセプトは以下の２点です。

1. 日々の収支情報を登録し家計簿として使用でき、自分の経済活動を視覚化できる。
2. 貯金目標を立て、それを達成できるように手助けをする。

お金を「加算する、合計する」という意味合いを持つ
**「SUM UP」**と
**「Application」**を掛け合わせ
**「SUM APP」**と名づけました。<br>
ロゴは貯金を積み重ねることで、右肩上がりになっていく**折れ線グラフ**と
**「Thumbs up」**を連想させるデザインとなっています。<br>

<img width="400" alt="Logo" src="./front/frontend/src/image/logo_transparent.png">

主に以下の３点の機能で構成されています。

- 日々の収支を登録する機能(単体登録、一括登録)
- 月々の収支情報のデータを確認する機能(円グラフや棒グラフ、折れ線グラフ) 
- 貯金目標達成を手助けする機能(総資産額の管理、月予算の設定、月残り予算)

### ○開発の背景
欲しいものを買うために、将来のために、**しっかりと貯金したい！**と思ったのが開発のきっかけです。<br>
しかし、貯金しようと思っても
- 「何に使ったかわからないけどお金が減っていく！」
- 「月々いくら貯金すればいいんだ？」
- 「モチベーションが保てない！」
といった問題に直面しました。<br><br>
そこで解決方法として以下の３点を考えました。
- 家計簿をつける。
- 収支のカテゴリ別の内訳を分析して無駄遣いしている部分を探す。
- 月々に貯金する額と使用していい金額を決める。
これらを視覚化することで、貯金のモチベーションを保つこともできるのではないかと考え、このアプリケーションを作成することにしました。

### ○ローカル環境構築方法
```ruby:console
git clone git@github.com:nobumitsu-1995/SUM-APP.git
docker-compose build
docker-compose up
```
## 使用技術
- フロントエンド(React + TypeScript + Redux)
    - redux-thunk：　Reduxで非同期処理を行えるようにするためのミドルウェア。
    - reselect：　stateの中から任意のパラメータを受け取るためのライブラリ。
    - material-ui：　UIデザイン関連のコンポーネントを提供しているライブラリ。UIデザイン周りの実装で非常に役立ちました。
    - react-chartjs-2：　円グラフや棒グラフ、折れ線グラフといったチャートを簡単に作成できるライブラリ。収支情報のまとめをグラフ化するために用いました。
    - react-calendar：　カレンダーを簡単に作成することができるライブラリ。
    - connected-react-router：　Reduxのstoreでrouterの情報を管理できるようにするライブラリ。historyの管理や画面遷移の実装のため使用しました。
    - axios：　ブラウザからHTTPリクエストを送信するためのライブラリ。フロントエンド側とAPI側で通信を行うために使用しました。
    - react-router： URLとコンポーネントを紐付け、SPA(シングルページアプリケーション)としてページの更新を行うライブラリ。
- バックエンド(Ruby on Rails)
    - Rspec：　Railsの代表的なテストツールの一つ。単体テスト、統合テストを実行するために使用しました。
    - Factory Bot：　テストのサンプルデータを簡単に作成することができるgem。
- インフラ(AWS, NGINX, Docker)
    - Route53：　サイトを独自ドメインと紐づけるために使用しました。
    - ACM：　サイトの通信スキームをHTTPS化するために使用しました。
    - ALB：　通信の負荷分散を行うロードバランサー。
    - S3：　フロントエンド側のホスティングのために使用。
    - ECS(Fargate)：　コンテナ向けのサーバーレスコンピューティングサービス。RailsとNGINXをデプロイするために使用しました。
    - ECR：　RailsとNGINXのDockerイメージを保存するためのレジストリとして使用しました。
    - RDS：　クラウド上でリレーショナルデータベースを使用するサービス。PostgreSQLを使用しました。
    - API Gateway： 問い合わせフォームから送られてきたデータを受け取りLambdaへ送るために使用しました。
    - Lambda： 送られてきたデータを元にメールを作成するために使用しました。
    - SES： Lambdaで作成したメールを管理者に送信するために使用しました。
- 開発環境(Docker, docker-compose)[開発環境雛形](https://github.com/nobumitsu-1995/rails-nginx-react-docker)
    - db: postgreSQL
    - api: Ruby on Rails
    - front: React
    - web: NGINX

### ○データベース設計
<img width="1000" alt="ER図" src="./front/frontend/src/image/ER.png">

### ○インフラ設計
<img width="1000" alt="infra" src="./front/frontend/src/image/infra.png">

## 機能一覧
