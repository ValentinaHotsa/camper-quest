import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Header, Navigation } from "../Main/MainStyles";
import Footer from "../Footer/Footer";
import Loader from "../Loader/Loader";

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favorite">Favorite</NavLink>
        </Navigation>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
};

export default SharedLayout;
