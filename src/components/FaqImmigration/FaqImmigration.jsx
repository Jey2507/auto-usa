import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import css from "./FaqImmigration.module.css";

const faqs = [
    {
        question: "Як почати процес імміграції?",
        answer:
            "Першим кроком є подача заявки на отримання дозволу на проживання. Зверніться до наших спеціалістів для отримання допомоги.",
    },
    {
        question: "Які документи потрібні?",
        answer:
            "Зазвичай потрібні паспорт, документи про освіту та підтвердження фінансової стабільності.",
    },
    {
        question: "Як довго триває процес?",
        answer:
            "Процес може тривати від кількох місяців до року залежно від країни та типу візи.",
    }, {
        question: "Які документи потрібні?",
        answer:
            "Зазвичай потрібні паспорт, документи про освіту та підтвердження фінансової стабільності.",
    },
    {
        question: "Як довго триває процес?",
        answer:
            "Процес може тривати від кількох місяців до року залежно від країни та типу візи.",
    }, {
        question: "Які документи потрібні?",
        answer:
            "Зазвичай потрібні паспорт, документи про освіту та підтвердження фінансової стабільності.",
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
