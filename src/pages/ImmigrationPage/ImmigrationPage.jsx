// import AboutUsImmigration from "../../components/AboutUsImmigration/AboutUsImmigration";
import FaqImmigration from "../../components/FaqImmigration/FaqImmigration.jsx";
import PricesImmigration from "../../components/PricesImmigration/PricesImmigration.jsx";
import OnePartPage from "../../components/OnePartPage/OnePartPage.jsx";
import ImmigrationServices from "../../components/ServicesImmigration/ServicesImmigration.jsx";
export default function ImmigrationPage() {
    return (
        <>
            <OnePartPage/>
            <ImmigrationServices />
            <PricesImmigration/>
            <FaqImmigration/>
        </>
                
    )
}