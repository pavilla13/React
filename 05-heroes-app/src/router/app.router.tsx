import AdminLayout from "@/admin/layouts/AdminLayout";
// import AdminPage from "@/admin/pages/AdminPage";
import HeroesLayout from "@/heroes/layouts/HeroesLayout";
import HeroPage from "@/heroes/pages/hero/HeroPage";
import HomePage from "@/heroes/pages/home/HomePage";
import { lazy } from "react";
// import SearchPage from "@/heroes/pages/search/SearchPage";
import { createBrowserRouter } from "react-router";

const SearchPage = lazy(() => import("@/heroes/pages/search/SearchPage"));
const AdminPage = lazy(() => import("@/admin/pages/AdminPage"));

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <HeroesLayout />,
    children: [
      {
        // Esta primera ruta, al ser la primera que se monta, se dice
        // que es la ruta index.
        index: true,
        element: <HomePage />,
      },
      {
        path: "heroes/1",
        element: <HeroPage />,
      },
      {
        path: "search",
        element: <SearchPage />,
      },
    ],
  },

  {
    path: "",
    element: <AdminLayout />,
    children: [
      {
        path: "/admin",
        element: <AdminPage />,
      },
    ],
  },
]);
