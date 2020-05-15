import { Login, SearchPlanet, NotFound } from "../pages";

const Routes = [
  {
    path: "/login",
    exact: true,
    component: Login,
    isPrivate: false
  },
  {
    path: "/",
    exact: true,
    component: SearchPlanet,
    isPrivate: true
  },
  {
    path: "*",
    exact: false,
    component: NotFound,
    isPrivate: false
  }
];

export default Routes;
