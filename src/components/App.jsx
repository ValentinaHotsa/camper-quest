import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from '../pages/Home';

const Home = lazy(() => import("../pages/HomePage/HomePage"));

const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const Favorite = lazy(() => import("../pages/FavoritePage/FavoritePage"));
const SharedLayout = lazy(() =>
  import("../components/SharedLayout/SharedLayout")
);

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:movieId" element={<CatalogPage />}></Route>
          <Route path="favorite" element={<Favorite />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
