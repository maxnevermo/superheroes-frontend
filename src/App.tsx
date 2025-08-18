import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { HeroesListPage } from "./pages/HeroesList/HeroesList";
import { heroesListLoader } from "./routes/heroes-list/heroes-list.route";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeroesListPage />,
    loader: heroesListLoader,
  },
]);

function App() {
  return (
    <div className="min-h-screen">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
