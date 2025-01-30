import css from "./PricesImmigration.module.css";

const pricingPlans = [
    {
        title: "Базовий план",
        price: "1000$",
        features: [
            "Консультація спеціаліста",
            "Огляд документів",
            "Підготовка заявки",
        ],
    },
    {
        title: "Стандартний план",
        price: "2500$",
        features: [
            "Консультація спеціаліста",
            "Огляд документів",
            "Підготовка та подання заявки",
            "Юридичний супровід",
        ],
    },
    {
        title: "Преміум план",
        price: "5000$",
        features: [
            "Персональний менеджер",
            "Повний супровід на всіх етапах",
            "Підготовка всіх документів",
            "Юридичний супровід",
            "Гарантія результату",
        ],
    },
];

export default function PricesImmigration() {
    return (
        <section className={css.pricingSection}>
            <h2 className={css.title}>Ціни на імміграційні послуги</h2>
            <div className={css.pricingGrid}>
                {pricingPlans.map((plan, index) => (
                    <div key={index} className={css.pricingCard}>
                        <h3 className={css.planTitle}>{plan.title}</h3>
                        <p className={css.planPrice}>{plan.price}</p>
                        <ul className={css.featureList}>
                            {plan.features.map((feature, i) => (
                                <li key={i} className={css.featureItem}>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                        <button className={css.ctaButton}>Обрати план</button>
                    </div>
                ))}
            </div>
        </section>
    );
}
