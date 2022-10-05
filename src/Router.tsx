import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layout/DefaultLayout";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { Plans } from "./pages/Plans";
import { Portfolio } from "./pages/Portfolio";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/services" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
