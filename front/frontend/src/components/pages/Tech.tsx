import Infra from "../../image/infra.png";
import ER from "../../image/ER.png";
import Todo from "../../image/todo_top.png";
import BulletinBoard from "../../image/bulletinboard_top.png";
import RPC from "../../image/rakutenpricechecker_top.png";
import { Card, Avatar, CardContent, CardHeader, CardMedia, Typography, Link, CardActions, Divider } from "@material-ui/core";
import { Button } from "../atoms";

const Tech = () => {
    
    return (
        <>
            <h1>アプリケーション「SUM APP」概要と設計開発について</h1>
            <section className="section">
                <div className="subject">
                    <h2>0.はじめに</h2>
                </div>
                <div>
                    <h3>0.1 自己紹介</h3>
                    <div>
                        <p>　初めまして、本アプリケーション「SUM APP」を作成した<strong>枡潟 慮充</strong>と申します。
                            現在はWEBエンジニアへのキャリアチェンジを目指し転職活動を行っております。
                            簡単ですが以下に経歴をまとめました。
                        </p>
                        <br />
                        <ul className="timeline">
                            <li>
                                <p className="timeline-date">2018年3月</p>
                                <div className="timeline-content">
                                    <h3>農芸化学系学科の学士卒業</h3>
                                    <p>有機合成化学を専攻し有機化合物の合成経路についての研究を行う。</p>
                                </div>
                            </li>
                            <li>
                                <p className="timeline-date">2018年4月</p>
                                <div className="timeline-content">
                                    <h3>前職に入社</h3>
                                    <p>化学系製造業技術職として製品設計に3年半程従事。</p>
                                </div>
                            </li>
                            <li>
                                <p className="timeline-date">2020年4月</p>
                                <div className="timeline-content">
                                    <h3>独学にてプログラミングの学習を開始</h3>
                                    <p>コロナ禍をきっかけに新しいことを始めようとプログラミングの学習を完全独学にて開始する。</p>
                                </div>
                            </li>
                            <li>
                                <p className="timeline-date">2021年12月</p>
                                <div className="timeline-content">
                                    <h3>前職を退職</h3>
                                    <p>本気でWEBエンジニアへのキャリアチェンジを考え前職を退職。転職活動を開始する。</p>
                                </div>
                            </li>
                        </ul>
                        <br />
                        <p>　尚、前職での詳しい業務内容、WEBエンジニアへのキャリアチェンジの理由等は本ページの趣旨とは異なるため省略させていただきます。</p>
                    </div>
                </div>
                <div>
                    <h3>0.2 アプリ概要</h3>
                    <div>
                        <p>
                            　当アプリケーションは転職のためのポートフォリオとして作成を開始し、
                            以下の３つのコンセプトを持って開発することとしました。
                        </p>
                        <ul style={{listStyle: "number"}}>
                            <li>自分自身で使いたいと思えるアプリケーションを作成する。</li>
                            <li>完全独学でのデプロイを目指す。</li>
                            <li>実務の現場で実際に使用されている技術を使用する。</li>
                        </ul>
                        <h4>0.2.1 自分自身で使いたいと思えるアプリケーションを作成する。</h4>
                        <p>
                            　WEBエンジニアとして働くに当たって、Webに関する技術を磨くことは当然のことですがそれ以前に、世の中の役に立つ、意味のあるサービスを提供するということが根幹にあると考えています。<br /><br />
                            　そこで、まずは「意味のあるサービス」の中でもハードルが低そうな「自分自身が抱えてる問題を解決する
                            アプリケーション」を作成しようと考え、家計簿として日々の収支情報をまとめつつ、自分の目標に沿って貯金を手助けしてくれるようなアプリケーションを開発しようと決めました。
                        </p>
                        <h4>0.2.2 完全独学でのデプロイを目指す。</h4>
                        <p>
                            　私の場合、完全な未経験での転職活動になるため、ポートフォリオのレベルを上げ技術力を証明することはもちろん、他の転職志望者との差別化を図らなければならないと考えました。<br /><br />
                            　そこで、「エンジニアとして生きていくための圧倒的な自走力」をアピールすることが有効なのでは無いかと考えました。WEBの世界では技術が日進月歩に進んでいるため、最先端を生きていくためには常に知識をアップデートしていく必要があります。<br />
                            　例えば、今回フロントエンド実装に使用したREACTにおいてもHooksの導入であったりReact-Router５から６へのアップデートであったりRedux不要論が提唱されたりなどと頻繁に技術の入れ替えやそれに関する論争が起こっています。<br /><br />
                            　これらの技術の進歩に追いつくためにも、「日々の自己研鑽ができる人材」というのがWEB業界における一種の良い人材なのではないかと考えています。<br /><br />
                            　以上の理由より、自学に励み実装していくやる気、それを続けていくことができる自走力を照明するために、
                            完全独学でのデプロイをコンセプトに添えこのアプリケーションを完成させました。
                        </p>
                        <h4>0.2.3 実務の現場で実際に使用されている技術を使用する。</h4>
                        <p>
                            　完全未経験での転職活動には技術力を照明するためのポートフォリオを作成することは必須ですが
                            「使用する技術の選定」も重要になってくると考えました。<br />
                            　モダンで実務でも広く扱われている技術を学習することで転職活動をする際に選択肢が広がる上に、転職後も
                            よりスムーズに実務に入れると思ったからです。加えて、0.2.2でも少し説明した通り、日々の自己研鑽を続け、
                            最新の技術を学び取り入れていく姿勢こそ、エンジニアにとって一番重要な要素だと考えているので時間をかけてでも
                            モダンな技術を取り入れることは必要だと自分の中で結論づけました。
                        </p>
                    </div>
                </div>
                <div>
                    <h3>0.3 使用技術について</h3>
                    <div>
                        <p>　使用技術に関しましてはリストでまとめた通りとなります。</p>
                        <ul>
                            <li>フロントエンド：React + TypeScript + Redux</li>
                            <li>バックエンド：Ruby on Rails API</li>
                            <li>インフラ：AWS(S3 + ECS + ECR), Docker/docker-compose</li>
                        </ul>
                        <p>　次の章から、それぞれの使用技術に関しましてより詳しく説明したいと思います。</p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="subject">
                    <h2>1. アプリケーションの設計開発について</h2>
                </div>
                <div>
                    <h3>1.1 フロントエンドの開発について</h3>
                    <div>
                        <p>
                            　フロントエンドの実装にはReact + TypeScript + Reduxを使用しました。
                            使用したライブラリは主に以下の通りとなります。
                        </p>
                        <ul>
                            <h3>UI実装周り</h3>
                            <li>material-ui：　UIデザイン関連のコンポーネントを提供しているライブラリ。UIデザイン周りの実装で非常に役立ちました。</li>
                            <li>react-chartjs-2：　円グラフや棒グラフ、折れ線グラフといったチャートを簡単に作成できるライブラリ。収支情報のまとめをグラフ化するために用いました。</li>
                            <li>react-calendar：　カレンダーを簡単に作成することができるライブラリ。</li>

                            <h3>Redux周り</h3>
                            <li>redux：　stateを一元管理するためのライブラリ。開発の進行に伴って、所謂propsのバケツリレーが起きてしまいデータの管理の複雑性が増してしまったため導入しました。</li>
                            <li>redux-thunk：　Reduxで非同期処理を行えるようにするためのミドルウェア。</li>
                            <li>reselect：　stateの中から任意のパラメータを受け取るためのライブラリ。</li>

                            <h3>Router周り</h3>
                            <li>connected-react-router：　Reduxのstoreでrouterの情報を管理できるようにするライブラリ。historyの管理や画面遷移の実装のため使用しました。</li>
                            <li>axios：　ブラウザからHTTPリクエストを送信するためのライブラリ。フロントエンド側とAPI側で通信を行うために使用しました。</li>
                            <li>react-router： URLとコンポーネントを紐付け、SPA(シングルページアプリケーション)としてページの更新を行うライブラリ。</li>
                        </ul>
                        <br />
                        <p>
                            　アプリ開発当初はフロントエンドとバックエンドで明確に分けることはせずERB、Bootstrap、JQueryを使用して全てRails内で完結させていました。しかし、現状多くのプロジェクトではフロントエンドとバックエンドで分けて開発が行われていることを知り、RailsはAPIモードを使用し、フロントエンドは別にJS系のライブラリを使用して実装することにしました。<br /><br />
                            　使用するライブラリに関しては、「Vue.js」「Angular」「React」などの選択肢がありましたが、転職サイトなどで見る限り採用数がもっとも多そうな印象を受けた「React」を使用することとしました。
                        </p>
                    </div>
                </div>
                <div>
                    <h3>1.2 バックエンドの開発について</h3>
                    <div>
                        <p>
                            　バックエンドの実装にはRuby on RailsのAPIモードを使用しました。
                            使用したGemに関しては主に以下の通りとなります。
                        </p>
                        <ul>
                            <li>Rspec：　Railsの代表的なテストツールの一つ。単体テスト、統合テストを実行するために使用しました。</li>
                            <li>Factory Bot：　テストのサンプルデータを簡単に作成することができるgem。</li>
                        </ul>
                        <p>
                            　データベース設計に関しましては以下のER図の通りとなります。
                            また、ユーザー情報に関しては、Auth0を使用することでRails内では管理しないようにしました。
                        </p>
                        <div style={{textAlign: "center"}}>
                            <img src={ER} alt="er" style={{width: "90%", maxWidth: "1000px"}}/>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>1.3 インフラ構成について</h3>
                    <div>
                        <h4>1.3.1 本番環境</h4>
                        <p>
                            　本番環境のデプロイはAWSを用いました。使用したサービスは以下の通りとなります。
                        </p>
                        <ul>
                            <li>Route53：　サイトを独自ドメインと紐づけるために使用しました。</li>
                            <li>ACM：　サイトの通信スキームをHTTPS化するために使用しました。</li>
                            <li>ALB：　通信の負荷分散を行うロードバランサー。</li>
                            <li>S3：　フロントエンド側のホスティングのために使用。</li>
                            <li>ECS(Fargate)：　コンテナ向けのサーバーレスコンピューティングサービス。RailsとNGINXをデプロイするために使用しました。</li>
                            <li>ECR：　RailsとNGINXのDockerイメージを保存するためのレジストリとして使用しました。</li>
                            <li>RDS：　クラウド上でリレーショナルデータベースを使用するサービス。PostgreSQLを使用しました。</li>
                        </ul>
                        <br />
                        <div style={{textAlign: "center"}}>
                            <img src={Infra} alt="infra" style={{width: "90%", maxWidth: "1000px"}} />
                        </div>
                        <h4>1.3.2 開発環境</h4>
                        <p>
                            　上記の通り、本番環境のデプロイはECSの使用を考えていたので、環境による差異を小さくする目的も兼ねて開発環境は
                            Docker/docker-composeを利用しコンテナ化しました。サービスの構成については以下の通りとなります。
                        </p>
                        <ul>
                            <li>db: postgreSQL</li>
                            <li>api: Ruby on Rails</li>
                            <li>front: React</li>
                            <li>web: NGINX</li>
                        </ul>
                        <p>
                            　開発環境に関しては、雛形を作成し
                            <Link href="https://github.com/nobumitsu-1995/rails-nginx-react-docker" target="_blank">
                                Github
                            </Link>
                            にあげているので是非ご覧ください。
                        </p>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="subject">
                    <h2>2.その他</h2>
                </div>
                <div>
                    <h3>2.1 今後の実装機能、改善点について</h3>
                    <div>
                        <p>
                            　本アプリケーションは基本的な機能はすでに使用できますが、まだ不完全で改善点が多々残っております。
                            今後のアップデートで以下の点を改善していきたいと考えています。
                        </p>
                        <ul style={{listStyle: "number"}}>
                            <li>固定収支情報を登録することで毎月の固定収支を自動で登録できるようにする。</li>
                            <li>検索機能を追加し、収支情報を検索できるようにする。</li>
                            <li>CI/CDサービスの導入</li>
                        </ul>
                    </div>
                    <div>
                        <h4>2.1.1 固定収支情報を登録することで毎月の固定収支を自動で登録できるようにする。</h4>
                        <p>
                            　毎月の収入や出費には一部固定のものがあると思います。そういった情報を毎月自分の手で入力するのは非常に手間になるので
                            自動化できればと考えています。
                            　API側の機能はすでに実装されているのでフロント側でタスクを設定できるようにする予定です。
                            　ECSを利用して「日付とFixed_costsテーブルレコードのscheduled_dateが一致する固定収支情報を
                            収支情報として登録する」というタスクを一日一回定期実行する処理を作成しようと考えています。
                        </p>
                    </div>
                    <div>
                        <h4>2.1.2 検索機能を追加し、収支情報を検索できるようにする。</h4>
                        <p>
                            　Railsに「Elastic Search」を導入し、収支情報の検索機能を作成する予定です。
                            また、フロント側でも収支情報のテーブルにソート機能をつけるなどして、より使用しやすくしたいと考えています。
                        </p>
                    </div>
                    <div>
                        <h4>2.1.3 CI/CDサービスの導入</h4>
                        <p>
                            　実務ではほとんどの場合CI/CDサービスを導入し、デプロイやテスト等を自動化している印象がありますが、
                            このプロジェクトではまだ導入できていません。今後も機能等アップデートしていく予定なので、少なくともデプロイの自動化には
                            対応したいなと考えています。
                        </p>
                    </div>
                </div>
                <div>
                    <h3>2.2 その他の開発アプリについて</h3>
                    <div className="cards" style={{alignItems: "flex-start"}}>
                        <Card className="card" style={{maxWidth: 270}} >
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe" style={{backgroundColor: "#F50057"}}>
                                    1
                                </Avatar>
                                }
                                title="TODOアプリ"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={Todo}
                                alt="how-to-use1"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                Ruby on Railsを学習した後に初めて1から作成したアプリです。Todoの追加、確認、編集、削除、完了等の操作ができる基本的なCRUDアプリになります。
                                </Typography>
                            </CardContent>
                            <Divider light />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    以下の情報でログイン可能です。<br />
                                    ・メールアドレス：hoge<br />
                                    ・パスワード：hoge
                                </Typography>
                            </CardContent>
                            <Divider light />
                            <CardActions>
                                <Link href="https://github.com/nobumitsu-1995/TodoApp_v2" target="_blank">
                                    <Button color="inherit" size="small" variant="text">Github</Button>
                                </Link>
                                <Link href="https://todo-deadline-management-app.herokuapp.com/" target="_blank">
                                    <Button color="inherit" size="small" variant="text">Apprication</Button>
                                </Link>
                            </CardActions>
                        </Card>
                        <Card className="card" style={{maxWidth: 270}}>
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe" style={{backgroundColor: "#F50057"}}>
                                    2
                                </Avatar>
                                }
                                title="掲示板アプリ"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={BulletinBoard}
                                alt="how-to-use1"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                APIを利用したログイン機能やAJAX処理、N＋１問題の解決方法といったより実践的な技術について学ぶために作成をした掲示板アプリです。ログインをして掲示板に投稿、削除ができ、チャットすることができます。
                                </Typography>
                            </CardContent>
                            <Divider light />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    以下の情報でログイン可能です。<br />
                                    ・メールアドレス：test.user.for.portfolio@gmail.com<br />
                                    ・パスワード：Testuser2021
                                </Typography>
                            </CardContent>
                            <Divider light />
                            <CardActions>
                                <Link href="https://github.com/nobumitsu-1995/BulletinBoard_v2" target="_blank">
                                    <Button color="inherit" size="small" variant="text">Github</Button>
                                </Link>
                                <Link href="https://ajaxbulletinboard.herokuapp.com/" target="_blank">
                                    <Button color="inherit" size="small" variant="text">Apprication</Button>
                                </Link>
                            </CardActions>
                        </Card>
                        <Card className="card" style={{maxWidth: 270}}>
                            <CardHeader
                                avatar={
                                <Avatar aria-label="recipe" style={{backgroundColor: "#F50057"}}>
                                    3
                                </Avatar>
                                }
                                title="楽天 PRICE CHECKER"
                            />
                            <CardMedia
                                component="img"
                                height="194"
                                image={RPC}
                                alt="how-to-use1"
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    APIを利用したアプリケーションの開発を学ぶために作成したアプリです。楽天市場に出品されている商品を検索することができ、商品情報を保存することで価格の推移を自動でグラフ化することができます。
                                </Typography>
                            </CardContent>
                            <Divider light />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary">
                                    以下の情報でログイン可能です。<br />
                                    ・メールアドレス：test.user.for.portfolio@gmail.com<br />
                                    ・パスワード：Testuser2021
                                </Typography>
                            </CardContent>
                            <Divider light />
                            <CardActions>
                                <Link href="https://github.com/nobumitsu-1995/RakutenPriceChecker_v2" target="_blank">
                                    <Button color="inherit" size="small" variant="text">Github</Button>
                                </Link>
                                <Link href="https://rakutenpricechecker.herokuapp.com/" target="_blank">
                                    <Button color="inherit" size="small" variant="text">Apprication</Button>
                                </Link>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            </section>
            <section className="section">
                <div className="subject">
                    <h2>3.最後に</h2>
                </div>
                <div>
                    <p>
                        　以上、アプリケーションの概要説明についてでした。最後まで読んでいただきましてありがとうございます。<br /><br />
                        　私はプログラミングに関して本当に全く触れたことがない素人で、勉強開始当初は自分一人でアプリケーションを
                        作り上げることなど想像もできませんでした。しかし、勉強を続けるうちに知識がどんどん増えていき、それと同時に
                        使ってみたい技術もどんどん増えていき、完全にプログラミングの虜となってしまいました(笑)<br />
                        　今後も、向上心を忘れずインプットとアウトプットを積み重ねていきたいと思っています。<br /><br />
                        　長くなりましたが最後まで読んでいただきまして、ありがとうございました。
                    </p>
                </div>
            </section>
        </>
    )
}

export default Tech;