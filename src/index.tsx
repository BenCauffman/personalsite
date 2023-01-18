import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/education",
//         element:
//       }
//     ]
//   },
// ]);
const root = createRoot(document.getElementById("root")!);

root.render(<App />);
