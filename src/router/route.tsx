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
} from "../modules";

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/experiences" element={<Experience />} />
      <Route path="/projects" element={<Project />} />
      <Route path="/education" element={<Education />} />
      <Route path="/cca" element={<CCA />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
);
