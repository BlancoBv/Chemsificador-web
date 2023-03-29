import {
  createBrowserRouter as Router,
  RouterProvider,
} from "react-router-dom";
import About from "../components/About";
import Content from "../components/Content";
import Error from "../Error";
import Layout from "../Layout";

function Rutas() {
  const rutas = Router([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,

      children: [
        { index: true, element: <Content /> },
        { path: "about", element: <About /> },
      ],
    },
  ]);

  return <RouterProvider router={rutas} />;
}

export default Rutas;
