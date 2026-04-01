import Home from "../pages/Home";
import { createBrowserRouter } from "react-router-dom";
import Room from "../pages/Room";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    index: true,
  },
  {
    path: "/join-room/:roomId",
    element: <Room />,
  },
]);
