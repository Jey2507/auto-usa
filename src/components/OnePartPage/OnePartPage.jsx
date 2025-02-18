import styles from "../OnePartPage/OnePartPage.module.css";
// import { FaPassport, FaClipboardList, FaPhone } from "react-icons/fa";
// import tpsImage from "../assets/tps-image.jpg";
import immigration from "../../assets/images/immigration.jpg"
import { FaPassport, FaIdCard, FaUserShield, FaBriefcase, FaPlane, FaHome, FaPhone, FaEnvelope, FaCity, FaUserFriends, FaGlobe, FaBalanceScale, FaExclamationTriangle } from "react-icons/fa";

const OnePartPage = () => {
  return (
    <section className={styles.tpsContainer}>
      <div className={styles.header}>
        <h1 className={styles.title}>Иммиграция в США:<br/> Оформление TPS и Рабочего Разрешения</h1>
        <div className={styles.boxHero}>
          <img className={styles.image} src={immigration} alt="immigration" />
          <p className={styles.subtitle}>
          Если вы являетесь гражданином Украины и хотите легализовать свое пребывание в США, программа Temporary Protected Status (TPS) предоставляет такую возможность.<br/><br/> Я помогаю в заполнении и подаче необходимых иммиграционных форм, включая I-821 (заявка на статус TPS) и I-765 (рабочее разрешение)
          </p>
        </div>
        <div className={styles.boxQue}>
          <h2>Temporary Protected Status (TPS) для украинцев</h2>
          <p>TPS – это специальный иммиграционный статус, который позволяет украинцам временно находиться и работать в США, а также защищает от депортации.
          </p>
        </div>
      </div>
      <div className={styles.boxFlex}>
        <div className={styles.bigBox}>
            <h2 className={styles.texttwo}>Даты подачи заявлений на TPS</h2>
            <ul>
              <li>✅ Первоначальная подача TPS (для тех, кто подаёт впервые) – до 19 апреля 2025 года.</li>
              <li>✅ Переподача и продление TPS (для тех, у кого статус уже есть) – до 18 марта 2025 года.</li>
            </ul>
            <br/>
            <p className={styles.descr}>Подача TPS:<br/>Электронно или в печатном виде</p>
            <p className={styles.descrQue}>Вы можете подать заявление на TPS и рабочее разрешение двумя способами:</p>
            <div className={styles.boxTwo}>
              <h3>1.Электронная подача (Online Filing) – Платная</h3>
              <ul>
                <li>❇️ Первоначальная подача TPS + разрешение на работу – $510</li>
                <li>❇️ Продление TPS + разрешение на работу – $500</li>
              </ul>
              <h3>2.Подача в печатном виде (Paper Filing) – Возможность подачи бесплатно</h3>
              <ul>
                <li>❇️ Если у вас есть государственная социальная помощь, медицинская страховка Medicaid или вы безработны, вы можете подать заявку бесплатно.</li>
                <li>❇️ Для этого необходимо заполнить форму I-912 (Fee Waiver), которая освобождает от уплаты всех сборов.</li>
              </ul>
            </div>
        </div>
        <div className={styles.boxTPS}>
            <h3 className={styles.textTPS}>Документы для подачи заявки на TPS (Форма I-821)</h3>
            <p className={styles.descrTPS}>Для оформления TPS необходимо предоставить:</p>
            <ul className={styles.listTPS}>
              <li><FaPassport /> Заграничный паспорт <br/>(все страницы, включая пустые)</li>
              <li><FaIdCard /> ID (американское удостоверение личности) с двух сторон</li>
              <li><FaUserShield /> Social Security Number (SSN) (если есть)</li>
              <li><FaBriefcase /> Разрешение на работу <br/>(если есть, обе стороны карты)</li>
              <li><FaPlane /> Форма I-94 <br/>(подтверждение въезда в США)</li>
              <li><FaHome /> Адрес проживания в США</li>
              <li><FaPhone /> Номер телефона</li>
              <li><FaEnvelope /> Email</li>
              <li><FaCity /> Город рождения</li>
              <li><FaUserFriends /> Семейное положение</li>
              <li><FaGlobe /> Список стран, в которые вы путешествовали</li>
              <li><FaBalanceScale /> Находитесь ли вы в иммиграционном процессе в США</li>
              <li><FaExclamationTriangle /> Были ли у вас проблемы с законом (аресты, судимости и т. д.)</li>
            </ul>
        </div>
      </div>
      {/* <div>
        <h3>Заявка на Рабочее Разрешение (Форма I-765)</h3>
        <p>Форма I-765 – это заявление на получение разрешения на работу в США. Подавать его могут украинцы, получающие статус TPS, находящиеся под программой Uniting for Ukraine (U4U), либо имеющие право на трудоустройство по другим основаниям.</p>
        <h3 className={styles.textTPS}>Документы для подачи I-765:</h3>
        <p className={styles.descrTPS}>Для подачи заявления на разрешение на работу необходимо предоставить:</p>
        <ul className={styles.listTPS}>
          <li><FaPassport /> Заграничный паспорт (все страницы)</li>
          <li><FaPlane /> Форма I-94 (подтверждение въезда в США)</li>
          <li><FaBriefcase /> Разрешение на работу (если есть, обе стороны карты)</li>
          <li><FaIdCard /> ID (американское удостоверение личности) с двух сторон</li>
          <li><FaUserShield /> Social Security Number (SSN) (если есть)</li>
          <li><FaCamera /> Фотография 2х2 (электронный или печатный формат)</li>
          <li><FaHome /> Адрес проживания в США</li>
          <li><FaPhone /> Номер телефона</li>
          <li><FaEnvelope /> Email</li>
          <li><FaUserFriends /> Семейное положение</li>
          <li><FaCity /> Город и страна рождения</li>
        </ul>
        <p>Я помогаю в правильном заполнении этих форм, чтобы вы смогли успешно подать документы и получить одобрение</p>
      </div> */}

      {/* <div className={styles.section}>
        <h2 className={styles.sectionTitle}>Temporary Protected Status (TPS) для украинцев</h2>
        <p>
          TPS – это специальный иммиграционный статус, который позволяет украинцам временно находиться
          и работать в США, а также защищает от депортации.
        </p>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaClipboardList /> Необходимые документы</h2>
        <ul className={styles.list}>
          <li><FaPassport /> Загранпаспорт</li>
          <li><FaClipboardList /> Заполненная форма I-821</li>
          <li><FaClipboardList /> Заполненная форма I-765</li>
        </ul>
      </div>

      <div className={styles.section}>
        <h2 className={styles.sectionTitle}><FaPhone /> Контакты</h2>
        <p>Свяжитесь со мной для консультации:</p>
        <div className={styles.buttons}>
          <a href="https://t.me/yourtelegram" className={styles.btnTelegram}>Telegram</a>
          <a href="https://wa.me/yourwhatsapp" className={styles.btnWhatsapp}>WhatsApp</a>
        </div>
      </div> */}
    </section>
  );
};

export default OnePartPage;
