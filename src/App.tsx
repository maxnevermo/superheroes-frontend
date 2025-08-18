import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HeroesListPage } from "./pages/HeroesList/HeroesList";
import { heroesListLoader } from "./routes/heroes-list/heroes-list.route";
import { HeroDetailsPage } from "./pages/HeroDetails/HeroDetails";
import { heroDetailsLoader } from "./routes/hero-details/hero-details.route";
import { Layout } from "./components/Layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HeroesListPage />,
        loader: heroesListLoader,
      },
      {
        path: ":id",
        element: <HeroDetailsPage />,
        loader: heroDetailsLoader,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
