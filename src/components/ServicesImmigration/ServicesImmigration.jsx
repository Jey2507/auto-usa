import { useEffect, useState, useRef } from "react";
import styles from "./ServicesImmigration.module.css";

const services = [
    {
        title: "Иммиграционный статус и легализация",
        description: (
            <ul>
                <li>Какие пути легализации доступны в США?</li>
                <li>Какой вариант может подойти в вашем конкретном случае?</li>
                <li>Какие шаги можно предпринять, чтобы узаконить своё пребывание?</li>
            </ul>
        )
    },
    {
        title: "Адаптация в США",
        description: (
            <ul>
                <li>Как получить SSN (Social Security Number) и разрешение на работу?</li>
                <li>Как оформить TPS, продлить его или подать заявку впервые?</li>
                <li>Как правильно оформить разрешение на работу (I-765)?</li>
            </ul>
        )
    },
    {
        title: "Покупка автомобиля",
        description: (
            <ul>
                <li>Как купить авто с аукциона или у дилера?</li>
                <li>Как взять авто в кредит без кредитной истории и SSN?</li>
            </ul>
        )
    },
    {
        title: "Покупка недвижимости",
        description: (
            <ul>
                <li>Как взять дом или квартиру в кредит?</li>
                <li>Какие программы доступны для покупки жилья?</li>
                <li>Какие условия нужно выполнить, чтобы получить кредит на дом?</li>
            </ul>
        )
    },
    {
        title: "Возможности заработка и работы",
        description: (
            <ul>
                <li>Какие варианты работы или подработки можно найти?</li>
                <li>Где найти удалённую работу для иммигрантов?</li>
                <li>Какие сферы открыты для новых иммигрантов без опыта и знания английского?</li>
            </ul>
        )
    },
    {
        title: "Бизнес в США",
        description: (
            <ul>
                <li>Как открыть свою компанию в США?</li>
                <li>Какие существуют типы компаний (LLC, S-Corp, C-Corp)?</li>
                <li>Как выбрать оптимальный тип бизнеса для своей сферы деятельности?</li>
            </ul>
        )
    },
    {
        title: "Банковские счета и карты",
        description: (
            <ul>
                <li>Как открыть банковский счёт и выбрать лучший вариант?</li>
                <li>Как открыть счёт без SSN?</li>
                <li>Какие банковские карты подходят для накопления кредитного рейтинга?</li>
            </ul>
        )
    },
    {
        title: "Аренда жилья",
        description: (
            <ul>
                <li>Как правильно найти и арендовать жильё?</li>
                <li>Как найти co-signer'а для подписания договора аренды?</li>
                <li>Как арендовать жильё без кредитной истории?</li>
                <li>Как подтвердить свой доход для аренды?</li>
            </ul>
        )
    },
    {
        title: "Путешествия по США",
        description: (
            <ul>
                <li>Как экономно путешествовать по США и другим странам?</li>
                <li>Где найти скидки до 80% на аренду отелей?</li>
                <li>Как находить дешёвые авиабилеты и экономить на перелётах?</li>
            </ul>
        )
    },
    {
        title: "Кредитная история в США",
        description: (
            <ul>
                <li>Как быстро построить кредитный рейтинг без ошибок?</li>
                <li>Какие кредитные карты взять для быстрого роста кредитного рейтинга?</li>
                <li>Как использовать кредитные карты без долгов?</li>
            </ul>
        )
    },
];

const ServicesImmigration = () => {
    const [heights, setHeights] = useState([]);
    const [descHeights, setDescHeights] = useState([]);
    const cardRefs = useRef([]);
    const descRefs = useRef([]);

    useEffect(() => {
        const updateHeights = () => {
            if (cardRefs.current.length > 0) {
                const screenWidth = window.innerWidth;
                const itemsPerRow = screenWidth >= 1439 ? 3 : 2; // Визначаємо кількість колонок у рядку
                let newHeights = [...heights];

                for (let i = 0; i < cardRefs.current.length; i += itemsPerRow) {
                    const rowElements = cardRefs.current.slice(i, i + itemsPerRow);
                    const maxHeight = Math.max(...rowElements.map(ref => ref?.offsetHeight || 0));

                    rowElements.forEach((_, j) => {
                        if (i + j < newHeights.length) {
                            newHeights[i + j] = maxHeight;
                        }
                    });
                }

                setHeights(newHeights);
            }
        };

        updateHeights();
        window.addEventListener("resize", updateHeights);
        return () => window.removeEventListener("resize", updateHeights);
    }, [services.length]);

    return (
        <section className={styles.immigrationServicesSection}>
            <h2 className={styles.title}>Консультация по иммиграционному <span className={styles.spanText}>статусу, адаптации, бизнесу и жизни</span> в США</h2>
            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceItem} ref={(el) => (cardRefs.current[index] = el)} style={{ height: heights[index] || "auto" }}>
                        <h3 className={styles.serviceTitle}>{service.title}</h3>
                        <p className={styles.serviceDescription} ref={(el) => (descRefs.current[index] = el)} style={{ height: descHeights[index] || "auto" }}>
                            {service.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesImmigration;