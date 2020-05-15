import { lazy } from "react";

const Login = lazy(() => import("./login"));
const SearchPlanet = lazy(() => import("./searchPlanet"));
const NotFound = lazy(() => import("./notFound"));

export { Login, SearchPlanet, NotFound };
