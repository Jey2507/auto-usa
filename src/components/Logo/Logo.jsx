import logo from "../../assets/images/logo.jpg";
import css from "../Logo/Logo.module.css"

export default function Logo() {
    return (
        <>
        <img className={css.logo} src={logo} alt="logo" />
        </>
    )
}