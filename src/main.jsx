import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import SignIn from "./screens/SignIn.jsx";
import SignUp from "./screens/SignUp.jsx";
import Info from "./screens/Info.jsx";

const router = createBrowserRouter([
    { path: "/", element: <SignIn /> },
    { path: "/sign-up", element: <SignUp /> },
    { path: "/info", element: <Info />}
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
