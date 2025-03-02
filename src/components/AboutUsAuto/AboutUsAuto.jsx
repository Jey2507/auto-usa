import css from './AboutUsAuto.module.css';
import { FaGavel, FaEye, FaTools, FaCarCrash, FaTruckLoading, FaSearch, FaWrench, FaExclamationTriangle } from "react-icons/fa";
import { FaDollarSign, FaCarSide, FaShippingFast, FaHandsHelping } from "react-icons/fa";
import { FaFileAlt, FaSignature, FaMoneyCheckAlt, FaTruck, FaFileContract } from "react-icons/fa";
import { PiNumberCircleOneFill, PiNumberCircleTwoFill, PiNumberCircleThreeFill, PiNumberCircleFourFill, PiNumberCircleFiveFill, PiNumberCircleSixFill, PiNumberCircleSevenFill} from "react-icons/pi";
import { HiArrowDown } from "react-icons/hi";
import YouTubeVideo from '../YouTubeVideo/YouTubeVideo';
import PhotoOne from "../../assets/images/photoOne.jpeg";
import PhotoTwo from "../../assets/images/photoTwo.jpeg"
import PhotoThree from "../../assets/images/photoThree.jpeg"
import FaqAuto from '../FaqAuto/FaqAuto';
import { PhoneCall, Send } from 'lucide-react';

