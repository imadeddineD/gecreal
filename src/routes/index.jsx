import { Suspense, lazy } from "react";
import { useRoutes } from "react-router-dom";
import LoadingScreen from "../components/loading";
import Layout from "../Layout";

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",  // This will wrap all routes with Navbar and Footer
      element: <Layout />,  // Use Layout as the wrapper for these routes
      children: [
        { path: "/", element: <App /> },
        { path: "contact", element: <Contact /> },
        { path: "propos", element: <Propos /> },
        { path: "services", element: <Services /> },
        { path: "services/service", element: <SiglePage /> },
        
      ]
    },
    
  ]);
}

const App = Loadable(lazy(() => import("../App")));
const Contact = Loadable(lazy(() => import("../components/Contact")));
const Propos = Loadable(lazy(() => import("../components/Propos")));
const Services = Loadable(lazy(() => import("../components/Services")));
const SiglePage = Loadable(lazy(() => import("../components/SiglePage")));

