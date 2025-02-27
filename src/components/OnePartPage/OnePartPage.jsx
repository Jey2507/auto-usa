import styles from "../OnePartPage/OnePartPage.module.css";
// import { FaPassport, FaClipboardList, FaPhone } from "react-icons/fa";
// import tpsImage from "../assets/tps-image.jpg";
import immigration from "../../assets/images/immigration.jpg"
import { FaPassport, FaIdCard, FaUserShield, FaBriefcase, FaPlane, FaHome, FaPhone, FaEnvelope, FaCity, FaUserFriends, FaGlobe, FaBalanceScale, FaExclamationTriangle, FaCamera } from "react-icons/fa";
import PricesImmigration from "../PricesImmigration/PricesImmigration";

const OnePartPage = () => {
  return (
    <section className={styles.tpsContainer}>
      <div className={styles.header}>
        <div className={styles.fon}>
          <h1 className={styles.title}>Иммиграция в США:<br /> Оформление TPS и Рабочего Разрешения</h1>
        </div>
        <div className={styles.containerHero}>
          <div className={styles.boxHeroQue}>
            <div className={styles.boxHero}>

              <p className={styles.subtitle}>
                Если вы являетесь гражданином Украины и хотите легализовать свое пребывание в США, программа Temporary Protected Status (TPS) предоставляет такую возможность.<br /><br /> Я помогаю в заполнении и подаче необходимых иммиграционных форм, включая I-821 (заявка на статус TPS) и I-765 (рабочее разрешение)
              </p>
            </div>
            <div className={styles.boxQue}>
              <h2>Temporary Protected Status <span className={styles.spanColor}>(TPS)</span> для украинцев</h2>
              <p>TPS – это специальный иммиграционный статус, который позволяет украинцам временно находиться и работать в США, а также защищает от депортации.
              </p>
            </div>

          </div>
          <img className={styles.image} src={immigration} alt="immigration" />
        </div>

      </div>
      <div className={styles.boxFlex}>
        <div className={styles.bigBox}>
          <h2 className={styles.texttwo}>Даты <span className={styles.spanFont}>подачи</span> заявлений на TPS</h2>
          <ul>
            <li>📍 Первоначальная подача TPS (для тех, кто подаёт впервые) – до 19 апреля 2025 года.</li>
            <li>📍 Переподача и продление TPS (для тех, у кого статус уже есть) – до 18 марта 2025 года.</li>
          </ul>
          <br />
          <p className={styles.descr}>Подача TPS:<br />Электронно или в печатном виде</p>
          <p className={styles.descrQue}>Вы можете подать заявление на TPS и рабочее разрешение двумя способами:</p>
          <div className={styles.boxTwo}>
            <h3>1.Электронная подача <span className={styles.spanFont}>(Online Filing)</span> – Платная</h3>
            <ul>
              <li>📍 Первоначальная подача TPS + разрешение на работу – $550 (FEE USCIS)</li>
              <li>📍 Продление TPS + разрешение на работу – $500 (FEE USCIS)</li>
            </ul>
            <h3>2.Подача в печатном виде <span className={styles.spanFont}>(Paper Filing)</span> – Возможность подачи бесплатно</h3>
            <ul>
              <li>📍 Если у вас есть государственная социальная помощь, медицинская страховка Medicaid или вы безработны, вы можете подать заявку бесплатно.</li>
              <li>📍 Для этого необходимо заполнить форму I-912 (Fee Waiver), которая освобождает от уплаты всех сборов.</li>
            </ul>
          </div>
        </div>
        <PricesImmigration />
        <div className={styles.boxTPS}>
          <h3 className={styles.textTPS}>Документы для подачи заявки на TPS <span className={styles.spanColor}>(Форма I-821)</span></h3>
          <ul className={styles.listTPS}>
            <li><FaPassport /> Заграничный паспорт <br />(все страницы, включая пустые)</li>
            <li><FaIdCard /> ID (американское удостоверение личности) с двух сторон</li>
            <li><FaUserShield /> Social Security Number (SSN) (если есть)</li>
            <li><FaBriefcase /> Разрешение на работу <br />(если есть, обе стороны карты)</li>
            <li><FaPlane /> Форма I-94 <br />(подтверждение въезда в США)</li>
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
      <div className={styles.boxAny}>
        <h3 className={styles.textHthree}>Заявка на Рабочее Разрешение <span className={styles.spanColor}>(Форма I-765)</span></h3>
        <p className={styles.descrForm}>Форма I-765 – это заявление на получение разрешения на работу в США. Подавать его могут украинцы, получающие статус TPS, находящиеся под программой Uniting for Ukraine (U4U), либо имеющие право на трудоустройство по другим основаниям.</p>
        <div className={styles.divDoc}>
          <div className={styles.textContainer}>
            <h3 className={styles.textTPS}>Документы для подачи <span className={styles.spanColor}>I-765</span></h3>
          </div>
          <ul className={styles.listTPSTwo}>
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
        </div>

        <p className={styles.descrHelp}>Я помогаю в правильном заполнении этих форм, чтобы вы смогли успешно подать документы и получить одобрение</p>

        <div className={styles.centerBox}>
          <a href="https://t.me/zoia_kibysh" target="_blank" className={styles.ctaButton} rel="noreferrer">Подробнее</a>
        </div>
      </div>
    </section>
  );
};

export default OnePartPage;
