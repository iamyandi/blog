import { Routes, Route } from "react-router-dom";
import { Layout } from "@/components/Layout";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";
import HomePage from "@/pages/HomePage/HomePage";
import CategoryPage from "@/pages/CategoryPage/CategoryPage";
import ArticlePage from "@/pages/ArticlePage/ArticlePage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import ArchivePage from "@/pages/ArchivePage/ArchivePage";
import SearchPage from "@/pages/SearchPage/SearchPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="category/:slug" element={<CategoryPage />} />
        <Route path="article/:id" element={<ArticlePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="archive" element={<ArchivePage />} />
        <Route path="search" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
