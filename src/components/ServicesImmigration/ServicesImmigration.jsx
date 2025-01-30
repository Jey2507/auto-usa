import styles from './ServicesImmigration.module.css';

const services = [
    {
        icon: '🌍',
        title: 'Робочі візи',
        description: 'Ми допомагаємо отримати робочу візу для тих, хто хоче працювати за кордоном.',
    },
    {
        icon: '🛂',
        title: 'Візи для навчання',
        description: 'Отримання візи для навчання в закордонних університетах та навчальних закладах.',
    },
    {
        icon: '🏠',
        title: 'Постійне місце проживання',
        description: 'Ми допомагаємо з оформленням документів для отримання постійного місця проживання.',
    },
    {
        icon: '👨‍👩‍👧‍👦',
        title: 'Сімейна імміграція',
        description: 'Ми допоможемо вам оформити візу для возз’єднання з вашою родиною.',
    },
    {
        icon: '💼',
        title: 'Імміграція через бізнес',
        description: 'Допомагаємо отримати візу для бізнесменів та інвесторів.',
    },
    {
        icon: '📑',
        title: 'Консультації та супровід',
        description: 'Професійні консультації з усіх аспектів імміграції, а також повний супровід процесу.',
    },
];

const ServicesImmigration = () => {
    return (
        <section className={styles.immigrationServicesSection}>
            <h1 className={styles.title}>Наші послуги імміграції</h1>
            <p className={styles.description}>
                Ми пропонуємо широкий спектр послуг для тих, хто бажає емігрувати або отримати дозвіл на роботу, навчання чи проживання за кордоном. Наші спеціалісти допоможуть вам на кожному етапі процесу.
            </p>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem}>
                        <div className={styles.serviceIcon}>{service.icon}</div>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription}>{service.description}</p>
                    </div>
                ))}
            </div>
            <button className={styles.ctaButton}>Дізнатись більше</button>
        </section>
    );
};

export default ServicesImmigration;
