import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import css from "./FaqAuto.module.css";

const faqs = [
    {
        question: "В течение какого времени я должен забрать авто с аукциона, если не использую вашу доставку?",
        answer: (
            <ul className={css.listAnswer}>
                <li>Манхейм: 3-5 дней, далее $25/день, включая выходные.</li>
                <li>Copart: 3-4 дня, далее $25/день, включая выходные.</li>
                <li>IAAI: 3-4 дня, далее $40/день, включая выходные.</li>
            </ul>
        ),
    },
    {
        question: "После выигранных торгов, какие документы я получу на руки?",
        answer: (
            <ul className={css.listAnswer}>
                <li>После полной оплаты аукцион отправляет документы нашей компании.</li>
                <li>Вы получите:
                    <ul>
                        <li>Title</li>
                        <li>Bill of sale</li>
                        <li>Odometer Disclosure Statement</li>
                        <li>Invoice</li>
                    </ul>
                </li>
                <li>С этим пакетом документов регистрируете авто в DMV.</li>
            </ul>
        ),
    },
    {
        question: "Сколько по времени ждать документы на машину после покупки?",
        answer: "От 1 до 3 недель, зависит от аукциона, почтовой службы и местоположения."
    },
    {
        question: "Цена доставки автомобиля из пункта А в пункт В, по США?",
        answer: "Зависит от расстояния, штата и размера машины. Для точного расчета свяжитесь с нами."
    },
    {
        question: "Где я могу посмотреть архив проданных автомобилей с аукционов?",
        answer: (<a href="https://bidfax.info" target="_blank">bidfax.info</a>)
    },
    {
        question: "Могу ли я самостоятельно забрать машину с аукциона?",
        answer: (
            <ul className={css.listAnswer}>
                <li>Manheim/Adesa: можно забрать, если авто на ходу.</li>
                <li>IAAI: можно забрать, если авто на ходу и с чистым тайтлом.</li>
                <li>Copart: забор только через товинг.</li>
            </ul>
        ),
    },
    {
        question: "Как проверить историю автомобиля?",
        answer: "Вы можете купить Carfax отчет за $20, который покажет обслуживание, ДТП и пробег."
    },
    {
        question: "Для чего нужен депозит?",
        answer: "Депозит 10% от максимальной ставки (минимум $1000) обязателен для участия в торгах."
    },
    {
        question: "Сколько нужно дополнительно заплатить на аукционах?",
        answer: (
            <ul className={css.listAnswer}>
                <li>6-25% Auction fee</li>
                <li>$200-$550 Dealer fee</li>
                <li>$100 Failing processing fee</li>
                <li>$40 Temporary Plate</li>
            </ul>
        ),
    },
    {
        question: "В чем разница Salvage/Clean/Rebuilt Title?",
        answer: (
            <ul className={css.listAnswer}>
                <li>Salvage title: авто с серьезными повреждениями.</li>
                <li>Clean title: авто без серьезных повреждений.</li>
                <li>Rebuilt title: восстановленное авто после аварии.</li>
            </ul>
        ),
    },
    {
        question: "Могу ли я заказать доставку машины?",
        answer: "Да, вы можете заказать доставку через нас или своего перевозчика."
    },
    {
        question: "Сроки полной оплаты автомобиля?",
        answer: "После выигрыша оплата в течение 2-х суток. Просрочка - штраф от $50 до 10% стоимости авто."
    },
    {
        question: "Могу ли я на дилерском аукционе Manheim вживую осмотреть авто?",
        answer: "Только с картой auction access. Доступ стоит $200 в месяц."
    },
    {
        question: "Могу ли я на IAAI/Copart вживую осмотреть авто перед покупкой?",
        answer: "Да, на большинстве локаций можно. Вход - $25."
    }
];

export default function FaqAuto() {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const toggleFAQ = (index) => {
        setActiveIndexes((prevIndexes) =>
            prevIndexes.includes(index)
                ? prevIndexes.filter((i) => i !== index)
                : [...prevIndexes, index]
        );
    };

    return (
        <section className={css.faqSection}>
            <h2 className={css.title}>У вас появились вопросы?</h2>
            <div className={css.accordion}>
                {faqs.map((faq, index) => (
                    <div key={index} className={css.faqItem}>
                        <button onClick={() => toggleFAQ(index)} className={css.faqQuestion}>
                            {faq.question}
                            {activeIndexes.includes(index) ? (
                                <div>
                                    <ChevronUp className={css.icon} />
                                </div>
                            ) : (
                                <div>
                                    <ChevronDown className={css.icon} />
                                </div>
                            )}
                        </button>
                        <div className={`${css.faqAnswer} ${activeIndexes.includes(index) ? css.show : ""}`}>{faq.answer}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
