import { Card, Avatar, CardContent, CardHeader, CardMedia, Typography, TextField, IconButton, Link } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import Logo from "../../image/logo.png";
import FooterLogo from "../../image/logo_transparent.png";
import Happy from "../../image/happy.png";
import Overview2 from "../../image/overview2.jpg"
import Point1 from "../../image/point1.jpg"
import Point2 from "../../image/point2.jpg"
import Point3 from "../../image/point3.jpg"
import Point4 from "../../image/point4.jpg"
import HowToUse1 from "../../image/how_to_use1.jpg";
import HowToUse2 from "../../image/how_to_use2.jpg";
import HowToUse3 from "../../image/how_to_use3.jpg";
import HowToUse4 from "../../image/how_to_use4.jpg";
import GitHubIcon from '@mui/icons-material/GitHub';
import { Button, Input } from "../atoms";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import { useState } from "react";
import axios from "axios";
const Home = () => {
    const { loginWithRedirect } = useAuth0();
    const dispatch = useDispatch();
    const [formContent, setFormContent] = useState({name: "", email: "", body: ""});
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormContent({...formContent, [name]: value});
    }
    const sendMail = () => {
        if (!formContent.email) {
            return alert("メールアドレスを入力してください。")
        }
        if (!formContent.email.match(/.+@.+\..+/)) {
            return alert('メールアドレスをご確認ください'); 
        }
        if (!formContent.name) {
            return alert("名前を入力してください。")
        }
        if (!formContent.body) {
            return alert("お問い合わせ内容を入力してください。")
        }
        axios.post("https://3ub19eizz6.execute-api.ap-northeast-1.amazonaws.com/v1/send", formContent)
        .then(res => {
            alert(
                `${formContent.name}様
                お問い合わせありがとうございます。
                ${formContent.email}まで返信しますのでお待ちください。`
            )
        })
        .catch(e => {
            alert("送信に失敗しました。時間を置いてからもう一度お試しください。")
        })
    }
    return (
        <>
            <section className="wrapper">
                <p>貯金目標を立てて、毎月の計画的貯金を手助け！</p>
                <div className="wrapper-subject">
                    <div>
                        <img src={Logo} alt="logo" />   
                    </div>
                    <Button
                        children="会員登録してはじめる"
                        color="secondary"
                        size="medium"
                        variant="contained"
                        onClick={loginWithRedirect}
                    />
                </div>
            </section>
            <section className="overview">
                <h3 className="subject">支出管理を行い、貯金目標達成のモチベーションをあげましょう</h3>
                <div className="content">
                    <div>
                        <h4>SUM APPは<br />
                            <span>・　目標貯金額　</span><br />
                            <span>・　合計保有資産　</span><br />
                            <span>・　貯金達成目標日　</span><br />
                            <span>・　月予算　</span><br />
                            の４つを登録するだけですぐに使えます。
                        </h4>
                        <p>この４つを登録しなくても家計簿として使用できます。</p>
                    </div>
                    <div className="img_container">
                        <img src={HowToUse1} alt="overview1" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h4>後は日々の支出を登録するだけ！</h4>
                        <p>
                            お金の動きを家計簿のように記録していきましょう。<br/>
                            後は自動で総貯金額、月々の必要貯金額、月予算の残高等を計算します。
                        </p>
                    </div>
                    <div className="img_container">
                        <img src={Overview2} alt="overview2" />
                    </div>
                </div>
            </section>
            <section className="point">
                <div className="content">
                    <div>
                        <h3>POINT1</h3>
                        <h4>今月残りいくら使用できるかをすぐに確認できます</h4>
                        <p>
                            今月、残り後いくら使えるか？を一目で確認できます。<br />
                            自分で計算する必要がなく、簡単に残高が確認できるため<br />
                            浪費を抑えることができます。
                        </p>
                    </div>
                    <div className="img_container">
                        <img src={Point1} alt="point1" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h3>POINT2</h3>
                        <h4>一ヶ月の中で、使いすぎてしまった日を確認できます</h4>
                        <p>
                            棒グラフで日毎の支出を視覚化することで<br />
                            使いすぎてしまった日を一目で確認できます。
                        </p>
                    </div>
                    <div className="img_container">
                        <img src={Point2} alt="point2" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h3>POINT3</h3>
                        <h4>月々の支出をカテゴリごとに分析できます</h4>
                        <p>
                            支出の内訳をカテゴリごとに見ることで<br />
                            自分の浪費パターンを見つけることができます。<br />
                            節約できそうな所を見つけ出し、効率よく貯金を進めましょう。
                        </p>
                    </div>
                    <div className="img_container">
                        <img src={Point3} alt="point3" />
                    </div>
                </div>
                <div className="content">
                    <div>
                        <h3>POINT4</h3>
                        <h4>カテゴリを自分好みに編集できます</h4>
                        <p>
                            デフォルトで用意されているカテゴリだけでは足りない時は<br />
                            自由にカテゴリを追加することができます。<br />
                            より詳しく分類することで<br />
                            自分の浪費パターンをさらに詳しく見てみましょう。
                        </p>
                    </div>
                    <div className="img_container">
                        <img src={Point4} alt="point4" />
                    </div>
                </div>
            </section>
            <section className="how-to-use">
                <h1>SUM APPの使い方</h1>
                <div className="cards arrow">
                    <Card className="card">
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" style={{backgroundColor: "#F50057"}}>
                                1
                            </Avatar>
                            }
                            title="ログイン後、貯金目標等を設定します。"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={HowToUse1}
                            alt="how-to-use1"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                メールアドレスとパスワードでサインアップした後「目標貯金額」「合計保有資産」「貯金達成目標日」「月予算」を登録します。
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className="card">
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" style={{backgroundColor: "#F50057"}}>
                                2
                            </Avatar>
                            }
                            title="日々の支出を登録します。"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={HowToUse2}
                            alt="how-to-use2"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                毎日の支出情報を登録しましょう。一括登録機能と個別登録機能があるので場面によって使い分けができます。
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className="card">
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" style={{backgroundColor: "#F50057"}}>
                                3
                            </Avatar>
                            }
                            title="月別収支情報で月々の収支の傾向を掴みましょう。"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={HowToUse3}
                            alt="how-to-use3"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                毎日の収支情報をもとに自動で月毎の収支情報をまとめます。日別収支金額の棒グラフ、収支カテゴリ内訳の円グラフを活用して消費パターンを分析しましょう。
                            </Typography>
                        </CardContent>
                    </Card>
                    <Card className="card">
                        <CardHeader
                            avatar={
                            <Avatar aria-label="recipe" style={{backgroundColor: "#F50057"}}>
                                4
                            </Avatar>
                            }
                            title="お好みでカテゴリ、支払方法を追加しましょう。"
                        />
                        <CardMedia
                            component="img"
                            height="194"
                            image={HowToUse4}
                            alt="how-to-use4"
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary">
                                デフォルトで用意されている収支カテゴリ、支払方法では足りないと感じた時は、カスタムカテゴリ、カスタム支払方法を作成しましょう。ユーザー情報設定から簡単に作成することができます。
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
                <div className="pt-is-small">
                    <div className="how-to-close ">
                        <div className="point_box">
                            <h3>貯金目標を達成しましょう！</h3>
                        </div>
                        <img src={Happy} alt="happy" />
                        <Button
                            children="会員登録してはじめる"
                            color="secondary"
                            size="medium"
                            variant="contained"
                            onClick={loginWithRedirect}
                        />
                    </div>
                </div>
            </section>
            <section className="form pat">
                <h1>お問い合わせ</h1>
                <form action="">
                    <Input
                        name="email"
                        label="メールアドレス"
                        type="string"
                        onChange={handleInputChange}
                    />
                    <Input
                        name="name"
                        label="名前"
                        type="string"
                        onChange={handleInputChange}
                    />
                    <TextField
                        name="body"
                        label="お問い合わせ内容"
                        multiline
                        rows={8}
                        variant="outlined"
                        fullWidth
                        style={{margin: "20px 0px"}}
                        onChange={handleInputChange}
                    />
                    <Button
                        children="送信"
                        color="primary"
                        size="small"
                        variant="contained"
                        fullWidth
                        onClick={() => sendMail()}
                    />
                </form>
            </section>
            <footer>
                <div className="footer-img">
                    <div>
                        <p>貯金補助、家計簿アプリ</p>
                        <img style={{width: "20vw"}} src={FooterLogo} alt="logo" />
                        <Button
                            children="会員登録してはじめる"
                            color="secondary"
                            size="small"
                            variant="contained"
                            onClick={loginWithRedirect}
                        />
                        <button className="footer-btn">会員登録してはじめる</button>
                    </div>
                </div>
                <div className="footer">
                    <div>
                        <Link href="https://github.com/nobumitsu-1995" target="_blank">
                            <IconButton aria-label="delete" size="medium" >
                                <GitHubIcon fontSize="inherit" />
                            </IconButton>
                        </Link>
                        <p onClick={() => dispatch(push('/tech_info'))}>使用技術について</p>
                    </div>
                    <p>Copyright © 2021 nobumitsu masugata</p>
                </div>
            </footer>
        </>
    )
}

export default Home;