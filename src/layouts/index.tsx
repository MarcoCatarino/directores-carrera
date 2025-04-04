import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export const MainLayout = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1 max-w-screen overflow-x-hidden">
        <div id="content-slot" className="px-16 py-8">
          <Outlet /> {/* SLOT */}
        </div>
        <Footer className="mt-auto" />
      </div>
    </div>
  );
};
