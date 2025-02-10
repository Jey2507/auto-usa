import AboutUsImmigration from "../../components/AboutUsImmigration/AboutUsImmigration";
import FaqImmigration from "../../components/FaqImmigration/FaqImmigration";
import OnePartPage from "../../components/OnePartPage/OnePartPage";

import ImmigrationServices from "../../components/ServicesImmigration/ServicesImmigration";
// import css from "./ImmigrationPage.module.css"
export default function ImmigrationPage() {
    return (
        <>
            <OnePartPage />
            <AboutUsImmigration />
            <ImmigrationServices/>
            <FaqImmigration/>
        </>
                
    )
}