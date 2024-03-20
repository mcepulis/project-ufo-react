import style from '../css/Main.module.css';
import logo from '../img/logo.png';
function SecondHeader() {
    const active = true;
    return (
    <header className={style.container}>
        <img className={style.logo} src={logo} alt="Logo" />
        <nav className={style.mainNav}>
            <a className={`${style.navLink} ${active ? style.active : ''}`} href="/">About</a>
            <a className={style.navLink} href="/">Portfolio</a>
            <a className={style.navLink} href="/">Job</a>
            <a className={style.navLink} href="/">Contact</a>
        </nav>
    </header>
    )
}
export { SecondHeader };