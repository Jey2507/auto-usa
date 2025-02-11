// import AboutUsImmigration from "../../components/AboutUsImmigration/AboutUsImmigration";
import FaqImmigration from "../../components/FaqImmigration/FaqImmigration";
import PricesImmigration from "../../components/PricesImmigration/PricesImmigration";
import OnePartPage from "../../components/OnePartPage/OnePartPage";

import ImmigrationServices from "../../components/ServicesImmigration/ServicesImmigration";
export default function ImmigrationPage() {
    return (
        <>
            <OnePartPage />
            {/* <AboutUsImmigration /> */}
            <ImmigrationServices />
            <PricesImmigration/>
            <FaqImmigration/>
        </>
                
    )
}