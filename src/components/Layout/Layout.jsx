import { Suspense } from "react";

import Loader from "../Loader/Loader.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import Container from "../Container/Container.jsx";

export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <Container>      
        <Suspense fallback={<Loader />}>
          {children}
        </Suspense>
      </Container>
    </div>
  );
}