const AboutUsAuto = () => {
    return (
        <section className={css.aboutUsAutoSection}>
            <div className={css.backCar}></div>
            <div className={css.boxText}>
                <h1><span className={css.spanColor}>Как выгодно купить машину</span> с онлайн аукционов США, <span className={css.spanColor}>через проверенного брокера</span></h1>
                <h2>ПОЛУЧИТЕ ПОШАГОВЫЙ ПЛАН</h2>
                <p>И сэкономить около 30-40% от рыночной стоимости авто</p>
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
                <div className={css.boxListItem}>
                    <h2>Что <span className={css.spanColor}>вы получите</span>, пройдя консультацию</h2>
                    <ul>
                        <li>
                            <h3>Индивидуальный подход</h3>
                            <p>Специалист разберет вашу конкретную ситуацию, учтет все пожелания и направит на верное решение, в покупке автомобиля</p>
                        </li>
                        <li>
                            <h3>Стратегию успешной покупки авто</h3>
                            <p>Вы разберете, каких ошибок стоит избегать и на что важно обращать внимание, чтобы совершить успешную покупку</p>
                        </li>
                        <li>
                            <h3>Четкое руководство к действию</h3>
                            <p>Поймете что необходимо сделать пошагово, чтобы сэкономить свое время, финансы и приобрести машину, исходя из ваших потребностей</p>
                        </li>
                        <li>
                            <h3>Ответы на ваши вопросы</h3>
                            <p>Вы сможете задать интересующие вас вопросы и получить грамотные ответы на них</p>
                        </li>        
                    </ul>
                    <div className={css.centerBox}>
                            <a href="https://t.me/zoia_kibysh" target="_blank" className={css.ctaButton} rel="noreferrer">ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</a>
                     </div>
                </div>
                <div className={css.divAutos}>
                    <h2>Что такое <span className={css.spanColor}>аукцион</span> и как он работает?</h2>
                    <p className={css.descrAuto}><span className={css.spanColor}>Автомобильный аукцион</span> представляет собой онлайн рынок, где каждый желающий получает возможность оценить транспорт, и приобрести машину по привлекательной цене. На проверенных автоаукционах размещаются объявления о продаже автомобилей после дтп, но также есть возможность найти предложения с минимальными повреждениями либо совсем без повреждений. В интернете функционирует ряд сайтов, которые дают опцию сформировать заказ машины согласно индивидуальным параметрам будущего владельца</p>
                    <p className={css.descrAutoTwo}>Вы <span className={css.spanColor}>сможете обрести уверенность</span> в том, что будущий автомобиль сможет радовать вас долгие годы.<br /> Важно лишь грамотно отнестись к процедуре выбора площадки, которая предлагает подобную услугу. Покупка авто с аукциона всегда несет за собой определенные риски (правильная документация, техническое состояние машины и другие нюансы), но лишь доверяя проверенному брокеру, они будут минимальными</p>
                    <h2>В чем <span className={css.spanColor}>преимущества</span> покупки авто на аукционе?</h2>
                    <h3>Наша главная цель — <span className={css.spanColor}>сделать для вас процесс покупки автомобиля быстрым и доступным</span></h3>

                    <ul>
                    <li>
                        <div className={css.advantageItem}>
                        <FaDollarSign className={css.advantageIcon} />
                        <h4>Экономия средств</h4>
                        </div>
                        <p>
                        Доступность в плане ценовой политики. Даже с учетом доставки, постановки на учет и дальнейшего ремонта 
                        вы можете обрести существенную экономию, и получить качественный автомобиль.
                        </p>
                    </li>
                    
                    <li>
                        <div className={css.advantageItem}>
                        <FaCarSide className={css.advantageIcon} />
                        <h4>Преимущество выбора</h4>
                        </div>
                        <p>
                        Огромное преимущество разного выбора автотранспорта, на аукционах в США. Вы можете приобрести автомобиль, 
                        как после ДТП, так и совсем без повреждений.
                        </p>
                    </li>
                    
                    <li>
                        <div className={css.advantageItem}>
                        <FaShippingFast className={css.advantageIcon} />
                        <h4>Скорость доставки</h4>
                        </div>
                        <p>
                        Выбрать транспортное средство можно в считанные дни, особенно если воспользоваться сервисом нашей компании. 
                        После подбора и покупки, доставка осуществляется в короткие сроки.
                        </p>
                    </li>
                    
                    <li>
                        <div className={css.advantageItem}>
                        <FaHandsHelping className={css.advantageIcon} />
                        <h4>Услуги под ключ</h4>
                        </div>
                        <p>
                        Не нужно ни о чем беспокоиться, если вы обратились к нам. Достаточно лишь указать ваши пожелания, 
                        и специалист поможет сделать выбор в пользу лучшего транспортного средства.
                        </p>
                    </li>
                    </ul>
                </div>
                <div className={css.boxAbout}>
                    <h2>О нас</h2>
                    <h3>Компания <span className={css.spanColorTwo}>Autobound LLC</span> на рынке с 2018 года</h3>
                    <p>Более <span className={css.spanColor}>2500</span> выигранных машин для клиентов</p>
                    <p>Более <span className={css.spanColor}>500</span> довольных клиентов за последний год</p>
                    <p>Более <span className={css.spanColor}>4-х лет</span> радуем вас качественным сервисом</p>
                </div>
                <div className={css.containerHelp}>
                    <h2>Почему <span className={css.spanColor}>вы можете</span> нам доверять?</h2>
                    <p>Мы гарантируем:</p>
                    <ul>
                        <li><span className={css.spanNumber}>1</span> <span className={css.spanColor}>Ответственный подход</span> к делу, обратную связь и качественную консультацию до момента покупки машины</li>
                        <li><span className={css.spanNumber}>2</span> <span className={css.spanColor}>Живую связь</span> по телефону, во время покупки машины на аукционе</li>
                        <li><span className={css.spanNumber}>3</span> <span className={css.spanColor}>Удобство оплаты.</span> Вам не нужно самостоятельно ехать на аукцион и оплачивать свою машину<br /><br />
                            <span className={css.spanMini}>Все можно сделать в режиме онлайн по Zelle, Wire transfer, Cash app, Venmo, и без потери вашего времени</span>
                        </li>
                    </ul>
                </div>
                <div className={css.boxBuy}>
                    <h2>Наши услуги:</h2>
                    <p className={css.descrBuy}>Выберите подходящий вам вариант</p>
                    <ul className={css.listBuy}>
                        <li className={css.itemBuy}>
                            <h3>История машины Carfax</h3>
                            <p>$20 USD</p>
                            <ul>
                                <li>- PDF файл с информацией о техническом обслуживании и всей историей машины</li>
                            </ul>
                            <div className={css.centerBox}>
                                    <a href="https://t.me/zoia_kibysh" target="_blank" className={css.ctaButton} rel="noreferrer">УЗНАТЬ ПОДРОБНЕЕ</a>
                            </div>
                        </li>
                        <li className={css.itemBuy}>
                            <h3>Покупка машины с аукциона
                            IAA/Copart</h3>
                            <p>От $200 USD</p>
                            <ul>
                                <li>- История машины из Carfax (лимит 1-2)</li>
                                <li>- Консультация по выбору машины, на что обращать внимание при выборе определенного типа машины, проблем и ремонта</li>
                                <li>- Живая связь по телефону во время аукциона</li>
                            </ul>
                            <div className={css.centerBox}>
                                    <a href="https://t.me/zoia_kibysh" target="_blank" className={css.ctaButton} rel="noreferrer">УЗНАТЬ ПОДРОБНЕЕ</a>
                            </div>
                        </li>
                        <li className={css.itemBuy}>
                            <h3>Покупка машины с дилерских аукционов
                            Manheim/Adessa/т.п</h3>
                            <p>от $300 USD</p>
                            <ul>
                                <li>- История машины из Carfax (лимит 1-2)</li>
                                <li>- Консультация по выбору машины, на что обращать внимание при выборе определенного типа машины, проблем и ремонта</li>
                                <li>- Живая связь по телефону во время аукциона</li>
                            </ul>
                            <div className={css.centerBox}>
                                    <a href="https://t.me/zoia_kibysh" target="_blank" className={css.ctaButton} rel="noreferrer">УЗНАТЬ ПОДРОБНЕЕ</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={css.stepsDiv}>
                    <h2>Этапы <span className={css.spanColor}>сотрудничества</span> с нами</h2>
                    <p className={css.des}>7 простых шагов</p>
                    <ul>
                        <li className={css.itemSteps}>
                            <div className={css.boxIcons}>
                                <FaFileAlt />
                                <h3>Короткая анкета и консультация</h3>
                            </div>
                            <p>После заполнения анкеты, с вами свяжется наш специалист и ответит на все вопросы...</p>
                            <div className={css.boxPoz}>
                                <PiNumberCircleOneFill />
                            </div>
                        </li>
                        <li className={css.arrowDown}>
                        <HiArrowDown />
                        </li>
                        <li className={css.itemSteps}>
                            <div className={css.boxIcons}>
                                <FaSignature />
                                <h3>Подписание договора</h3>
                            </div>
                            <p>Специалист подготовит для вас договор, где будут вписаны все пункты нашего с вами сотрудничества...</p>
                            <div className={css.boxPoz}>
                                <PiNumberCircleTwoFill />
                            </div>
                        </li>
                        <li className={css.arrowDown}>
                        <HiArrowDown />
                        </li>
                        <li className={css.itemSteps}>
                            <div className={css.boxIcons}>
                                <FaDollarSign />
                                <h3>Внесение депозита</h3>
                            </div>
                            <p>После подписания договора вы вносите депозит, в размере 10% от вашей максимальной ставки...</p>
                            <div className={css.boxPoz}>
                                <PiNumberCircleThreeFill />
                            </div>
                        </li>
                        <li className={css.arrowDown}>
                        <HiArrowDown />
                        </li>
                        <li className={css.itemSteps}>
                            <div className={css.boxIcons}>
                                <FaGavel />
                                <h3>Покупка вашего авто на аукционе</h3>
                            </div>
                            <p>Мы играем автомобиль на аукционе, по той ставке которую обсудили заранее...</p>
                            <div className={css.boxPoz}>
                                <PiNumberCircleFourFill />
                            </div>
                        </li>
                        <li className={css.arrowDown}>
                        <HiArrowDown />
                        </li>
                        <li className={css.itemSteps}>
                            <div className={css.boxIcons}>
                                <FaMoneyCheckAlt />
                                <h3>Полная оплата</h3>
                            </div>
                            <p>После выигрыша, мы выставляем вам счет на полную оплату, который нужно оплатить в течении 3-х суток...</p>
                            <div className={css.boxPoz}>
                                <PiNumberCircleFiveFill />
                            </div>
                        </li>
                        <li className={css.arrowDown}>
                        <HiArrowDown />
                        </li>
                        <li className={css.itemSteps}>
                            <div className={css.boxIcons}>
                                <FaTruck />
                                <h3>Доставка автомобиля</h3>
                            </div>
                            <p>После полной оплаты вам необходимо забрать автомобиль с аукциона в течении 3-4-х дней...</p>
                            <div className={css.boxPoz}>
                                <PiNumberCircleSixFill />
                            </div>
                        </li>
                        <li className={css.arrowDown}>
                        <HiArrowDown />
                        </li>
                        <li className={css.itemSteps}>
                            <div className={css.boxIcons}>
                                <FaFileContract />
                                <h3>Документы</h3>
                            </div>
                            <p>В течении 1-3 недель вы получаете готовый пакет документов на свой почтовый адрес...</p>
                            <div className={css.boxPoz}>
                                <PiNumberCircleSevenFill />
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={css.infoBox}>
                    <h2>Что <span className={css.spanColor}>говорят</span> о нас клиенты</h2>
                    <ul className={css.listVideo}>
                        <li>
                            <YouTubeVideo videoId={"OHBtKvyrNSU"}/>
                        </li>
                        <li>
                            <YouTubeVideo videoId={"SHticyj-9Kg"}/>
                        </li>
                    </ul>
                    <img className={css.image} src={PhotoOne} alt="One" />
                    <img className={css.image} src={PhotoTwo} alt="Two" />
                    <img className={css.image} src={PhotoThree} alt="Three" />
                    <p className={css.descrStatic}>По статистике, каждый кто хочет приобрести автомобиль с аукциона, 
                        перебирает сотни вариантов, тратит времени на изучение машин
                        и допускает множество ошибок, прежде чем находит то, что ему нужно!</p>
                    <h3 className={css.titleQwe}>ЕСТЬ ЛИ У ВАС ДОСТАТОЧНО <span className={css.spanColor}>РЕСУРСОВ, ВРЕМЕНИ, ДЕНЕГ И ЗНАНИЙ</span>, ЧТОБЫ ДЕЛАТЬ ВСЕ САМОСТОЯТЕЛЬНО?</h3>
                    <p className={css.descrQwe}>
                        Готовы ли вы потратить кучу времени
                        на самостоятельные пробы и ошибки?</p>
                    <p className={css.descrAnsw}>Если не готовы, то ваш следующий шаг - это</p>
                    <div className={css.centerBox}>
                        <a href="https://t.me/zoia_kibysh" target="_blank" className={css.ctaButton} rel="noreferrer">ПОЛУЧИТЬ БЕСПЛАТНУЮ КОНСУЛЬТАЦИЮ</a>
                    </div>
                </div>
                <FaqAuto />
                <div className={css.contactSection}>
                    <h2 className={css.contactTitle}>Наши <span className={css.spanColor}>контакты</span></h2>
                    <p className={css.contactText}>Смело пишите и звоните нам по любым <span className={css.spanColor}>вопросам</span></p>
                    
                    <div className={css.contactInfo}>
                        <p className={css.contactPhone}>+1 360 953 9257</p>
                        <p className={css.contactEmail}>autoboundllc.usa@gmail.com</p>
                    </div>
                    
                    <div className={css.contactAddress}>
                        <p>700N Hayden Island Dr Ste #276</p>
                        <p>Portland, OR, 97217</p>
                    </div>
                    
                    <div className={css.contactIcons}>
                        <a href="https://t.me/zoia_kibysh">
                            <Send />
                        </a>
                        <a href="https://invite.viber.com/?g2=AQAXDwpv8vbDzlDZEUNsDdhjbrrgYoGLN79UY5Fb8vmr3IU2r04Qa0hTf12i6nei&lang=uk" 
                            target="_blank" 
                            rel="noopener noreferrer" >
                            <PhoneCall />
                        </a>
                    </div>
                </div>

        </section>
    );
};

export default AboutUsAuto;
