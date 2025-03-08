import { lazy} from "react";
import { Routes, Route } from "react-router-dom";
import "../App/App.module.css";
import Layout from "../Layout/Layout.jsx";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage.jsx"));
const MarketingPage = lazy(() => import("../../pages/MarketingPage/MarketingPage.jsx"));
const ImmigrationPage = lazy(() => import("../../pages/ImmigrationPage/ImmigrationPage.jsx"));
const OnlineBusiness = lazy(() => import("../../pages/OnlineBusiness/OnlineBusiness.jsx"));
const AutoPage = lazy(() => import("../../pages/AutoPage/AutoPage.jsx"));
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"));

export default function App() {
  return (
    <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/imigration" element={<ImmigrationPage />} />
          <Route path="/marketing" element={<MarketingPage />} />
          <Route path="/business" element={<OnlineBusiness />} />
          <Route path="/auto" element={<AutoPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </Layout>
  );
}
