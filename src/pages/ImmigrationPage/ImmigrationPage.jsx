import AboutUsImmigration from "../../components/AboutUsImmigration/AboutUsImmigration";
import FaqImmigration from "../../components/FaqImmigration/FaqImmigration";
import PricesImmigration from "../../components/PricesImmigration/PricesImmigration";
import ServicesImmigration from "../../components/ServicesImmigration/ServicesImmigration";
import css from "./ImmigrationPage.module.css"
export default function ImmigrationPage() {
    return (
        <div className={css.container}>
            <AboutUsImmigration />
            <ServicesImmigration />
            <PricesImmigration/>
            <FaqImmigration />
        </div>
    )
}