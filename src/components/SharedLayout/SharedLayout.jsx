import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Header, Navigation } from "../../pages/home/HomeStyled";
const SharedLayout = () => {
  return (
    <>
      <Header>
        <Navigation>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/catalog">Catalog</NavLink>
          <NavLink to="/favourite">Favourite</NavLink>
        </Navigation>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
