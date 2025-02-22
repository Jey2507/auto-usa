import css from './PricesImmigration.module.css';

const PricesImmigration = () => {
    const pricingPlans = [
        {
            title: "Заполнение только формы на TPS (I-821)",
            price: "$120", features: [],
        }, {
            title: "Заполнение только формы на рабочее разрешение (I-765)",
            price: "$100", features: [],
        }, {
            title: "Онлайн подача",
            price: "$200",
            features: ["Заполнение TPS ", "Разрешение на работу"],
        },
        {
            title: "Печатная подача с формой Fee Waiver",
            price: "$250",
            features: ["Заполнение TPS ", "Разрешение на работу"],

        },

    ];

    return (
        <section className={css.pricingSection}>
            <div className={css.textCenter}>
                <h2 className={css.title}>Стоимость моих услуг <span className={css.spanColor}>по заполнению</span> форм </h2>
            </div>
            <div className={css.gridContainer}>
                {pricingPlans.map((plan, index) => (
                    <div key={index} className={css.pricingCard}>
                       
                        <div className={css.cardHeader}>
                            <h3 className={css.cardTitle}>{plan.title}</h3>
                        </div>
                        <div className={css.cardContent}>
                            <ul className={css.featureList}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={css.featureItem}>- {feature}</li>
                                ))}
                            </ul>
                            

                           
                        </div>
                        <div className={css.containerPrice}>
 
                        <h3 className={css.cardPrice}>{plan.price}</h3>
                        <div className={css.centerBox}>
                            <a href="https://t.me/zoia_kibysh" target="_blank" className={css.ctaButton} rel="noreferrer">Выбрать</a>
                        </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricesImmigration;
