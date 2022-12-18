import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import Main from "../layout/Main";
import AdminDash from "../pages/Admin/AdminDash/AdminDash";
import UpdateDelete from "../pages/Admin/UpdateDelete/UpdateDelete";
import Books from "../pages/Books/Books";
import DetailsBooks from "../pages/DetailsBooks/DetailsBooks";
import Home from "../pages/Home/Home";
import Signin from "../pages/Signin/Signin";
import ProtectedRoutes from "../protectedRoutes/ProtectedRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            { path: "/", element: <Home /> },
            { path: "/books", element: <Books /> },
            {
                path: "/details/:id",
                loader: ({ params }) => fetch(`https://book-store-server-theta.vercel.app/details_books/${params.id}`),
                element: <ProtectedRoutes><DetailsBooks /></ProtectedRoutes>
            },
            { path: "/signin", element: <Signin /> },

        ]
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
            { path: "/dashboard/adminDashboard", element: <AdminDash /> },
            { path: "/dashboard/updateDelete", element: <UpdateDelete /> },
        ]
    }
]);