import styles from './AboutUsImmigration.module.css';

const AboutUsImmigration = () => {
    return (
        <section className={styles.aboutUsSection}>
            <h1 className={styles.title}>Иммиграция в США: Оформление TPS и Рабочего Разрешения для украинцев</h1>

            <p className={styles.description}>
                Если вы являетесь гражданином Украины и хотите легализовать свое пребывание в США, программа Temporary Protected Status (TPS) предоставляет такую возможность. Я помогаю в заполнении и подаче необходимых иммиграционных форм, включая I-821 (заявка на статус TPS) и I-765 (рабочее разрешение).
            </p>

            <div className={styles.missionSection}>
                <h2 className={styles.missionTitle}>Temporary Protected Status (TPS) для украинцев</h2>
                <p className={styles.missionDescription}>
                    TPS – это специальный иммиграционный статус, который позволяет украинцам временно находиться и работать в США, а также защищает от депортации.
                </p>
                <h3>Кто может подать заявку на TPS?</h3>
                <ul>
                    <li>Приехали и находились в США до 16 августа 2023 года (если вы приехали позже этой даты, подать на TPS нельзя);</li>
                    <li>Не выезжали из США на длительный срок после 16 августа 2023 года;</li>
                    <li>Соответствуют требованиям программы.</li>
                </ul>
                <h3>Даты подачи заявлений на TPS</h3>
                <ul>
                    <li>Первоначальная подача TPS (для тех, кто подаёт впервые) – до 19 апреля 2025 года.</li>
                    <li>Переподача и продление TPS (для тех, у кого статус уже есть) – до 18 марта 2025 года.</li>
                </ul>
                <h3>Подача TPS: Электронно или в печатном виде</h3>
                <p>
                    Вы можете подать заявление на TPS и рабочее разрешение двумя способами:
                </p>
                <ul>
                    <li>Электронная подача (Online Filing) – Платная:
                        <ul>
                            <li>Первоначальная подача TPS + разрешение на работу – $510</li>
                            <li>Продление TPS + разрешение на работу – $500</li>
                        </ul>
                    </li>
                    <li>Подача в печатном виде (Paper Filing) – Возможность подачи бесплатно:
                        <ul>
                            <li>Если у вас есть государственная социальная помощь, медицинская страховка Medicaid или вы безработны, вы можете подать заявку бесплатно.</li>
                        </ul>
                    </li>
                </ul>

                <h3>Стоимость моих услуг по заполнению форм</h3>
                <ul>
                    <li>Заполнение TPS + разрешение на работу (онлайн подача) – $200</li>
                    <li>Заполнение TPS + разрешение на работу (печатная подача с формой Fee Waiver) – $250</li>
                    <li>Заполнение только формы на TPS (I-821) – $120</li>
                    <li>Заполнение только формы на рабочее разрешение (I-765) – $100</li>
                </ul>

                <h3>Документы для подачи заявки на TPS (Форма I-821):</h3>
                <ul>
                    <li>Заграничный паспорт (все страницы, включая пустые);</li>
                    <li>ID (американское удостоверение личности) с двух сторон;</li>
                    <li>Social Security Number (SSN) (если есть);</li>
                    <li>Разрешение на работу (если есть, обе стороны карты);</li>
                    <li>Форма I-94 (подтверждение въезда в США);</li>
                    <li>Адрес проживания в США;</li>
                    <li>Номер телефона;</li>
                    <li>Email;</li>
                    <li>Город рождения;</li>
                    <li>Семейное положение;</li>
                    <li>Список стран, в которые вы путешествовали (с датами въезда/выезда и указанием иммиграционного статуса в этих странах);</li>
                    <li>Находитесь ли вы в иммиграционном процессе в США;</li>
                    <li>Были ли у вас проблемы с законом (аресты, судимости и т. д.).</li>
                </ul>

                <h3>Заявка на Рабочее Разрешение (Форма I-765)</h3>
                <p>Форма I-765 – это заявление на получение разрешения на работу в США. Подавать его могут украинцы, получающие статус TPS, находящиеся под программой Uniting for Ukraine (U4U), либо имеющие право на трудоустройство по другим основаниям.</p>
                <ul>
                    <li>Заграничный паспорт (все страницы);</li>
                    <li>Форма I-94 (подтверждение въезда в США);</li>
                    <li>Разрешение на работу (если есть, обе стороны карты);</li>
                    <li>ID (американское удостоверение личности) с двух сторон;</li>
                    <li>Social Security Number (SSN) (если есть);</li>
                    <li>Фотография 2х2 (электронный или печатный формат);</li>
                    <li>Адрес проживания в США;</li>
                    <li>Номер телефона;</li>
                    <li>Email;</li>
                    <li>Семейное положение;</li>
                    <li>Город и страна рождения.</li>
                </ul>

                <p>Я помогаю в правильном заполнении этих форм, чтобы вы смогли успешно подать документы и получить одобрение.</p>
            </div>

            <div className={styles.contactSection}>
                <h2 className={styles.contactTitle}>Связаться с нами</h2>
                <p className={styles.contactDescription}>
                    Вы можете связаться со мной через Телеграм, WhatsApp или по телефону. Также, если вы готовы подать документы, вы можете оплатить услуги прямо здесь и прикрепить все необходимые документы. Вся информация, которую вы предоставляете, будет храниться в строгой конфиденциальности.
                </p>
                <button className={styles.ctaButton}>Связаться с нами</button>
            </div>
        </section>
    );
};

export default AboutUsImmigration;
