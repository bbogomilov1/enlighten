import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import { createRoutesFromElements } from "react-router-dom/dist";
import HomePage from "./pages/HomePage";
import RootLayout from "./pages/RootLayout";
import ErrorPage from "./pages/ErrorPage";

const routeChildren = [
  <Route index="true" element={<HomePage />} />,
  // <Route path="products" element={<ProductsPage />} />,
  // <Route path="products/:productId" element={<ProductDetailPage />} />,
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
