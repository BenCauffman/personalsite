import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
const root = createRoot(document.getElementById("root")!);

root.render(
    <RouterProvider router={router} />
);
