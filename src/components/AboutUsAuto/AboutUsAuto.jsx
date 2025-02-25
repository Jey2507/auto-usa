import css from './AboutUsAuto.module.css';
import { FaGavel, FaEye, FaTools, FaCarCrash, FaTruckLoading, FaSearch, FaWrench, FaExclamationTriangle } from "react-icons/fa";

const AboutUsAuto = () => {
    return (
        <section className={css.aboutUsAutoSection}>
            <div className={css.backCar}></div>
            <div className={css.boxText}>
                <h1><span className={css.spanColor}>Как выгодно купить машину</span> с онлайн аукционов США, <span className={css.spanColor}>через проверенного брокера</span></h1>
                <h2>ПОЛУЧИТЕ ПОШАГОВЫЙ ПЛАН</h2>
                <p>И сэкономить около 30-40% от рыночной стоимости авто</p>
                {/* <div className={css.centerBox}>
                            <a href="https://t.me/zoia_kibysh" target="_blank" className={css.ctaButton} rel="noreferrer">ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</a>
                </div> */}
            </div>
            <div className={css.divChoose}>
                <h2>Для кого?</h2>
                <ul>
                    <li>
                        <h3>Вам нужна машина для себя</h3>
                        <p>Вы только приехали и вам нужна надежная, экономная и не дорогая машина. Вы постоянно просите друзей помочь вам куда-то добраться или ездите на чужой машине, автобусе или такси.
                        Хотите максимально сэкономить на покупке хорошей машины.<br /><br />

                        Либо давно хотите обновить свой автопарк и сэкономить при этом от 40% рыночной стоимости машины.
                        Вы ездите на старой машине, она часто ломается и вы вкладываете в нее много сил, ресурсов и финансов.
                        </p>
                    </li>
                    <li>
                        <h3>Хотите зарабатывать на перепродаже машин</h3>
                        <p>Хотите начать выгодно покупать машины с аукционов и продавать с хорошим плюсом и минимальными усилиями.<br /><br />

                        Вы уже пробовали себя в этой сфере, но каждый раз снова задаетесь вопросом, какую машину лучше всего купить с аукциона, чтобы на ней хорошо заработать, при этом вложив минимум своих сил, энергии и ресурсов.
                        Вы часто попадаете на развод и остаетесь в минусах при покупке машины.
                        </p>
                    </li>
                </ul>
            </div>
            <div className={css.boxProblem}>
                <h3 className={css.textProblem}>
                    <span className={css.spanColor}>Большинство людей</span>, при покупке автомобиля, <span className={css.spanColor}>сталкиваются</span> с такими проблемами:
                </h3>
                <ul className={css.listProblem}>
                    <li>
                        <FaGavel />
                        <p>Самостоятельно пытаются сделать ставки на автомобили в онлайн аукционах, <span className={css.spanColor}>БЕЗ</span> необходимых лицензий, дающих право на покупку</p>
                    </li>
                    <li>
                        <FaEye /> 
                        <p><span className={css.spanColor}>НЕ</span> понимают на что обращать внимание, при покупке машины с аукциона, чтобы сэкономить около 20% от рыночной стоимости</p>
                    </li>
                    <li>
                        <FaTools /> 
                        <p><span className={css.spanColor}>НЕ</span> делают предварительную оценку ремонта машины, и это влияет на увеличение сроков и бюджета восстановления авто</p>
                    </li>
                    <li>
                        <FaCarCrash /> 
                        <p><span className={css.spanColor}>НЕ</span> изучают историю машины и технического состояния, что приводит к плохим последствиям в дальнейшем обслуживании, а также при будущей продаже</p>
                    </li>
                    <li>
                        <FaTruckLoading /> 
                        <p><span className={css.spanColor}>НЕ</span> могут самостоятельно забрать машину с аукциона, тем самым сталкиваются со штрафами за простои</p>
                    </li>
                    <li>
                        <FaSearch /> 
                        <p><span className={css.spanColor}>НЕТ</span> возможности перед покупкой осмотреть авто лично, получают с аукциона машины с проблемами (без ключей, документов и т.п.)</p>
                    </li>
                    <li>
                        <FaWrench /> 
                        <p>Купив машину, <span className={css.spanColor}>НЕ</span> знают где ее отремонтировать. Попадают к мастерам, которые делают не качественно и очень дорого</p>
                    </li>
                    <li>
                        <FaExclamationTriangle /> 
                        <p>Покупают машины через <span className={css.spanColor}>НЕ</span> проверенных “брокеров” и теряют деньги</p>
                    </li>
                </ul>
                </div>
        </section>
    );
};

export default AboutUsAuto;
