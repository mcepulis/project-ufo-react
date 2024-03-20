import pic from './ufo.jpg';
import style from './Main.module.css';

function Main() {
    return (
        <main className={style.mainUfo}>
            <div className={style.mainLeft}>
                <h1 className={style.mainH1}>404</h1>
                <p className={style.mainP}>Page not found</p>
                <a className={style.mainA} href="/second-page">Second Page</a>
            </div>
            <img className={style.mainRight} src={pic} alt="Ufo lekste kuri vagia daiktus" />
        </main>
    );
}

export { Main };