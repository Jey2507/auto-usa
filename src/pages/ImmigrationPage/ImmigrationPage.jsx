import AboutUsImmigration from "../../components/AboutUsImmigration/AboutUsImmigration.jsx";
import FaqImmigration from "../../components/FaqImmigration/FaqImmigration.jsx";
import OnePartPage from "../../components/OnePartPage/OnePartPage.jsx";
import ReviewFoto from "../../components/ReviewFoto/ReviewFoto.jsx";
import ImmigrationServices from "../../components/ServicesImmigration/ServicesImmigration.jsx";
export default function ImmigrationPage() {
    return (
        <>
            <OnePartPage/>
            <ImmigrationServices />
            <AboutUsImmigration />
            <ReviewFoto />
            <FaqImmigration/>
        </>
                
    )
}