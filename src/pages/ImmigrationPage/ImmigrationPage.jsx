import AboutUs from "../../components/AboutUsImmigration/AboutUsImmigration";
import FaqImmigration from "../../components/FaqImmigration/FaqImmigration";
import ImmigrationServices from "../../components/ServicesImmigration/ServicesImmigration";
import css from "./ImmigrationPage.module.css"
export default function ImmigrationPage() {
    return (
        <div className={css.container}>
            <AboutUs />
            <ImmigrationServices/>
        <FaqImmigration/></div>
    )
}