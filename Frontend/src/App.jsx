import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layouts/Layout";
import Home from "./pages/Home";
import Lawyers from "./pages/All_lawyer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      { path: "lawyers", element: <Lawyers /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "signup", element: <Signup /> },
      // Legacy routes - redirect to new paths
      { path: "All_lawyer", element: <Lawyers /> },
      { path: "About", element: <About /> },
      { path: "Contact", element: <Contact /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
