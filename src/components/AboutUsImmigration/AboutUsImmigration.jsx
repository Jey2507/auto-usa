import styles from './AboutUsImmigration.module.css';

const teamMembers = [
    {
        name: 'Олександр Іванов',
        role: 'Засновник',
        image: 'https://via.placeholder.com/150', // Замість цього можна вставити реальні зображення
    },
    {
        name: 'Марина Шевченко',
        role: 'Менеджер з імміграції',
        image: 'https://via.placeholder.com/150',
    },
    {
        name: 'Іван Коваль',
        role: 'Юрист',
        image: 'https://via.placeholder.com/150',
    },
];

const AboutUsImmigration = () => {
    return (
        <section className={styles.aboutUsSection}>
            <h1 className={styles.title}>Про нас</h1>
            <p className={styles.description}>
                Ми — команда професіоналів, яка спеціалізується на допомозі людям в процесі імміграції. Ми надаємо комплексні послуги для тих, хто хоче розпочати нове життя в іншій країні. Наша місія — зробити процес імміграції простим і доступним.
            </p>

            <div className={styles.missionSection}>
                <h2 className={styles.missionTitle}>Наша місія</h2>
                <p className={styles.missionDescription}>
                    Ми прагнемо допомогти нашим клієнтам здійснити мрії про нове життя за кордоном, надаючи високоякісні послуги, професіоналізм і підтримку на кожному етапі імміграційного процесу.
                </p>
            </div>

            <div className={styles.teamSection}>
                {teamMembers.map((member, index) => (
                    <div key={index} className={styles.teamMember}>
                        <img src={member.image} alt={member.name} />
                        <h3 className={styles.teamMemberName}>{member.name}</h3>
                        <p className={styles.teamMemberRole}>{member.role}</p>
                    </div>
                ))}
            </div>

            <button className={styles.ctaButton}> Зв'язатися з нами</button>
        </section>
    );
};

export default AboutUsImmigration;
