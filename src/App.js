import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom/dist";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import SchedulePage from "./pages/SchedulePage";
import ContactUsPage from "./pages/ContactUsPage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const routeChildren = [
  <Route key="home" index="true" element={<HomePage />} />,
  <Route key="about" path="about-us" element={<AboutUsPage />} />,
  <Route key="schedule" path="schedule" element={<SchedulePage />} />,
  <Route key="contact" path="contact-us" element={<ContactUsPage />} />,
];

const routeDefinitions = createRoutesFromElements(
  <Route errorElement={<ErrorPage />}>
    <Route path="/" element={<RootLayout />} children={routeChildren} />
  </Route>
);

const router = createBrowserRouter(routeDefinitions);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
