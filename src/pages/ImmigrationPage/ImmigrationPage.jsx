import AboutUsImmigration from "../../components/AboutUsImmigration/AboutUsImmigration.jsx";
import FaqImmigration from "../../components/FaqImmigration/FaqImmigration.jsx";
import OnePartPage from "../../components/OnePartPage/OnePartPage.jsx";
import Review from "../../components/Review/Review.jsx";
import ImmigrationServices from "../../components/ServicesImmigration/ServicesImmigration.jsx";
export default function ImmigrationPage() {
    return (
        <>
            <OnePartPage/>
            <ImmigrationServices />
            <AboutUsImmigration />
            <Review />
            <FaqImmigration/>
        </>
                
    )
}