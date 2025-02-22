import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import css from "./FaqImmigration.module.css";

const faqs = [
    {
        question: "Кто может подать заявку на TPS?",
        answer: (<ul>
            <li>Приехали и находились в США до 16 августа 2023 года (если вы приехали позже этой даты, подать на TPS нельзя);</li>
            <li>Не выезжали из США на длительный срок после 16 августа 2023 года;</li>
            <li>   Соответствуют требованиям программы.</li></ul>)
    }, {
        question: "Как записаться на консультацию?",
        answer: (<ul>
            <li>Приехали и находились в США до 16 августа 2023 года (если вы приехали позже этой даты, подать на TPS нельзя);</li>
            <li>Не выезжали из США на длительный срок после 16 августа 2023 года;</li>
            <li>   Соответствуют требованиям программы.</li></ul>)
    }, {
        question: "Кто может подать заявку на TPS?",
        answer: (<ul>
            <li>Приехали и находились в США до 16 августа 2023 года (если вы приехали позже этой даты, подать на TPS нельзя);</li>
            <li>Не выезжали из США на длительный срок после 16 августа 2023 года;</li>
            <li>   Соответствуют требованиям программы.</li></ul>)
    }, {
        question: "Кто может подать заявку на TPS?",
        answer: (<ul>
            <li>Приехали и находились в США до 16 августа 2023 года (если вы приехали позже этой даты, подать на TPS нельзя);</li>
            <li>Не выезжали из США на длительный срок после 16 августа 2023 года;</li>
            <li>   Соответствуют требованиям программы.</li></ul>)
    }, {
        question: "Кто может подать заявку на TPS?",
        answer: (<ul>
            <li>Приехали и находились в США до 16 августа 2023 года (если вы приехали позже этой даты, подать на TPS нельзя);</li>
            <li>Не выезжали из США на длительный срок после 16 августа 2023 года;</li>
            <li>   Соответствуют требованиям программы.</li></ul>)
    },
    

];

export default function FaqImmigration() {
    const [activeIndexes, setActiveIndexes] = useState([]);

    const toggleFAQ = (index) => {
        if (activeIndexes.includes(index)) {
            setActiveIndexes(activeIndexes.filter((i) => i !== index));
        } else {
            setActiveIndexes([...activeIndexes, index]);
        }
    };

    return (
        <section className={css.faqSection}>
            <h2 className={css.title}>Часті питання про імміграцію</h2>
            <div className={css.accordion}>
                {faqs.map((faq, index) => (
                    <div key={index} className={css.faqItem}>
                        <button
                            onClick={() => toggleFAQ(index)}
                            className={css.faqQuestion}
                        >
                            {faq.question}
                            {activeIndexes.includes(index) ? (
                                <ChevronUp className={css.icon} />
                            ) : (
                                <ChevronDown className={css.icon} />
                            )}
                        </button>
                        <div
                            className={`${css.faqAnswer} ${activeIndexes.includes(index) ? css.show : ""
                                }`}
                        >
                            {faq.answer}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
