/* eslint-disable jsx-a11y/anchor-has-content */
import '../css/font-awesome.css'
import style from '../css/Main.module.css';

function SecondFooter() {
    return (
        <footer className={style.container}>
        <div className={style.socials}>
                <a className={`social-link fa fa-facebook-square ${style.fontAwesomeIcon}`} href="/"></a>
                <a className={`social-link fa fa-twitter ${style.fontAwesomeIcon}`} href="/"></a>
                <a className={`social-link fa fa-instagram ${style.fontAwesomeIcon}`} href="/"></a>
                <a className={`social-link fa fa-linkedin-square ${style.fontAwesomeIcon}`} href="/"></a>
        </div>
        <p className={style.copyrightText}>&copy; 2024 - All rights reserved</p>
    </footer>
    )
}

export { SecondFooter };