import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loader from "./Loader/Loader";
import NotFound from "../pages/PageNotFound/PageNotFound";
const Home = lazy(() => import("../pages/HomePage/HomePage"));

const CatalogPage = lazy(() => import("../pages/CatalogPage/CatalogPage"));
const Favorite = lazy(() => import("../pages/FavoritePage/FavoritePage"));
const SharedLayout = lazy(() =>
  import("../components/SharedLayout/SharedLayout")
);

const App = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<CatalogPage />} />
          <Route path="catalog/:movieId" element={<CatalogPage />}></Route>
          <Route path="favorite" element={<Favorite />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};
export default App;
