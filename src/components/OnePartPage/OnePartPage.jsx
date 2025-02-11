import styles from "../OnePartPage/OnePartPage.module.css";
// import { FaPassport, FaClipboardList, FaPhone } from "react-icons/fa";
// import tpsImage from "../assets/tps-image.jpg";
import immigration from "../../assets/images/immigration.jpg"

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
      <div>
          <h2>Даты подачи заявлений на TPS</h2>
          <ul>
            <li>✅ Первоначальная подача TPS (для тех, кто подаёт впервые) – до 19 апреля 2025 года.</li>
            <li>✅ Переподача и продление TPS (для тех, у кого статус уже есть) – до 18 марта 2025 года.</li>
          </ul>
          <p>Подача TPS: Электронно или в печатном виде</p>
      </div>

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
