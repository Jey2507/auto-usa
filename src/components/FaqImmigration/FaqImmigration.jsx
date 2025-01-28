import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel
} from 'react-accessible-accordion';
import css from './FaqImmigration.module.css';

export default function FaqImmigration() {
    return (
        <section>
            <div className={css.container}>
                <h2 className={css.titleFaq} id="faq">FAQ</h2>

                <Accordion
                    allowMultipleExpanded
                    allowZeroExpanded
                    className={css.faqList}
                >
                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className={css.qwestions}>
                                <h3 className={css.titleItemList}>
                                    What programming languages are most often used in your project
                                </h3>
                                <span className={css.btnAnswer}>
                                    <svg
                                        className={css.iconAnswer}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path d="M12 16L6 10H18L12 16Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className={css.textItemList}>
                                In the field of web development, various technologies and programming languages are used.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>

                    <AccordionItem>
                        <AccordionItemHeading>
                            <AccordionItemButton className={css.qwestions}>
                                <h3 className={css.titleItemList}>
                                    What are the deadlines for the project
                                </h3>
                                <span className={css.btnAnswer}>
                                    <svg
                                        className={css.iconAnswer}
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path d="M12 16L6 10H18L12 16Z" fill="currentColor" />
                                    </svg>
                                </span>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className={css.textItemList}>
                                The terms of project implementation depend on a number of factors.
                            </p>
                        </AccordionItemPanel>
                    </AccordionItem>
                </Accordion>
            </div>
        </section>
    );
}
