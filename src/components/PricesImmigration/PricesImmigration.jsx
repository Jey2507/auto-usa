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
            title: "онлайн подача",
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
                <h2 className={css.title}>Стоимость моих услуг по заполнению форм </h2>
            </div>
            <div className={css.gridContainer}>
                {pricingPlans.map((plan, index) => (
                    <div key={index} className={css.pricingCard}>
                        <div className={css.cardHeader}>
                            <h3 className={css.cardTitle}>{plan.title}</h3>
                        </div>
                        <div className={css.cardContent}>
                            <h3 className={css.cardPrice}>{plan.price}</h3>
                            <ul className={css.featureList}>
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={css.featureItem}>- {feature}</li>
                                ))}
                            </ul>
                            <button className={css.selectButton}>Select Plan</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PricesImmigration;
