import style from '../css/Main.module.css';
import line from '../img/line.jpg';
import astronautas from '../img/astronautas.png';
function SecondMain() {
    return (
        <main className={style.containerMain}>
        <div className={style.columnLeft}>
            <h1 className={style.mainTitle}><span>404</span>Lost in space</h1>
            <img className={style.line} src={line} alt="line" />
            <p className={style.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga cupiditate a alias omnis pariatur tempore necessitatibus suscipit voluptatem modi! Ipsam.</p>
            <div className={style.btnList}>
                <a className={style.btn} href="/">Go home</a>
                <a className={`${style.btn} ${style['btn-white']}`} href="/">Back</a>
            </div>
        </div>
        <div className={style.columnRight}>
            <img className={style.mainImg} src={astronautas} alt="Astronautas raso zinute namo, nes isskrydo i kosmosa" />
        </div>
    </main>

    );
}

export { SecondMain };