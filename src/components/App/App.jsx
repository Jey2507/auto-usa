import { lazy } from "react";
import { Routes, Route} from 'react-router-dom';
import '../App/App.module.css';

const MarketingPage = lazy(() => import("../../pages/MarketingPage/MarketingPage.jsx"))
const ImmigrationPage = lazy(() => import("../../pages/ImmigrationPage/ImmigrationPage.jsx"))
const AutoPage = lazy(() => import("../../pages/AutoPage/AutoPage.jsx"))
const NotFoundPage = lazy(() => import("../../pages/NotFoundPage/NotFoundPage"))

export default function App() {
  return (
      <Routes>
        <Route path='/' element={<MarketingPage />} />
        <Route path='/immigration' element={<ImmigrationPage />} />
        <Route path='/auto' element={<AutoPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
  );
}