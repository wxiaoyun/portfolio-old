import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import {
  App,
  PageNotFound,
  AboutMe,
  Experience,
  Project,
  Education,
  CCA,
  Blog,
} from "@/modules";
import { Routes } from "@/constants";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path={`/${Routes.aboutme}`} element={<AboutMe />} />
      <Route path={`/${Routes.experience}`} element={<Experience />} />
      <Route path={`/${Routes.project}`} element={<Project />} />
      <Route path={`/${Routes.education}`} element={<Education />} />
      <Route path={`/${Routes.cca}`} element={<CCA />} />
      <Route path={`/${Routes.blog}`} element={<Blog />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);
