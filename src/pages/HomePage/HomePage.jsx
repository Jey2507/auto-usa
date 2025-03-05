import { NavLink } from "react-router-dom";
import css from "../../pages/HomePage/HomePage.module.css"

export default function HomePage() {
    return (
        <section>
            <div className={css.mainBox}>
                <div>
                    <h1>Zoia Kibysh</h1>
                    <h2>Influencer | Marketer in USA</h2>
                </div>
                <p>Являюсь владельцем Marketing компании в США “Royal Business Solution”
                Специализируюсь в иммиграции и адаптации в США
                Являюсь экспертом по покупке и продаже автомобилей через автоаукционы США</p>
            </div>
            <div className={css.twoBox}>
                <h2>УСЛУГИ И НАПРАВЛЕНИЯ:</h2>
                <ul>
                    
                    <li>
                    <NavLink to="/imigration">
                        <h3>ИММИГРАЦИЯ</h3>
                        <p>Моя команда пошагово помогает с переездом в США, адаптации по приезду, получением всех необходимых документов и дальнейшей легализации</p>
                    </NavLink>
                    </li>

                    <li>
                        <NavLink to="/marketing">
                        <h3>МАРКЕТИНГ</h3>
                        <p>Моя команда эффективно упаковывает продукт/услуги, разрабатывает стратегию развития и успешно продвигает бизнеса на рынке США и СНГ, а также обучаем направлению СММ и маркетинг.
                        </p>
                        </NavLink>
                    </li>
                    
                    
                    <li>
                    <NavLink to="/auto">
                        <h3>АВТОАУКЦИОНЫ</h3>
                        <p>Покупаем и продаем автомобили через аукционы США, а также обучаем этому направлению!</p>
                    </NavLink>
                    </li>
                    <li>
                    <NavLink to="/business">
                        <h3>Online Business</h3>
                        <p>Больше информации об иммиграции и возможностях, которые мы предлагаем для открытия бизнеса</p>
                    </NavLink>
                    </li>
                </ul>
            </div>
        </section>
    )
}