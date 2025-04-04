import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainLayout } from "../layouts/index.tsx";

import { Home } from "../pages/Home";
import { ErrorPage } from "../pages/404.tsx";
import { Students } from "../pages/Students";
import { Teachers } from "../pages/Teachers";
import { Subjects } from "../pages/Subject";
import { Groups } from "../pages/Groups";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/alumnos" element={<Students />} />
          <Route path="/docentes" element={<Teachers />} />
          <Route path="/grupos" element={<Groups />} />
          <Route path="/materias" element={<Subjects />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
