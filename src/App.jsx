import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./layout/AppLayout";

import CountryProvider from "./context/CountryProvider";
import CountrySelected from "./components/CountrySelected";

export default function App() {
  return (
    <CountryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppLayout />} />
          <Route path="/country/:code" element={<CountrySelected />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </CountryProvider>
  );
}
