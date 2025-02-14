import styles from './ServicesImmigration.module.css';

const services = [
    
    {
        icon: '📋',
        title: 'Імміграційний статус і легалізація',
        description: (
            <ul>
                <li>Які шляхи легалізації доступні в США?</li>
                <li>Який варіант може підійти у вашому конкретному випадку?</li>
                <li>Які кроки можна здійснити для узаконення свого перебування?</li>
            </ul>
        )
    },
    {
        icon: '🧾',
        title: 'Адаптація в США',
        description: (
            <ul>
                <li>Як отримати SSN (Social Security Number) і дозвіл на роботу?</li>
                <li>Як оформити TPS, продовжити його або подати заявку вперше?</li>
                <li>Як правильно оформити дозвіл на роботу (I-765)?</li>
            </ul>
        )
    },
    {
        icon: '🚗',
        title: 'Покупка автомобіля',
        description: (
            <ul>
                <li>Як купити авто з аукціону або у дилера?</li>
                <li>Як взяти авто в кредит без кредитної історії та SSN?</li>
            </ul>
        )
    },
    {
        icon: '💳',
        title: 'Кредитна історія в США',
        description: (
            <ul>
                <li>Як швидко побудувати кредитний рейтинг без помилок?</li>
                <li>Які кредитні картки взяти для швидкого росту кредитного рейтингу?</li>
                <li>Як використовувати кредитні картки без боргів?</li>
                <li>Як взяти авто в кредит навіть без SSN?</li>
                <li>Як почистити кредитну історію або списати частину боргів?</li>
                <li>Як швидко збільшити кредитний рейтинг?</li>
            </ul>
        )
    },
    {
        icon: '🏘️',
        title: 'Покупка нерухомості',
        description: (
            <ul>
                <li>Як взяти будинок або квартиру в кредит?</li>
                <li>Які програми доступні для купівлі житла?</li>
                <li>Які умови потрібно виконати, щоб отримати кредит на дім?</li>
            </ul>
        )
    },
    {
        icon: '🧑‍💻',
        title: 'Можливості заробітку і роботи',
        description: (
            <ul>
                <li>Які варіанти роботи або підробітку можна знайти?</li>
                <li>Де знайти віддалену роботу для іммігрантів?</li>
                <li>Які сфери відкриті для нових іммігрантів без досвіду та знання англійської?</li>
            </ul>
        )
    },
    {
        icon: '📈',
        title: 'Бізнес у США',
        description: (
            <ul>
                <li>Як відкрити свою компанію в США?</li>
                <li>Які існують типи компаній (LLC, S-Corp, C-Corp, Vice Corporation)?</li>
                <li>Як обрати оптимальний тип бізнесу для своєї сфери діяльності?</li>
                <li>Як створити Nonprofit-організацію та уникнути податків?</li>
                <li>Які сфери підходять під Nonprofit-організації?</li>
            </ul>
        )
    },
    {
        icon: '🏦',
        title: 'Банківські рахунки та картки',
        description: (
            <ul>
                <li>Як відкрити банківські рахунки та вибрати найкращий варіант?</li>
                <li>Як відкрити рахунок без SSN?</li>
                <li>Які банківські картки підходять для накопичення кредитного рейтингу?</li>
            </ul>
        )
    },
    {
        icon: '🏠',
        title: 'Оренда житла',
        description: (
            <ul>
                <li>Як правильно знайти і орендувати житло?</li>
                <li>Як знайти co-signer’а для підписання договору оренди?</li>
                <li>Як орендувати житло без кредитної історії?</li>
                <li>Як підтвердити свій дохід для оренди?</li>
            </ul>
        )
    },
    {
        icon: '✈️',
        title: 'Подорожі по США',
        description: (
            <ul>
                <li>Як економно подорожувати по США та іншим країнам?</li>
                <li>Де знайти знижки до 80% на оренду готелів?</li>
                <li>Як знаходити дешеві авіаквитки та економити на перельотах?</li>
                <li>Де шукати найкращі пропозиції на тури?</li>
                <li>Які бонусні програми та travel-хаки допоможуть зекономити?</li>
            </ul>
        )
    }
];
const ServicesImmigration = () => {
    return (
        <section className={styles.immigrationServicesSection}>
            <h1 className={styles.title}>Наші послуги імміграції</h1>
            
            <div className={styles.consultationText}>
                <p>
                    Консультація по імміграційному статусу, адаптації, бізнесу і життю в США
                </p>
                <p>
                    Якщо ви вже находитесь в США або тільки плануєте переїзд, важливо знати можливості легалізації, адаптації, фінансової стабільності, бізнесу і навіть подорожей. Я проводжу консультації, де розповідаю, які шляхи легалізації існують, як адаптуватися в США, влаштувати своє фінансове життя, відкрити бізнес і які можливості доступні для комфортного життя.
                </p>
                <p>
                    Важливо!<br />
                    Я не є адвокатом і не даю юридичних консультацій.<br />
                    Я – спеціаліст, який допомагає українцям приїхати в США, адаптуватися, отримати легальні документи, такі як Social Security, дозвіл на роботу, статус TPS, а також розібратися у варіантах легалізації, фінансових питаннях, бізнесі, житлі та подорожах.
                </p>
                <p>
                    Які питання я допоможу розібрати на консультації?
                </p>
            </div>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <div className={styles.serviceIcon}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <div className={styles.serviceDescription}>{service.description}</div>
                    </div>
                ))}
            </div>
            <button className={styles.ctaButton}>Дізнатись більше</button>
        </section>
    );
};


export default ServicesImmigration;