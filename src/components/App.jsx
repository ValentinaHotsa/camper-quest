import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Home from '../pages/Home';

const Home = lazy(() => import("../pages/home/Home"));

const CatalogPage = lazy(() => import("../pages/catalogPage/CatalogPage"));
const Favourite = lazy(() => import("../pages/favourite/Favourite"));
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
          <Route path="favourite" element={<Favourite />} />
          <Route path="*" element={<h1>Error</h1>} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
