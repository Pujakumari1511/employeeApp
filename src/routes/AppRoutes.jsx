import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import { List } from "../pages/List";
import { ErrorPage } from "../pages/ErrorPage";
import { Form } from "react-router-dom";
import Header from "./Header/Header";

export const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children:[
            {path: 'list', element: <List />}
        ]
    }
])

