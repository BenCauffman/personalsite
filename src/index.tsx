import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import MainBody from "./MainBody";
import ProfileLayout from "./ProfileLayout";

const root = createRoot(document.getElementById("root")!);
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// ]);
{
  /* <RouterProvider router={router} /> */
}

root.render(<App />);
