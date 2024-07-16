import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import DashBoard from "../layout/DashBoard";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <DashBoard />,
        errorElement: <ErrorPage />,
        children: [
            {

            }
        ]
    }
]);